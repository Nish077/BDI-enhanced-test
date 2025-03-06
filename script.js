document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".navigate-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const section = this.getAttribute("data-section");
            if (section === "hospital") {
                window.location.href = "hospital-auth.html";
            } else if (section === "individual") {
                window.location.href = "individual-auth.html";
            } else if (section === "company") {
                window.location.href = "company-auth.html";
            }
        });
    });

    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for contacting us! We will get back to you soon.");
            contactForm.reset();
        });
    }
});
//for form onsubmit in login page
function redirectToPage(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = "test.html"; // Redirect to test.html
}
