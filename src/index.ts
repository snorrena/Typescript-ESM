import { outputUserData as displayDataInDevConsole } from "./DisplayData.ts"
import { generateHTML } from "./OutputToHtml.ts"

//this method outputs the contents of the user data array in the browser developer console
displayDataInDevConsole();

//only generate the html if the runtime is a browser
if (typeof window === "object") {

  generateHTML();

}
