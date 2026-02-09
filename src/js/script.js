let First_Name_DOM = document.querySelector("#First_Name_Input");
let Last_Name_DOM = document.querySelector("#Last_Name_Input");
let Email_Input_DOM = document.querySelector("#Email_Input");
let Password_Input_DOM = document.querySelector("#Password_Input");
let Country_Select_DOM = document.querySelector("#Country_Select");
let Standard_Check_DOM = document.querySelector("#Standard_Check");
let Premium_Check_DOM = document.querySelector("#Premium_Check");
let About_Textarea_DOM = document.querySelector("#About_Textarea");

let Submit_Button_DOM = document.querySelector("#Submit_Button");

let Reset_Button_DOM = document.querySelector("#Reset_Button");

let loadUserBtn = document.querySelector("#loadUserBtn");
let clearUserBtn = document.querySelector("#clearUserBtn");

// saveUser()
// loadUser()
// displayUser(userObj)
// clearUser() (optional)

let Saved_User_Key = "Saved_User_Data";
let User_Data;

function saveUser() {
  if (!First_Name_DOM.value) {
    alert("Error: Missing First Name");
    return;
  }
  if (!Last_Name_DOM.value) {
    alert("Error: Missing Last Name");
    return;
  }
  if (!Email_Input_DOM.value) {
    alert("Error: Missing Email");
    return;
  }
  if (!Password_Input_DOM.value) {
    alert("Error: Missing Password");
    return;
  }
  if (!Country_Select_DOM.value) {
    alert("Error: Missing Country");
    return;
  }
  if (!About_Textarea_DOM.value) {
    alert("Error: Missing About field");
    return;
  }

  let Account_Type = document.querySelector(
    `input[name="accountType"]:checked`,
  );

  let User = {
    First: First_Name_DOM.value,
    Last: Last_Name_DOM.value,
    Email: Email_Input_DOM.value,
    Password: Password_Input_DOM.value,
    Country: Country_Select_DOM.value,
    Account_Type: Account_Type.value,
    About: About_Textarea_DOM.value,
  };
  console.log(User);

  let Stringified_User_Data = JSON.stringify(User);
  localStorage.setItem(Saved_User_Key, Stringified_User_Data);
  loadData();
  alert("Registration Saved!");
}

let savedFirstName = document.querySelector("#savedFirstName");
let savedLastName = document.querySelector("#savedLastName");
let savedEmail = document.querySelector("#savedEmail");
let savedCountry = document.querySelector("#savedCountry");
let savedAccountType = document.querySelector("#savedAccountType");
let savedAbout = document.querySelector("#savedAbout");

let noSavedUser = document.querySelector("#noSavedUser");
let savedUserPanel = document.querySelector("#savedUserPanel");

function displayUser(UserObj) {
  savedFirstName.innerHTML = UserObj.First;
  savedLastName.innerHTML = UserObj.Last;
  savedEmail.innerHTML = UserObj.Email;
  savedCountry.innerHTML = UserObj.Country;
  savedAccountType.innerHTML = UserObj.Account_Type;
  savedAbout.innerHTML = UserObj.About;
}

function loadData() {
  let Local_Storage_User_Data = localStorage.getItem(Saved_User_Key);
  if (
    Local_Storage_User_Data == undefined ||
    Local_Storage_User_Data == "" ||
    Local_Storage_User_Data == []
  ) {
    console.log("Error: LocalStorage Key values are undefined or empty");
    noSavedUser.classList.remove("d-none");
    savedUserPanel.classList.add("d-none");
    return;
  }
  User_Data = JSON.parse(Local_Storage_User_Data);
  noSavedUser.classList.add("d-none");
  savedUserPanel.classList.remove("d-none");
}

function loadUser() {
  if (User_Data == undefined || User_Data == [] || User_Data == "") {
    alert("Error: User_Data is empty or invalid");
    return;
  }
  loadData();
  displayUser(User_Data);
}

function clearUser() {
  localStorage.removeItem(Saved_User_Key);
  User_Data = [];
  loadData();
}
loadData();

loadUserBtn.addEventListener("click", loadUser);
clearUserBtn.addEventListener("click", clearUser);

Submit_Button_DOM.addEventListener("click", (event) => {
  event.preventDefault();
  saveUser();
});
Reset_Button_DOM.addEventListener("click", (event) => {
  event.preventDefault();
  First_Name_DOM.value = "";
  Last_Name_DOM.value = "";
  Email_Input_DOM.value = "";
  Password_Input_DOM.value = "";
  Country_Select_DOM.value = "";
  Standard_Check_DOM.checked = false;
  Premium_Check_DOM.checked = false;
  About_Textarea_DOM.value = "";
});
