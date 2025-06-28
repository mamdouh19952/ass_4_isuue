let userName =document.querySelector(".userName")
let userEmail =document.querySelector(".userEmail")
let userPass =document.querySelector(".userPass")
let signup =document.querySelector(".signup")
let message =document.getElementById("message")


let accounts = JSON.parse (localStorage.getItem("accountsStorage")) || [];

// var accounts=[]
 

// regex
function validateUserName() {
  let regex = /^[A-Za-z\s]{2,50}$/;
  let text = userName.value;
  if (regex.test(text)) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    message.innerHTML += `"Issue in Name" <br>`;
    message.classList.remove("d-none");
    return false;
  }
}

function validateUserEmail() {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let text = userEmail.value;
  if (regex.test(text)) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    message.innerHTML += `"Issue in Email" <br>`;
    message.classList.remove("d-none");
    return false;
  }
}

function validateUserPass() {
  let regex = /^[A-Za-z0-9]{6,}$/;
  let text = userPass.value;
  if (regex.test(text)) {
    userPass.classList.add("is-valid");
    userPass.classList.remove("is-invalid");
    return true;
  } else {
    userPass.classList.add("is-invalid");
    userPass.classList.remove("is-valid");
    message.innerHTML += `"Issue in Password" <br>`;
    message.classList.remove("d-none");
    return false;
  }
}

// clear
function clear() {
      userName.value=null;
   userEmail.value=null;
  userPass.value=null;
  userName.classList.remove("is-valid", "is-invalid");
  userEmail.classList.remove("is-valid", "is-invalid");
  userPass.classList.remove("is-valid", "is-invalid");
  message.innerHTML = "";
  message.classList.add("d-none");

}

signup.addEventListener("click", function () {
  message.innerHTML = ""; 

  let isNameValid = validateUserName();
  let isEmailValid = validateUserEmail();
  let isPassValid = validateUserPass();

  if (isNameValid && isEmailValid && isPassValid) {
    let isExist = accounts.some(acc => acc.email === userEmail.value);

    if (!isExist) {
      let newAccount = {
        name: userName.value,
        email: userEmail.value,
        pass: userPass.value
      };

      accounts.push(newAccount);
      localStorage.setItem("accountsStorage", JSON.stringify(accounts));
      console.log(accounts);

      clear();
              window.location.href =  "../index.html";
      
    } else {
      message.innerHTML = `"Email already exists!"<br>`;
      message.classList.remove("d-none");
    }
  }
});

