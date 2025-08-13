if(localStorage.getItem("isSignupNow") === "true")
{
    $("#invalid-login-toast").addClass("show");
    $("#signup-page-redirect-btn").addClass("d-none");
    $("#login-page-redirect-btn").addClass("d-none");
        setTimeout
            (
                () => {
                    $("#invalid-login-toast").removeClass("show");
                    $("#invalid-login-toast").addClass("hide");
                },
                5000
            );

            localStorage.setItem("isSignupNow","false");
}
else
{

}
$("#signup-page-redirect-btn").on("click",()=>
{
    console.log(window.location.href);
    window.location.href = "registration.html";
})

