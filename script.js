const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
};

closeBtn.onclick = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
};

overlay.onclick = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
};

function showSection(id) {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}