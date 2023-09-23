document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username= document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
    var nameErrMsg = document.getElementById("nameErrMsg");
    var passwdErrMsg = document.getElementById("passwdErrMsg");
    var error = document.getElementById("error");
    
    if (username === "" && password === "") {
        error.textContent = "Username and password cannot be empty!";
        nameErrMsg.textContent ="";
        passwdErrMsg.textContent="";
        errorMessage.textContent="";

    }else if(username === ""){
        nameErrMsg.textContent = "Required username*";
        error.textContent ="";
        errorMessage.textContent="";
        passwdErrMsg.textContent="";
    }
    else if(password === ""){
        passwdErrMsg.textContent ="Required Password*";
        error.textContent ="";
        errorMessage.textContent="";
        nameErrMsg.textContent ="";

    } else if(username !== "" && password !== "") {
        errorMessage.textContent = "Login successful!";
        nameErrMsg.textContent ="";
        passwdErrMsg.textContent="";
        error.textContent ="";
    }

});
