const getData = function() {
  let userData1 = {
    id: 1,
    firstName: "Scott",
    lastName: "Norrena"
  };
  let userData2 = {
    id: 2,
    firstName: "Tammy",
    lastName: "Jones"
  };
  let userData3 = {
    id: 3,
    firstName: "Joe",
    lastName: "Forte"
  };
  let userData4 = {
    id: 4,
    firstName: "Sue",
    lastName: "Me"
  };
  let userData5 = {
    id: 5,
    firstName: "Fuc",
    lastName: "Thaht"
  };
  let userNameArray = [];
  userNameArray.push(userData1, userData2, userData3, userData4, userData5);
  return userNameArray;
};
var Data_default = getData;
const dataArray = getData();
export {
  dataArray,
  Data_default as default
};
