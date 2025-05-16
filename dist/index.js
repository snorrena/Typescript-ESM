import { outputUserData as displayDataInDevConsole } from "./DisplayData.js";
import { generateHTML } from "./OutputToHtml.js";
if (typeof window === "object") {
    generateHTML();
}
else {
    displayDataInDevConsole();
}
