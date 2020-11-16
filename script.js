const username = document.querySelector(".username-input");
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");
const confirm = document.querySelector(".confirm-input");
const button = document.querySelector(".button");

//check username has element 
function usernameValidation() {
    const error = document.querySelector('.username-error-message')
    if(!username.value) {
        error.innerHTML = "Please Enter Username"
        error.style.display = "block";
    }
}

//check email is valid
function emailValidation() {
  const error = document.querySelector(".email-error-message");
  if (email.value == "") {
    error.innerHTML ="Please Enter Email"
    error.style.display = "block";
  }
}

//check passwords have element
function passwordValidaton() {
  const error = document.querySelector(".password-error-message");
  if (password.value == "") {
    // error.innerHTML = "Please Enter Password"
    error.style.display = "block";
  }

  //check passwords match
    const confirmError = document.querySelector('.confirm-error-message')
    if(password.value !== confirm.value) {
        confirmError.style.display = "block";
    }
}

//event listeners
button.addEventListener("click", function (event) {
    event.preventDefault();
    usernameValidation();
    emailValidation();
    passwordValidaton();
    confirmError();
});
