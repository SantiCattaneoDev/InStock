function toggleCard() {
    var loginCard = document.getElementById("login-card");
    var registerCard = document.getElementById("register-card");

    loginCard.style.transform = "rotateY(180deg)";
    registerCard.style.transform = "rotateY(0deg)";
}