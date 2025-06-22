var _a;
import { outputUserData as displayDataInDevConsole } from "./DisplayData.js";
import { generateHTML } from "./OutputToHtml.js";
if (typeof window === "object") {
    generateHTML();
    (_a = document.getElementById("first_name_input_id")) === null || _a === void 0 ? void 0 : _a.focus();
}
else {
    displayDataInDevConsole();
}
