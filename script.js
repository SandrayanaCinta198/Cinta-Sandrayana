// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Tombol sapa saya
const helloBtn = document.getElementById("helloBtn");
const message = document.getElementById("message");

helloBtn.addEventListener("click", function () {
    message.textContent =
        "Halo! Terima kasih sudah mengunjungi portofolio Cinta Sandrayana 👋";
});

// Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Menutup menu setelah memilih navigasi
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
