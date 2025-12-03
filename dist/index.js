import { outputUserData as displayDataInDevConsole } from "./DisplayData.js";
import { generateHTML } from "./OutputToHtml.js";
if (typeof window === "object") {
  generateHTML();
  document.getElementById("first_name_input_id")?.focus();
} else {
  displayDataInDevConsole();
}
