import { outputUserData as displayDataInDevConsole } from "./DisplayData.ts"
import { generateHTML } from "./OutputToHtml.ts"


//only generate the html if the runtime is a browser
if (typeof window === "object") {

  generateHTML();

} else {

  //this method outputs the contents of the user data array to the console
  displayDataInDevConsole();

}
