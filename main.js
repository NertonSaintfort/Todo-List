//todo:
/* Getting the elements from the HTML file. */
let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

/* Creating a new paragraph element and adding a class to it. */
addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  /* Taking the value of the input field and adding it to the paragraph. */
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  /* Adding an event listener to the paragraph element. When the paragraph is clicked, the text
decoration is changed to line-through. */
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  /* Adding an event listener to the paragraph element. When the paragraph is double clicked, the
paragraph is removed from the toDoContainer. */
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
