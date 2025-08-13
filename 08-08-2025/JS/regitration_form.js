// inputFieldCheck();
// function inputFieldCheck()
// {

const userNameInput = $("#username");
const emailInput = $("#email");
const passwordInput = $("#password");
const confirmPasswordInput = $("#confirm-password");

function userNameValidation() {
    userNameInput.removeClass("is-valid", "is-invalid");
    if (userNameInput.val().length === 0) {
        userNameInput.removeClass("is-valid");
        userNameInput.addClass("is-invalid");
    }
    else {
        userNameInput.removeClass("is-invalid");
        userNameInput.addClass("is-valid");
    }
}

function emailValidation() {
    emailInput.removeClass("is-valid", "is-invalid");
    if (emailInput.val().length === 0) {
        emailInput.removeClass("is-valid");
        emailInput.addClass("is-invalid");
    }
    else {
        emailInput.removeClass("is-invalid");
        emailInput.addClass("is-valid");
    }
}

function passwordValidation() {
    passwordInput.removeClass("is-valid", "is-invalid");
    if (passwordInput.val().length === 0) {
        passwordInput.removeClass("is-valid");
        passwordInput.addClass("is-invalid");
    }
    else {
        passwordInput.removeClass("is-invalid");
        passwordInput.addClass("is-valid");
    }
}

function confirmPasswordValidation() {
    confirmPasswordInput.removeClass("is-valid", "is-invalid");
    if (confirmPasswordInput.val().length === 0) {
        confirmPasswordInput.removeClass("is-valid");
        confirmPasswordInput.addClass("is-invalid");
    }
    else if (confirmPasswordInput.val().trim() !== passwordInput.val().trim()) {
        confirmPasswordInput.removeClass("is-valid");
        confirmPasswordInput.addClass("is-invalid");
    }
    else {
        confirmPasswordInput.removeClass("is-invalid");
        confirmPasswordInput.addClass("is-valid");
    }
}

userNameInput.on("input", () => {
    userNameValidation();
});

emailInput.on("input", () => {
    emailValidation();
})

passwordInput.on("input", () => {
    passwordValidation()
})

confirmPasswordInput.on("input", () => {
    confirmPasswordValidation();
})

// }
const form = $("#form");

form.on("submit", (event) => {
    event.preventDefault();
    // passwordInput.removeClass("is-valid","is-invalid");
    if (userNameInput.val().length === 0 || emailInput.val().length === 0 || passwordInput.val().length === 0 || confirmPasswordInput.val().length === 0) {
        userNameValidation();
        emailValidation();
        passwordValidation();
        confirmPasswordValidation();

        $("#invalid-login-toast").addClass("show");

        setTimeout
            (
                () => {
                    $("#invalid-login-toast").removeClass("show");
                    $("#invalid-login-toast").addClass("hide");
                },
                5000
            );

    }
    else {
        const username = userNameInput.val().trim();
        const email = emailInput.val().trim();
        const password = passwordInput.val().trim();
        const confirmPassword = confirmPasswordInput.val().trim();

        $.ajax({
            type: "Post",
            url: "http://localhost:3000/users/",
            data: JSON.stringify(
                {
                    username: username,
                    email: email,
                    password: password,
                    confirmpassword: confirmPassword
                }
            ),
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                console.log("succesfully posted");
                console.log(response);
                location.href = "home.html";
            },
            error: function (error) {
                console.log(error);
            }
        });

        localStorage.setItem("isSignupNow","true");

    }
})

const username = userNameInput.val().trim();
export { username };