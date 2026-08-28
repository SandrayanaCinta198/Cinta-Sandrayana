// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("active");

if (navMenu.classList.contains("active")) {
    menuBtn.textContent = "✕";
} else {
    menuBtn.textContent = "☰";
}

});

// Tutup menu setelah memilih link
document.querySelectorAll(".nav-menu a").forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
menuBtn.textContent = "☰";
});
});

// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

if (name === "" || email === "" || message === "") {
    alert("Silakan isi semua data terlebih dahulu.");
    return;
}

alert("Terima kasih, " + name + "! Pesan berhasil dikirim.");

contactForm.reset();

});

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
    }
});

navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
    }
});

});
