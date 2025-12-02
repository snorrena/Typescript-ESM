import { dataArray } from "./DisplayData.js";
export function generateHTML() {
    const availableId = [];
    const body = document.body;
    const heading = document.createElement("h1");
    let lastUserAddedIndex;
    heading.innerHTML = "User Array Content";
    heading.style.textDecoration = "underline";
    body.appendChild(heading);
    const user_data_div = document.createElement("div");
    user_data_div.id = "user_data_div_id";
    body.appendChild(user_data_div);
    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.justifyContent = "space-between";
    container.style.width = "25%";
    let id_container = document.createElement("div");
    let first_name_container = document.createElement("div");
    let last_name_container = document.createElement("div");
    let remove_button_container = document.createElement("div");
    const data_containers = [id_container, first_name_container, last_name_container, remove_button_container];
    for (let container of data_containers) {
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.justifyContent = "space-between";
    }
    let current_id_number = 0;
    function updateUserDataDiv() {
        id_container.innerHTML = "";
        first_name_container.innerHTML = "";
        last_name_container.innerHTML = "";
        remove_button_container.innerHTML = "";
        dataArray.sort((a, b) => a.id - b.id);
        dataArray.forEach((user) => {
            current_id_number = user.id;
            let id_div = document.createElement("div");
            let first_name_div = document.createElement("div");
            let last_name_div = document.createElement("div");
            let remove_button_div = document.createElement("div");
            const data_divs = [id_div, first_name_div, last_name_div, remove_button_div];
            for (let data_div of data_divs) {
                data_div.style.marginBottom = "5px";
                const isLastItem = data_divs.indexOf(data_div) === data_divs.length - 1;
                if (lastUserAddedIndex != null && !isLastItem) {
                    if (lastUserAddedIndex === user.id) {
                        data_div.style.backgroundColor = "yellow";
                    }
                }
            }
            let remove_button = document.createElement("button");
            remove_button.innerText = "Remove";
            remove_button.addEventListener("click", () => {
                removeUser(user);
            });
            id_div.style.textAlign = "left";
            first_name_div.style.textAlign = "left";
            last_name_div.style.textAlign = "left";
            let id_text = document.createTextNode(`id: ${user.id}`);
            let first_name_text = document.createTextNode(`first name: ${user.firstName}`);
            let last_name_text = document.createTextNode(`last name: ${user.lastName}`);
            id_div.appendChild(id_text);
            first_name_div.appendChild(first_name_text);
            last_name_div.appendChild(last_name_text);
            remove_button_div.appendChild(remove_button);
            id_container.appendChild(id_div);
            first_name_container.appendChild(first_name_div);
            last_name_container.appendChild(last_name_div);
            remove_button_container.appendChild(remove_button_div);
        });
        let dataItemsArray = [];
        dataItemsArray.push(id_container, first_name_container, last_name_container, remove_button_container);
        for (let userDataContainer of dataItemsArray) {
            container.appendChild(userDataContainer);
        }
        user_data_div.appendChild(container);
    }
    ;
    updateUserDataDiv();
    const add_new_user_h2 = document.createElement("h2");
    add_new_user_h2.innerText = "Add a new user";
    add_new_user_h2.style.textDecoration = "underline";
    const add_new_user_div = document.createElement("div");
    add_new_user_div.style.width = "25%";
    add_new_user_div.style.marginTop = "20px";
    add_new_user_div.style.textAlign = "center";
    add_new_user_div.appendChild(add_new_user_h2);
    body.appendChild(add_new_user_div);
    const inputs_container = document.createElement("div");
    inputs_container.style.display = "flex";
    inputs_container.style.flexDirection = "column";
    inputs_container.style.alignItems = "left";
    inputs_container.style.justifyContent = "center";
    inputs_container.style.width = "25%";
    inputs_container.style.marginTop = "10px";
    const id_input = document.createElement("input");
    id_input.type = "number";
    id_input.id = "id_input_id";
    id_input.value = (current_id_number + 1).toString();
    id_input.disabled = true;
    const first_name_input = document.createElement("input");
    first_name_input.setAttribute("type", "string");
    first_name_input.id = "first_name_input_id";
    const last_name_input = document.createElement("input");
    last_name_input.setAttribute("type", "string");
    last_name_input.id = "last_name_input_id";
    const id_label = document.createElement("label");
    id_label.setAttribute("for", "id_input_id");
    id_label.textContent = "Id:";
    id_label.style.display = "inline-block";
    id_label.style.width = "100px";
    const first_name_label = document.createElement("label");
    first_name_label.setAttribute("for", "first_name_input_id");
    first_name_label.textContent = "First Name:";
    first_name_label.style.display = "inline-block";
    first_name_label.style.width = "100px";
    const last_name_label = document.createElement("label");
    last_name_label.setAttribute("for", "last_name_input_id");
    last_name_label.textContent = "Last Name:";
    last_name_label.style.display = "inline-block";
    last_name_label.style.width = "100px";
    const id_div = document.createElement("div");
    id_div.style.marginBottom = "5px";
    const first_name_div = document.createElement("div");
    first_name_div.style.marginBottom = "5px";
    const last_name_div = document.createElement("div");
    id_div.appendChild(id_label);
    id_div.appendChild(id_input);
    first_name_div.appendChild(first_name_label);
    first_name_div.appendChild(first_name_input);
    last_name_div.appendChild(last_name_label);
    last_name_div.appendChild(last_name_input);
    inputs_container.appendChild(id_div);
    inputs_container.appendChild(first_name_div);
    inputs_container.appendChild(last_name_div);
    body.appendChild(inputs_container);
    const button_div = document.createElement("div");
    button_div.style.marginTop = "10px";
    button_div.style.width = "25%";
    button_div.style.display = "flex";
    button_div.style.justifyContent = "center";
    const button = document.createElement("button");
    button.innerText = "Add User";
    button_div.appendChild(button);
    button.addEventListener("click", add_new_user);
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            add_new_user();
        }
    });
    body.appendChild(button_div);
    function add_new_user() {
        let id = current_id_number;
        if (availableId.length != 0) {
            sortAvailableIdAscending();
            id = availableId.shift();
        }
        else {
            id = ++current_id_number;
        }
        lastUserAddedIndex = id;
        let first_name = first_name_input.value;
        let last_name = last_name_input.value;
        if (first_name != "" && last_name != "") {
            let new_user = {
                id: id,
                firstName: first_name,
                lastName: last_name
            };
            dataArray.push(new_user);
            first_name_input.value = "";
            last_name_input.value = "";
            let nextUserId = 0;
            if (availableId.length != 0) {
                nextUserId = availableId[0];
            }
            else {
                nextUserId = highestIdNumberInUserArray() + 1;
            }
            id_input.value = nextUserId.toString();
            updateUserDataDiv();
        }
    }
    function highestIdNumberInUserArray() {
        dataArray.sort((a, b) => a.id - b.id);
        return dataArray[dataArray.length - 1].id;
    }
    function removeUser(userToBeRemoved) {
        availableId.push(userToBeRemoved.id);
        sortAvailableIdAscending();
        id_input.value = availableId[0].toString();
        dataArray.splice(dataArray.findIndex(user => user.id === userToBeRemoved.id), 1);
        updateUserDataDiv();
    }
    function sortAvailableIdAscending() {
        if (availableId.length > 1) {
            availableId.sort((a, b) => a - b);
        }
    }
}
;
