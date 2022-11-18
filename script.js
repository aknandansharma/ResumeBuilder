function addNewWEField() {
  console.log("Add New WE Field");
  let newNode = document.createElement('textarea')
  newNode.classList.add('form-control')
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("row", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById('we')
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAEField() {
  console.log("Add New AE Field");
  let newNode = document.createElement('textarea')
  newNode.classList.add('form-control')
  newNode.classList.add("aeField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("row", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aeOb = document.getElementById('ae')
  let aeAddButtonOb = document.getElementById("aeAddButton");
  aeOb.insertBefore(newNode, aeAddButtonOb)
}


