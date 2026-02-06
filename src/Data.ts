import type { UserName } from "./Types.ts";

const getData = function (): UserName[] {
  const userData1: UserName = {
    id: 1,
    firstName: "Scott",
    lastName: "Norrena",
  };
  const userData2: UserName = {
    id: 2,
    firstName: "Tammy",
    lastName: "Jones",
  };
  const userData3: UserName = {
    id: 3,
    firstName: "Joe",
    lastName: "Forte",
  };
  const userData4: UserName = {
    id: 4,
    firstName: "Sue",
    lastName: "Me",
  };
  const userData5: UserName = {
    id: 5,
    firstName: "Fuc",
    lastName: "Thaht",
  };

  const userNameArray: UserName[] = [];

  userNameArray.push(userData1, userData2, userData3, userData4, userData5);

  return userNameArray;
};

export default getData;

export const userDataArray: UserName[] = getData();
