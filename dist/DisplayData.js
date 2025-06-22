import getData from "./Data.js";
export function outputUserData() {
    console.log("For of loop");
    console.log();
    for (let name of getData()) {
        console.log(`id: ${name.id}`);
        console.log(`firstName: ${name.firstName}`);
        console.log(`lastName: ${name.lastName}`);
    }
    console.log();
    console.log("foreach loop");
    console.log();
    getData().forEach((user) => { console.log(`id:${user.id}, firstName:${user.firstName}, lastName:${user.lastName}`); });
    console.log();
    console.log("tranditional for loop with index");
    console.log();
    const userNameArray = getData();
    for (let i = 0; i < userNameArray.length; i++) {
        console.log(`id:${userNameArray[i].id}`);
        console.log(`firstName:${userNameArray[i].firstName}`);
        console.log(`lastName:${userNameArray[i].lastName}`);
        if (i < userNameArray.length - 1) {
            console.log(" - ");
        }
    }
}
export const dataArray = getData();
