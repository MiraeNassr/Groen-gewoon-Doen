// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const loginModal = document.getElementById("loginModal");

    // Get the button that opens the modal
    const loginBtn = document.getElementById("AdminLogin");

    // Get the <span> element that closes the modal
    const loginClose = document.getElementById("loginClose");

    // When the user clicks the button, open the modal
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    loginClose.addEventListener('click', function() {
        loginModal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    });

    // Handle form submission
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Redirect to admin page after successful login
        window.location.href = "admin.html";
    });

    // Logout functionality
    const logoutBtn = document.getElementById("logoutBtn");
    const logoutModal = document.getElementById("logoutModal");
    const logoutClose = document.getElementById("logoutClose");
    const confirmLogout = document.getElementById("confirmLogout");
    const cancelLogout = document.getElementById("cancelLogout");

    console.log("Logout elements:", logoutBtn, logoutModal, logoutClose, confirmLogout, cancelLogout);

    // When the user clicks the logout button, open the modal
    logoutBtn.addEventListener('click', function() {
        console.log("Logout button clicked");
        logoutModal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    logoutClose.addEventListener('click', function() {
        logoutModal.style.display = "none";
    });

    // When the user clicks on cancel, close the modal
    cancelLogout.addEventListener('click', function() {
        logoutModal.style.display = "none";
    });

    // When the user clicks on confirm, redirect to index.html
    confirmLogout.addEventListener('click', function() {
        window.location.href = "index.html";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target == logoutModal) {
            logoutModal.style.display = "none";
        }
    });
});
