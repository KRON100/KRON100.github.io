// Get the elements
const newItemInput = document.getElementById("new-item");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");

// Function to add a new item to the list
function addNewItem(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the text input value
  const newItemText = newItemInput.value;

  // Create a new list item
  const newItem = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newItemText;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteItem);
  newItem.appendChild(span);
  newItem.appendChild(deleteBtn);

  // Add the new item to the list
  list.appendChild(newItem);

  // Reset the input value
  newItemInput.value = "";
}

// Function to delete an item from the list
function deleteItem(event) {
  const listItem = event.target.parentElement;
  list.removeChild(listItem);
}

// Add event listener to the add button
addBtn.addEventListener("click", addNewItem);
