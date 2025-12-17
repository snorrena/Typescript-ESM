//the user name type is imported for use in the type definitions in data 
import type {UserName} from "./Types.ts"

const getData = function(): UserName[] {

  let userData1: UserName = {
    id: 1,
    firstName: "Scott",
    lastName: "Norrena"
  }
  let userData2: UserName = {
    id: 2,
    firstName: "Tammy",
    lastName: "Jones"
  }
  let userData3: UserName = {
    id: 3,
    firstName: "Joe",
    lastName: "Forte"
  }
  let userData4: UserName = {
    id: 4,
    firstName: "Sue",
    lastName: "Me"
  }
  let userData5: UserName = {
    id: 5,
    firstName: "Fuc",
    lastName: "Thaht"
  }

  let userNameArray: UserName[] = [];

  userNameArray.push(userData1, userData2, userData3, userData4, userData5);

  return userNameArray;

}

export default getData

export const userDataArray: UserName[] = getData();
