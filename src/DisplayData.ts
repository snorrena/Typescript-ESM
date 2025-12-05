//import of a default export from Data.ts
import getData from "./Data.ts"
//import of a named import from Data.ts
import { userDataArray } from "./Data.ts"
import type UserName from "./Types.ts"

//definition of a named exported function with no return type
export function outputUserData(): void {

  //the getdata() method returns an array of type UserName
  // the for loop iterates over the array of user names and uses interpolation to output the details of each user
  console.log("For of loop")
  console.log()
  for (let name of userDataArray) {
    console.log(`id: ${name.id}`)
    console.log(`firstName: ${name.firstName}`)
    console.log(`lastName: ${name.lastName}`)
  }
  console.log()


  console.log("foreach loop")
  console.log()
  //user a foreach method on the getData() method and an arrow function to iterate over the user name array
  userDataArray.forEach((user) => { console.log(`id:${user.id}, firstName:${user.firstName}, lastName:${user.lastName}`) })
  console.log()
  

  console.log("traditional for loop with index")
  console.log()
  const userNameArray: UserName[] = getData();
  for (let i = 0; i < userNameArray.length; i++) {
    console.log(`id:${userNameArray[i].id}`)
    console.log(`firstName:${userNameArray[i].firstName}`)
    console.log(`lastName:${userNameArray[i].lastName}`)
    if (i < userNameArray.length - 1) {
      console.log(" - ")
    }
  }

}
