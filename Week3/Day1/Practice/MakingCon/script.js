console.log("page loaded...");

var NumbRequest = document.querySelector(".numbrequests")
var numbConn = document.querySelector(".numbCon")


function accept(profil) {
    let element = document.querySelector(profil)
    element.remove()
    NumbRequest.innerText--
    numbConn.innerText++
    console.log(numbConn)
}

function dontaccept(profil) {
    let element = document.querySelector(profil)
    element.remove()
    NumbRequest.innerText--
    console.log(numbConn)
}

var newName = document.querySelector(".cardusername")

function editprofile() {
    newName.innerText = "New Name"
}