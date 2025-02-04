

/* =======================================

           GLOBALS SELECTORS 

======================================= */
const html = document.querySelector('.html')
const closeNav = document.getElementById("close-btn");
const openNav = document.getElementById("open-btn");
const sidebar = document.querySelector(".sidebar");
const link = document.querySelectorAll(".link");
const overlay = document.querySelector(".overlay");
const headerSearch = document.querySelectorAll(".search");
const searchModal = document.querySelector(".header__search-modal");
const btn = document.querySelector(".toggle-btn");
const text1 = document.querySelector(".toggle__text-1");
const text2 = document.querySelector(".toggle__text-2");
const productsPage1 = document.querySelector(".products__1");
const productsPage2 = document.querySelector(".products__2");
const asides = document.querySelectorAll(".products__aside");
const filter = document.querySelector(".products__filter");
const closeAsideButtons = document.querySelectorAll("#close-aside");

/* =======================================

           Sidebar Menu

======================================= */

const toggleSidebar = () => {
    if (sidebar) sidebar.classList.toggle("sidebar__hidden");
    if (overlay) overlay.classList.toggle("overlay__hidden");
    html.classList.add('no-scroll')

};

const closeSidebar = () => {
    if (sidebar) sidebar.classList.add("sidebar__hidden");
    if (overlay) overlay.classList.add("overlay__hidden");
    html.classList.remove('no-scroll')

};

if (openNav) openNav.addEventListener("click", toggleSidebar);
if (closeNav) closeNav.addEventListener("click", closeSidebar);
link.forEach((item) => {
    if (item) item.addEventListener("click", closeSidebar);
});
if (overlay) overlay.addEventListener("click", closeSidebar);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && openNav && !openNav.classList.contains("hidden")) {
        closeSidebar();
    }
});

/* =======================================

          search modal

======================================= */

const openModal = () => {
    if (searchModal) searchModal.classList.remove("header__search-modal--hidden");
    if (overlay) overlay.classList.remove("overlay__hidden");
    html.classList.add('no-scroll')

};

const closeModal = () => {
    if (searchModal) searchModal.classList.add("header__search-modal--hidden");
    if (overlay) overlay.classList.add("overlay__hidden");
    html.classList.remove('no-scroll')
};

headerSearch.forEach((item) => {
    if (item) {
        item.addEventListener("click", openModal);
        console.log(item);
    }
});

if (overlay) overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

/* =======================================

        TOGGLE BTN!!!

======================================= */

const toggleFunc = () => {
    if (btn) btn.classList.toggle("active");
    if (text1) text1.classList.toggle("toggle__text-active");
    if (text2) text2.classList.toggle("toggle__text-active");
    setTimeout(() => {
        if (productsPage1) productsPage1.classList.toggle("products__none");
        if (productsPage2) productsPage2.classList.toggle("products__none");
    }, 400);
};

if (btn) btn.addEventListener("click", toggleFunc);
if (text1) text1.addEventListener("click", toggleFunc);
if (text2) text2.addEventListener("click", toggleFunc);

/* =======================================

        aside bar open

======================================= */

const openFilter = function () {
    asides.forEach((aside) => {
        if (aside) aside.classList.toggle("products__aside-none");
    });
};

const closeFilter = function () {
    asides.forEach((aside) => {
        if (aside) aside.classList.toggle("products__aside-none");
    });
};

if (filter) filter.addEventListener("click", openFilter);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeFilter();
    }
});

closeAsideButtons.forEach((button) => {
    if (button) button.addEventListener("click", closeFilter);
});



let lastScrollY = 0;

document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

        header.classList.add("hidden");
    } else if (currentScrollY < lastScrollY) {
        // Scrolling up: show header and make it sticky
        header.classList.add("sticky");
        header.classList.remove("hidden");
    }

    // Remove sticky class if back to the top
    if (currentScrollY === 0) {
        header.classList.remove("sticky");
    }

    lastScrollY = currentScrollY;
});


/* =======================================

        Increase and Decrease Quantity

======================================= */



document.addEventListener("DOMContentLoaded", () => {
    const plus = document.querySelector('.plus');
    const minus = document.querySelector('.minus');
    const quantity = document.querySelector('.showcase__quantity');

    console.log(plus); // Will not log null
    console.log(minus); // Will not log null
    console.log(quantity); // Will not log null

    if (plus && quantity) {
        plus.addEventListener("click", () => {
            let currentValue = parseInt(quantity.textContent, 10) || 0;
            quantity.textContent = currentValue + 1;
        });
    }

    if (minus && quantity) {
        minus.addEventListener("click", () => {
            let currentValue = parseInt(quantity.textContent, 10) || 0;
            if (currentValue > 1) {
                quantity.textContent = currentValue - 1;
            }
        });
    }
});

/* =======================================

        clone slider

======================================= */


