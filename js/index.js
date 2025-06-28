let messageMail=document.getElementById("messageMail")
let login = document.querySelector(".logInBtn");
let emailInput=document.getElementById("emailInput");
let passInput = document.getElementById("passwardInput");

login.addEventListener("click", function () {
  var currentEmail = emailInput.value;
  console.log(currentEmail);

  var currentPass = passInput.value;

  let allAccounts = JSON.parse(localStorage.getItem("accountsStorage")) || [];


  for (let index = 0; index < allAccounts.length; index++) {
    if (allAccounts[index].email === currentEmail && allAccounts[index].pass === currentPass) {
      console.log("✅ Login Success");
      window.location.href = "./pages/home.html";

    }

  else  {
    messageMail.innerHTML="Wrong Email or Password Try Again or sign up"
    messageMail.classList.remove("d-none");
  }
   }
});

// })

// var userIndex;
// login.addEventListener("click", function () {
//   if (isUserValid()) {
//     var user = createUser("", emailInput, passInput);
//     if (isUserExist(allUsers, user)) {
//       localStorage.setItem("userLogin", JSON.stringify(userIndex));
//       window.location.href = "./pages/home.html";
//     } else {
//       console.log("User does not exist");
//     }
//   } else {
//     console.log("User not valid");
//   }
// });

// function isUserExist(users, loginUser) {
//   for (var i = 0; i < users.length; i++) {
//     if (
//       users[i].email == loginUser.email &&
//       users[i].password == loginUser.password
//     ) {
//       userIndex = i;
//       return true;
//     }
//   }
//   return false;
// }

// function isUserValid() {
//   return isValid(emailInput, regexEmail) && isValid(passInput, regexPass);
// }

// singUp.addEventListener("click", function () {
//   window.location.href = "./pages/singUp.html";
// });
