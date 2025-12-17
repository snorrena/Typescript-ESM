import type {UserName, GLOBAL_HTML_Elements} from "./Types.ts";
import getData from "./Data.ts";

// function initUserDataDiv(body: HTMLElement, user_data_div: HTMLElement, container: HTMLElement, id_container: HTMLElement, first_name_container: HTMLElement, last_name_container: HTMLElement, remove_button_container: HTMLElement) {
function initUserDataDiv(GLOBAL_HTML_ELEMENTS: GLOBAL_HTML_Elements) {

    const {
        _body: body,
        _user_data_div: user_data_div,
        _container: container,
        _id_container: id_container,
        _first_name_container: first_name_container,
        _last_name_container: last_name_container,
        _remove_button_container: remove_button_container
    } = GLOBAL_HTML_ELEMENTS;

    const heading = document.createElement("h1");
    heading.innerHTML = "User Data";
    body.appendChild(heading);

    //create the main div to contain all user data elements
    user_data_div.id = "user_data_div_id";
    body.appendChild(user_data_div);

    //the container element uses display flex to house three data sections evenly space on 25% of the screen
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.justifyContent = "space-between";
    container.style.width = "26%";
    container.style.border = "1px solid black";
    container.style.padding = "10px";

    //each data container is set as flex row with the data items evenly spaced between
    //the data containers are added to an array to add the required style attributes to all via a for loop
    const data_containers = [id_container, first_name_container, last_name_container, remove_button_container];

    for (let container of data_containers) {

        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.justifyContent = "space-between";

    }

}

function sortAvailableIdAscending(availableId: Set<number>) {

    if (availableId.size > 1) {

        const sortedNumberSet: number[] = Array.from(availableId);

        sortedNumberSet.sort((a, b) => a - b);

        availableId.clear();

        sortedNumberSet.forEach((num) => {
            availableId.add(num)
        });

    }

}

function setCursorFocus() {
    document.getElementById("first_name_input_id")?.focus();
}

function highestIdNumberInUserArray(userDataArray: UserName[]): number {

    userDataArray.sort((a, b) => a.id - b.id);
    return userDataArray[userDataArray.length - 1].id;

}

function setAvailableId(availableId: Set<number>): Set<number> {

    let availableIdJsonString: string | null = localStorage.getItem("availableIdData");

    if (availableIdJsonString !== null) {

        let availableIdTemp = JSON.parse(availableIdJsonString) as number[];
        console.log(`availableId: ${JSON.stringify(availableIdTemp)}`);

        if (availableIdTemp.length > 0) {

            availableId = new Set<number>(availableIdTemp);

        }

    }

    return availableId;

}

function setUserData(userDataArray: UserName[], availableId: Set<number>): {
    _userData: UserName[],
    _availableId: Set<number>
} {

    let userDataJsonString: string | null = localStorage.getItem("savedUserData");

    if (userDataJsonString !== null) {

        let userDataArrayTemp = JSON.parse(userDataJsonString) as UserName[];

        if (userDataArrayTemp.length > 0) {

            userDataArray = JSON.parse(userDataJsonString) as UserName[];

            availableId = setAvailableId(availableId);

            checkSavedAvailableIdData();


        } else {

            userDataArray = getData();

            availableId.clear();

            localStorage.removeItem("availableIdData");

        }

    }

    return {_userData: userDataArray, _availableId: availableId};

}

function checkSavedAvailableIdData(): void {

    let availIdStr = localStorage.getItem("availableIdData");

    let availIdNumSet = new Set<number>();

    if (availIdStr != null) {

        let numArray = JSON.parse(availIdStr) as number[];

        if (numArray.length > 0)
            availIdNumSet = new Set([...numArray]);

    }

    console.log(`deleted index #s available for reuse: ${[...availIdNumSet]}`);

}

function removeUserIdFromSavedIdData(id: number): number[] {

    //update the array of available user id number
    let idArray: number[] = [];
    let idArrayStr = localStorage.getItem("availableIdData");

    if (idArrayStr != null) {

        idArray = JSON.parse(idArrayStr) as number[];

        if (idArray.length > 1) {

            idArray.sort((a, b) => a - b);

        }

        if (idArray.indexOf(id) !== -1) {

            idArray.splice(idArray.indexOf(id), 1);
            localStorage.removeItem("availableIdData");
            localStorage.setItem("availableIdData", JSON.stringify(idArray));

        }

        Html_Utils.checkSavedAvailableIdData();

    }

    return idArray;

}

function saveNewUserToLocalStorage(user: UserName, userDataArray: UserName[]): void {

    userDataArray.push(user);
    userDataArray.sort((a, b) => a.id - b.id);
    localStorage.removeItem("savedUserData");
    localStorage.setItem("savedUserData", JSON.stringify(userDataArray));

}

const Html_Utils = {

    sortAvailableIdAscending,
    setCursorFocus,
    highestIdNumberInUserArray,
    setUserData,
    checkSavedAvailableIdData,
    initUserDataDiv,
    removeUserIdFromSavedIdData,
    saveNewUserToLocalStorage

}

export default Html_Utils;
