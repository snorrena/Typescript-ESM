import type UserData from "./Types.ts";
import getData from "./Data.ts";

function sortAvailableIdAscending(availableId: Set<number>) {

  if (availableId.size > 1) {

    const sortedNumberSet: number[] = Array.from(availableId);

    sortedNumberSet.sort((a, b) => a - b);

    availableId.clear();

    sortedNumberSet.forEach((num) => { availableId.add(num) });

  }

}

function setCursorFocus() {
  document.getElementById("first_name_input_id")?.focus();
}

function highestIdNumberInUserArray(userDataArray: UserData[]): number {

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

function setUserData(userDataArray: UserData[], availableId: Set<number>): { _userData: UserData[], _availableId: Set<number> } {

  let userDataJsonString: string | null = localStorage.getItem("savedUserData");

  if (userDataJsonString !== null) {

    let userDataArrayTemp = JSON.parse(userDataJsonString) as UserData[];

    if (userDataArrayTemp.length > 0) {

      userDataArray = JSON.parse(userDataJsonString) as UserData[];

      availableId = setAvailableId(availableId);

      checkSavedAvailableIdData();


    } else {

      userDataArray = getData();

      availableId.clear();

      localStorage.removeItem("availableIdData");

    }

  }


  return { _userData: userDataArray, _availableId: availableId };

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

const Html_Utils = {

  sortAvailableIdAscending,
  setCursorFocus,
  highestIdNumberInUserArray,
  setUserData,
  checkSavedAvailableIdData

}

export default Html_Utils;
