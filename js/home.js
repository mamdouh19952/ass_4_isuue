var userHomeName = document.querySelector(".userHomeName")
var logout = document.querySelector(".logout")

let allAccounts = JSON.parse (localStorage.getItem("accountsStorage")) ;
let titleNew= JSON.parse (localStorage.getItem("loginNameHome")) ;



userHomeName.innerHTML=`${allAccounts[titleNew].name}`

logout.addEventListener("click", function(){
window.open('../index.html')})



// for (let index = 0; index < allAccounts.length; index++) {
//    let CurrentUser=allAccounts[index].email.value

    // }



    // helloUser.innerHTML= `Welcome ${allUsers[userLogin].name}`
    // var userLogin = JSON.parse(localStorage.getItem("userLogin"))

