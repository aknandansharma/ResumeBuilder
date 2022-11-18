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



// Genrating CV

function generateCV(){
  console.log("Genrate CV");

  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  // Nmae
  document.getElementById("nameT2").innerHTML = nameField;

  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  // email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;
  // address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  // Links
  //Profile linkl
  document.getElementById("webT").innerHTML =
    document.getElementById("webField").value;
  // twitter
  document.getElementById("twitterT").innerHTML =
    document.getElementById("twitterField").value;
  // git
  document.getElementById("gitT").innerHTML =
    document.getElementById("gitField").value;
  // linkedin
  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;

  // Objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // Work exp
  let wes = document.getElementById('weField')
  let str = "";
  for(let e of wes){
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById('weT').innerHTML = str;


}
