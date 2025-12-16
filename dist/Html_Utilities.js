import getData from "./Data.js";
function sortAvailableIdAscending(availableId) {
  if (availableId.size > 1) {
    const sortedNumberSet = Array.from(availableId);
    sortedNumberSet.sort((a, b) => a - b);
    availableId.clear();
    sortedNumberSet.forEach((num) => {
      availableId.add(num);
    });
  }
}
function setCursorFocus() {
  document.getElementById("first_name_input_id")?.focus();
}
function highestIdNumberInUserArray(userDataArray) {
  userDataArray.sort((a, b) => a.id - b.id);
  return userDataArray[userDataArray.length - 1].id;
}
function setAvailableId(availableId) {
  let availableIdJsonString = localStorage.getItem("availableIdData");
  if (availableIdJsonString !== null) {
    let availableIdTemp = JSON.parse(availableIdJsonString);
    console.log(`availableId: ${JSON.stringify(availableIdTemp)}`);
    if (availableIdTemp.length > 0) {
      availableId = new Set(availableIdTemp);
    }
  }
  return availableId;
}
function setUserData(userDataArray, availableId) {
  let userDataJsonString = localStorage.getItem("savedUserData");
  if (userDataJsonString !== null) {
    let userDataArrayTemp = JSON.parse(userDataJsonString);
    if (userDataArrayTemp.length > 0) {
      userDataArray = JSON.parse(userDataJsonString);
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
function checkSavedAvailableIdData() {
  let availIdStr = localStorage.getItem("availableIdData");
  let availIdNumSet = /* @__PURE__ */ new Set();
  if (availIdStr != null) {
    let numArray = JSON.parse(availIdStr);
    if (numArray.length > 0)
      availIdNumSet = /* @__PURE__ */ new Set([...numArray]);
  }
  console.log(`deleted index #s available for reuse: ${[...availIdNumSet]}`);
}
const Html_Utils = {
  sortAvailableIdAscending,
  setCursorFocus,
  highestIdNumberInUserArray,
  setUserData,
  checkSavedAvailableIdData
};
var Html_Utilities_default = Html_Utils;
export {
  Html_Utilities_default as default
};
