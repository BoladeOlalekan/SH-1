document.querySelector('.button').onclick = function(){
    const password = document.querySelector(".password").value;
    const confirmPassword = document.querySelector(".confirmpassword").value;
    const message = document.querySelector(".message")
    console.log(password, confirmPassword);
    
    if (password === '') {
        message.textContent = "Field cannot be empty.";
        message.style.color = "#BF2F2F";
        password.style.border = "2px solid #BF2F2F";
        confirmPassword.style.border = "2px solid #BF2F2F";
    } else if(password !== confirmPassword){
        message.textContent = "*Passwords don't match.";
        message.style.color = "#BF2F2F";
        password.style.border = "2px solid #BF2F2F";
        confirmPassword.style.border = "2px dotted #BF2F2F";
    } else {
        message.textContent = "";
    }
}

