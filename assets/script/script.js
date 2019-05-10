// inputs
let fullName = document.getElementById("nameInput");
let phoneNumber = document.getElementById("phoneNumberInput");
// inputs values
let nameVal = fullName.value;
let phoneVal = phoneNumber.value;
// buttons
let saveInput = document.getElementById("saveInput");
let sortAZ = document.getElementById("sortAZ");
// object
let listObj =[];
let phonebook = [{ name: 'Petras', phone: '+370345678754' }];
//outputs
let outputs = document.getElementById("outputSection");

let editIndex = -1; // si eilute skirta paspaudus edit mygtuką, kad būtų galima replace padaryti, o ne kurtų naują įrašą


//funkcija kuri printina duomenis paimtus is inputs
function printObj() {
  let outputs = document.getElementById("outputSection");
  outputs.innerHTML="";
  listObj.forEach(function(val, trata) {
    let pParagraph = document.createElement('li');
    let forName = document.createElement('span');
    let forPhone = document.createElement('span');



      // bandau padaryti, kad mestų klaidą jei per ilgas nr įvestas
      if (phoneNumber.value.length > 12 || phoneNumber.value == "" || fullName.value == "") {
        alert("Phone Number is to long");
      };





    // Creating and appending delete button
    let forDelete = document.createElement("span");
    let deleteBtn = document.createElement("button");
    // creating text to be displayed on button
    let textOnTheButton = document.createTextNode("Delete");
    // appending text to button
    deleteBtn.appendChild(textOnTheButton);
    forDelete.appendChild(deleteBtn);



    // event listener for delete button
    deleteBtn.addEventListener("click", event => {
      console.log("paspaudziau delete", trata);
      //listObj.splice(0, 4, 2);
      listObj.splice(trata, 1);
      printObj();
      localStorage.setItem('localStoragePhoneBook', JSON.stringify(listObj));
    });


    // Creating and appending edit button
    let forEdit = document.createElement("span");
    let editBtn = document.createElement("button");
    // creating text to be displayed on button
    let textOnTheEdit = document.createTextNode("Edit");
    // appending text to button
    editBtn.appendChild(textOnTheEdit);
    forDelete.appendChild(editBtn);

    // event listener for edit button
    editBtn.addEventListener("click", event => {
      console.log("paspaudziau edit", trata);

      editIndex = trata;                  // si eilute skirta paspaudus edit mygtuką, kad būtų galima replace padaryti, o ne kurtų naują įrašą
      fullName.value = val.fullName;      // ši eilutė skirta pasiimti fullName.value.value ir įkelti į input langeli redagavimui
      phoneNumber.value = val.phone;      // ši eilutė skirta pasiimti phoneNumber.value ir įkelti į input langeli redagavimui

    });












    // creating and appending favorite image
    let forFav = document.createElement("span");
    let forFavorite = document.createElement("img");
    forFavorite.id = "favoriteImg";
    forFavorite.src = "assets/images/ic_heartWhite_24px.svg"
    forFav.appendChild(forFavorite);

    // appending everything to pParagraph
    forName.textContent=val.fullName;
    forPhone.textContent=val.phone;
    pParagraph.appendChild(forName);
    pParagraph.appendChild(forPhone);
    pParagraph.appendChild(forDelete);
    pParagraph.appendChild(forFav);


    outputs.appendChild(pParagraph);
  });
};


// funkcija, kuri isvalo input laukelius
function refreshInput(){
  document.getElementById('inputs').reset();
};



// event listener for saving
// kodaspo even => atpažys ar prieš tai paspaustas edit mygtukas ar ne ir jei paspaustas tai duomenis priskiria tam pačiam indeksui, o jei nebuvo paspaustas edit mygtukas tada saugo naują įraša į listo gala
  saveInput.addEventListener("click", event => {
    if (editIndex != -1) {                        // si eilute skirta paspaudus edit mygtuką, kad būtų galima replace padaryti, o ne kurtų naują įrašą
      listObj[editIndex] = {fullName :fullName.value, phone: phoneNumber.value};
      editIndex = -1;                             // si eilute skirta paspaudus edit mygtuką, kad būtų galima replace padaryti, o ne kurtų naują įrašą
    } else {
      listObj.push({fullName :fullName.value, phone: phoneNumber.value});
    }

  //let nameValue = phoneInput.value;
  printObj();
  refreshInput();


// saugau i local storage
  localStorage.setItem('localStoragePhoneBook', JSON.stringify(listObj));
});
// uzsikrovus puslapiui paima is localstorage duomenis

window.addEventListener('load', event => {
  var bla = localStorage.getItem('localStoragePhoneBook');
  if (bla) {
    listObj = JSON.parse(bla);
    printObj();
  }
});







// event listener for sorting
// sortAZ.addEventListener("click", event => {
//   console.log("paspaudziau sort");
// });
console.log("-----------------The End---------------------------");
