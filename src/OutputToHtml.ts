import type {UserName} from "./Types.ts";
import type {GLOBAL_HTML_Elements} from "./Types.ts";
import Html_Utils from "./Html_Utilities.ts";

export function generateHTML() {

    //region initialization of variables and html elements in the user data div
    let availableId = new Set<number>();
    let userDataArray: UserName[] = [];

    const {_userData, _availableId} = Html_Utils.setUserData(userDataArray, availableId);
    availableId = _availableId;
    userDataArray = _userData;

    Html_Utils.checkSavedAvailableIdData();

    //global variables
    const body = document.body;
    let lastUserAddedIndex: number | undefined = undefined;
    let current_id_number: number = 0;
    const user_data_div = document.createElement("div");
    const container = document.createElement("div");
    const id_container = document.createElement("div");
    const first_name_container = document.createElement("div");
    const last_name_container = document.createElement("div");
    const remove_button_container = document.createElement("div");

    const GLOBAL_HTML_ELEMENTS: GLOBAL_HTML_Elements = {
        _body: body,
        _user_data_div: user_data_div,
        _container: container,
        _id_container: id_container,
        _first_name_container: first_name_container,
        _last_name_container: last_name_container,
        _remove_button_container: remove_button_container
    }

    Html_Utils.initUserDataDiv(GLOBAL_HTML_ELEMENTS);
    //endregion

    //region function to update the user data div with current data in the user data array
    function updateUserDataDiv() {

        //clear the data containers to avoid duplicate data when adding a new user
        id_container.innerHTML = "";
        first_name_container.innerHTML = "";
        last_name_container.innerHTML = "";
        remove_button_container.innerHTML = "";

        userDataArray.sort((a, b) => a.id - b.id);

        //this foreach loop passes each item in the data array to an arrow function
        userDataArray.forEach((user) => {

            current_id_number = user.id;

            //here we create containers for each data item in the user object
            let id_div = document.createElement("div");
            let first_name_div = document.createElement("div");
            let last_name_div = document.createElement("div");
            let remove_button_div = document.createElement("div");

            //added the data divs to an array. Iterate over the array to add a margin bottom to each
            //and highlight the last added user with a yellow background colour
            const data_divs = [id_div, first_name_div, last_name_div, remove_button_div];

            for (let data_div of data_divs) {

                // data_div.style.marginBottom = "5px";
                data_div.style.display = "flex";
                data_div.style.alignItems = "center";
                data_div.style.height = "50px";

                const isLastItem = data_divs.indexOf(data_div) === data_divs.length - 1;

                if (lastUserAddedIndex != null && !isLastItem) {

                    if (lastUserAddedIndex === user.id) {

                        data_div.style.backgroundColor = "yellow";

                    }

                }

            }

            //create a remove button and add an event listener to remove the current user on click
            let remove_button = document.createElement("button");
            remove_button.innerText = "Remove";
            remove_button.id = user.id.toString();

            remove_button.addEventListener("click", () => {

                removeUser(user);

            });

            //the text data style is set to align left
            id_div.style.textAlign = "left";
            first_name_div.style.textAlign = "left";
            last_name_div.style.textAlign = "left";

            //interpolation is used here to create text nodes including the user object data items
            let id_text = document.createTextNode(`Id:  ${user.id}`)
            let first_name_text = document.createTextNode(`First name:  ${user.firstName}`)
            let last_name_text = document.createTextNode(`Last name:  ${user.lastName}`)

            //the text nodes are then added into the container divs
            id_div.appendChild(id_text);
            first_name_div.appendChild(first_name_text);
            last_name_div.appendChild(last_name_text);
            remove_button_div.appendChild(remove_button);

            //the data divs are then added to the corresponding containers
            id_container.appendChild(id_div);
            first_name_container.appendChild(first_name_div);
            last_name_container.appendChild(last_name_div);
            remove_button_container.appendChild(remove_button_div);

        });

        //this array will store each data container elements including the array data
        let dataItemsArray: HTMLElement[] = [];

        //the container is pushed onto an array
        dataItemsArray.push(id_container, first_name_container, last_name_container, remove_button_container);

        //iterate over the elements array and append all to the master container div
        for (let userDataContainer of dataItemsArray) {

            container.appendChild(userDataContainer);

        }

        //append the container div to the html document body
        user_data_div.appendChild(container);

        Html_Utils.setCursorFocus();

    }

    updateUserDataDiv();
    //endregion

    //region create the add new user form elements
    const add_new_user_h1 = document.createElement("h1");
    add_new_user_h1.innerText = "Add a new user";
    add_new_user_h1.style.textAlign = 'center';
    add_new_user_h1.style.marginTop= '40px';
    body.appendChild(add_new_user_h1);

    const add_new_user_container = document.createElement("div");
    add_new_user_container.style.width = '300px';
    add_new_user_container.style.marginLeft = "auto";
    add_new_user_container.style.marginRight= "auto";

    const inputs_container = document.createElement("div")
    inputs_container.style.display = "flex";
    inputs_container.style.flexDirection = "column";
    inputs_container.style.marginTop = "10px";
    inputs_container.style.marginBottom= "30px";

    const id_label = document.createElement("label");
    id_label.setAttribute("for", "id_input_id");
    id_label.textContent = "Id:";
    id_label.style.width = "50%";

    const id_input = document.createElement("input");
    id_input.type = "number";
    id_input.id = "id_input_id";

    //set the id_input value for the next user to be added
    if (availableId.size > 0) {

        let arrayFromSet: number[] = [...availableId];
        id_input.value = arrayFromSet[0].toString();

    } else {

        id_input.value = (current_id_number + 1).toString();

    }

    id_input.disabled = true;
    id_input.style.width = "50%"

    const id_div = document.createElement("div");
    id_div.style.display = "flex";
    id_div.style.flexDirection = "row";
    id_div.style.alignItems = "center";
    id_div.style.marginBottom = "10px";

    id_div.appendChild(id_label);
    id_div.appendChild(id_input);

    const first_name_label = document.createElement("label");
    first_name_label.setAttribute("for", "first_name_input_id");
    first_name_label.textContent = "First name:";
    first_name_label.style.width = "50%";

    const first_name_input = document.createElement("input");
    first_name_input.setAttribute("type", "string");
    first_name_input.id = "first_name_input_id";
    first_name_input.style.width = "50%"
    first_name_input.id = "first_name";

    const first_name_div = document.createElement("div");
    first_name_div.style.display = "flex";
    first_name_div.style.flexDirection = "row";
    first_name_div.style.alignItems = "center";
    first_name_div.style.marginTop = "10px";
    first_name_div.style.marginBottom = "10px";

    first_name_div.appendChild(first_name_label);
    first_name_div.appendChild(first_name_input);

    const last_name_label = document.createElement("label");
    last_name_label.setAttribute("for", "last_name_input_id");
    last_name_label.textContent = "Last name:";
    last_name_label.style.width = "50%";

    const last_name_input = document.createElement("input");
    last_name_input.setAttribute("type", "string");
    last_name_input.id = "last_name_input_id";
    last_name_input.style.width = "50%";
    last_name_input.id = "last_name";

    const last_name_div = document.createElement("div");
    last_name_div.style.display = "flex";
    last_name_div.style.flexDirection= "row";
    last_name_div.style.alignItems = "center";
    last_name_div.style.marginTop = "10px";

    last_name_div.appendChild(last_name_label);
    last_name_div.appendChild(last_name_input);

    inputs_container.appendChild(id_div);
    inputs_container.appendChild(first_name_div);
    inputs_container.appendChild(last_name_div);

    add_new_user_container.appendChild(inputs_container);
    body.appendChild(add_new_user_container);

    const button = document.createElement("button");
    button.innerText = "Add User";
    button.style.display = "block"
    button.style.margin = "0 auto";
    button.id = "add_user";
    body.appendChild(button);

    button.addEventListener("click", () => {

        add_new_user();

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            add_new_user();

        }

    });

    //endregion

    //region function to add a new user to the user data array
    function add_new_user() {

        //get the input field values
        let id: number = parseInt(id_input.value);
        let first_name = first_name_input.value;
        let last_name = last_name_input.value;

        //check that both name fields are not empty before adding the new user
        if (first_name != "" && last_name != "") {

            let new_user: UserName = {

                id: id,
                firstName: first_name,
                lastName: last_name

            }

            Html_Utils.saveNewUserToLocalStorage(new_user, userDataArray);

            lastUserAddedIndex = id;

            let updatedIdArray:number[] = Html_Utils.removeUserIdFromSavedIdData(id);

            //clear the input fields for the next user to be added
            first_name_input.value = "";
            last_name_input.value = "";

            let nextUserId;

            if (updatedIdArray.length !== 0) {

                nextUserId = updatedIdArray[0];

            } else {

                nextUserId = Html_Utils.highestIdNumberInUserArray(userDataArray) + 1;

            }

            id_input.value = nextUserId.toString();

            updateUserDataDiv();

        }
    }

    //endregion

    //region function to remove a user from the user data array
    function removeUser(userToBeRemoved: UserName) {

        let availIdTempStr: string | null = localStorage.getItem("availableIdData");

        let availIdArrayTemp: number[] = [];

        if (availIdTempStr !== null) {

            availIdArrayTemp = JSON.parse(availIdTempStr) as number[];

        }

        availIdArrayTemp.push(userToBeRemoved.id);
        availIdArrayTemp.sort((a, b) => a - b);

        availableId = new Set<number>(availIdArrayTemp);

        localStorage.removeItem("availableIdData");
        localStorage.setItem("availableIdData", JSON.stringify(availIdArrayTemp));

        Html_Utils.checkSavedAvailableIdData();

        id_input.value = availIdArrayTemp[0].toString();

        userDataArray.splice(userDataArray.findIndex(user => user.id === userToBeRemoved.id), 1)
        localStorage.removeItem("savedUserData");
        localStorage.setItem("savedUserData", JSON.stringify(userDataArray));
        updateUserDataDiv();

    }

    //endregion

}
