console.log("ffgfg");

const form = document.getElementById('form');
const username = document.getElementById('userrname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    let usernameValue = username.Value.trim();
    let emailValue = email.Value.trim();
    let passwordValue = password.Value.trim();
    let password2Value = password2.Value.trim();

    if (usernameValue === '') {
        setErrorfor(username, 'username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorfor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorfor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === "") {
        setSuccessFor(password, 'password cannot be blank');
    } else {
        setSuccessFor(password);
    }
    if (passwordValue === "") {
        setErrorfor(password2, 'password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorfor(password2, 'password does not match');
    } else {
        setSuccessFor(password2)
    }
}

function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = "form-control error";
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}