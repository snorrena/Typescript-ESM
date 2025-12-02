import { dataArray } from "./DisplayData.ts";
import type UserData from "./Types.ts";

export function generateHTML() {

  const availableId:number[] = [];

  //get the body element and add an underlined heading
  const body = document.body;
  const heading = document.createElement("h1");
  let lastUserAddedIndex: number;
  heading.innerHTML = "User Array Content"
  heading.style.textDecoration = "underline";
  body.appendChild(heading);

  //create the main div to contain all user data elements
  const user_data_div = document.createElement("div");
  user_data_div.id = "user_data_div_id";
  body.appendChild(user_data_div);

  //the container element uses display flex to house three data sections evenly space on 25% of the screen
  let container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "row";
  container.style.justifyContent = "space-between";
  container.style.width = "25%";

  //these containers will hold the array data fields of id, first name and last name
  let id_container = document.createElement("div");
  let first_name_container = document.createElement("div");
  let last_name_container = document.createElement("div");

  //this container will  hold the remove buttons for each user line item
  let remove_button_container = document.createElement("div");

  //each data container is set as flex row with the data itemms evenly spaced between
  //the data containers are added to an array to add the required style attributs to all via a for loop
  const data_containers = [id_container, first_name_container, last_name_container, remove_button_container];
  for (let container of data_containers) {
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "space-between";
  }

  //initialize and set the current user index #
  let current_id_number = 0;

  function updateUserDataDiv() {

    //clear the data containers to avoid duplicate data when adding a new user
    id_container.innerHTML = "";
    first_name_container.innerHTML = "";
    last_name_container.innerHTML = "";
    remove_button_container.innerHTML = "";

    dataArray.sort((a,b) => a.id - b.id);

    //this foreach loop passes each item in the data array to an arrow function
    dataArray.forEach((user) => {

      current_id_number = user.id;

      //here we create containers for each data item in the user object
      let id_div = document.createElement("div");
      let first_name_div = document.createElement("div");
      let last_name_div = document.createElement("div");
      let remove_button_div = document.createElement("div");

      //added the data divs to an array. Iterate over the array to add a margin bottom to each
      //and highlight an last added user with a yellow background colour
      const data_divs = [id_div, first_name_div, last_name_div, remove_button_div];
      for (let data_div of data_divs) {
        data_div.style.marginBottom = "5px";
        const isLastItem = data_divs.indexOf(data_div) === data_divs.length - 1;
        if(lastUserAddedIndex != null && !isLastItem){
          if(lastUserAddedIndex === user.id){
            data_div.style.backgroundColor = "yellow";
          }
        }
      }

      //create a remove button and add an event listener to remove the current user on click
      let remove_button = document.createElement("button");
      remove_button.innerText = "Remove";
      remove_button.addEventListener("click", () => {
        removeUser(user);
      });

      //the text data style is set to align left 
      id_div.style.textAlign = "left";
      first_name_div.style.textAlign = "left";
      last_name_div.style.textAlign = "left";

      //interpolation is used here to create text nodes including the user object data items
      let id_text = document.createTextNode(`id: ${user.id}`)
      let first_name_text = document.createTextNode(`first name: ${user.firstName}`)
      let last_name_text = document.createTextNode(`last name: ${user.lastName}`)

      //the text nodes are then added into the container divs
      id_div.appendChild(id_text);
      first_name_div.appendChild(first_name_text);
      last_name_div.appendChild(last_name_text);
      remove_button_div.appendChild(remove_button);

      //the data divs are then added to the coresponding containers
      id_container.appendChild(id_div);
      first_name_container.appendChild(first_name_div);
      last_name_container.appendChild(last_name_div);
      remove_button_container.appendChild(remove_button_div);

    });

    //this array will store each data container elements including the array data
    let dataItemsArray: HTMLElement[] = [];

    //the container are pushed onto an array
    dataItemsArray.push(id_container, first_name_container, last_name_container, remove_button_container);

    //iterate over the elements array and append all to the master container div
    for (let userDataContainer of dataItemsArray) {
      container.appendChild(userDataContainer);
    }

    //append the container div to the html document body
    user_data_div.appendChild(container);

  };

  //this is the call of the function defined above
  updateUserDataDiv();

  //create a heading for the add new user form
  const add_new_user_h2 = document.createElement("h2");
  add_new_user_h2.innerText = "Add a new user";
  add_new_user_h2.style.textDecoration = "underline";

  //create a div to contain the add new user form
  const add_new_user_div = document.createElement("div");
  add_new_user_div.style.width = "25%";
  add_new_user_div.style.marginTop = "20px";
  add_new_user_div.style.textAlign = "center";
  add_new_user_div.appendChild(add_new_user_h2);

  body.appendChild(add_new_user_div);

  //create a div to contains the input fields of our add user form
  const inputs_container = document.createElement("div")
  inputs_container.style.display = "flex";
  inputs_container.style.flexDirection = "column";
  inputs_container.style.alignItems = "left";
  inputs_container.style.justifyContent = "center";
  inputs_container.style.width = "25%";
  inputs_container.style.marginTop = "10px";

  //create the id input field and set to disable as this field will be auto incremented
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
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      add_new_user();
    }
  })
  body.appendChild(button_div);

  function add_new_user() {
    let id:number = current_id_number;
    if(availableId.length != 0){
      sortAvailableIdAscending();
      id = availableId.shift() as number;
    }else{

    id = ++current_id_number;
    }
    lastUserAddedIndex = id;
    let first_name = first_name_input.value;
    let last_name = last_name_input.value;
    if (first_name != "" && last_name != "") {
      let new_user: UserData = {
        id: id,
        firstName: first_name,
        lastName: last_name
      }
      first_name_input.value = "";
      last_name_input.value = "";
      let nextUserId = 0;
      if(availableId.length != 0){
        nextUserId = availableId[0];
      }else{
        nextUserId = highestIdNumberInUserArray() + 1;
      }
      id_input.value = nextUserId.toString();
      dataArray.push(new_user);
      updateUserDataDiv();

    }
  }

  function highestIdNumberInUserArray():number{
    dataArray.sort((a,b)=> a.id - b.id);
    return dataArray[dataArray.length-1].id;
  }

  function removeUser(userToBeRemoved: UserData) {

    availableId.push(userToBeRemoved.id);
    sortAvailableIdAscending();
    id_input.value = availableId[0].toString();

    dataArray.splice(dataArray.findIndex(user => user.id === userToBeRemoved.id), 1)
    updateUserDataDiv();

  }
  function sortAvailableIdAscending(){

      if(availableId.length > 1){
      availableId.sort((a, b) => a - b);
      }
  }

};
