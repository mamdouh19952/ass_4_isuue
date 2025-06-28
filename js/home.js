var userHomeName = document.querySelector(".userHomeName")
// var userLogin = JSON.parse(localStorage.getItem("userLogin"))
var logout = document.querySelector(".logout")
let allAccounts = JSON.parse (localStorage.getItem("accountsStorage")) ;
for (let index = 0; index < allAccounts.length; index++) {
   let CurrentUser=allAccounts[index].email.value
userHomeName.innerHTML=`${CurrentUser}`

    }

// helloUser.innerHTML= `Welcome ${allUsers[userLogin].name}`
logout.addEventListener("click", function(){
window.open('../index.html')})