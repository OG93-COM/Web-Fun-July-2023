
function loginout(btnlog){
    if(btnlog.innerText == "LOGIN") {
        btnlog.innerText = "LOGOUT";
    } else {
        btnlog.innerText = "LOGIN";
    }
}

function showaler() {
    alert("Ninja was liked");
}

function hiden(rembtn) {
    rembtn.remove();
}