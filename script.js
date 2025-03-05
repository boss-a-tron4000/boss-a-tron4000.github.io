function toggleDropdown(element) {
    const description = element.nextElementSibling;
    description.classList.toggle("open");
}

function toggleAll() {
    const descriptions = document.querySelectorAll(".description");
    const isAnyOpen = [...descriptions].some(desc => desc.classList.contains("open"));

    descriptions.forEach(desc => {
        if (isAnyOpen) {
            desc.classList.remove("open");
        } else {
            desc.classList.add("open");
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".mBar");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});