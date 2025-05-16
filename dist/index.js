import { outputUserData as displayDataInDevConsole } from "./DisplayData.js";
import { generateHTML } from "./OutputToHtml.js";
displayDataInDevConsole();
if (typeof window === "object") {
    generateHTML();
}
