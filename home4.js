// home.js

// Toggle menu on home icon click
document.getElementById("home-icon").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    const mainBody = document.querySelector(".main-body");
    const footer = document.querySelector(".footer");

    // Toggle the display of the nav links
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        mainBody.style.display = "none";
        footer.style.display = "none";
    } else {
        mainBody.style.display = "block";
        footer.style.display = "block";
    }
});

// Close menu on X (close icon) click
document.getElementById("close-icon").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    const mainBody = document.querySelector(".main-body");
    const footer = document.querySelector(".footer");

    // Close the menu
    navLinks.classList.remove("active");
    mainBody.style.display = "block";
    footer.style.display = "block";
});
