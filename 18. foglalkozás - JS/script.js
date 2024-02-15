const username = prompt("Mi a felhasználóneved?");
const password;

const gUser = "Admin";
const gPass = "TheMaster";

if (username == gUser) {
    password = prompt("Add meg a jelszavad.")
    if (password == gPass) {
        alert("Beléptetve!")
    } else if (password != "") {
        alert("Helytelen jelszó!")
    } else {
        alert("Megszakítva.")
    }
} else if (username != "") {
    alert("Helytelen felhasználónév.")
} else {
    alert("Megszakítva.")
}
