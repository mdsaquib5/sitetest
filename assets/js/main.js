// faqs
const detailsElements = document.querySelectorAll("details");
const summaryElements = document.querySelectorAll("summary");
summaryElements.forEach((summary, index) => {
   summary.addEventListener("click", () => {
      detailsElements.forEach((details, i) => {
         if (i !== index) {
            details.open = false;
         }
      });
      summaryElements.forEach((s, i) => {
         if (i !== index) {
            s.classList.remove("actives");
         }
      });
      summary.classList.toggle("actives");
   });
});


let searchIcon = document.querySelector('.search-icon-flex');
let searchForm = document.querySelector('.search-form');
let svg1 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

let svg2 = '<svg fill="#000" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
let isSvg1 = true;
if (searchIcon) { // Check if searchIcon exists before adding event listener
   searchIcon.addEventListener('click', function () {
      searchIcon.innerHTML = isSvg1 ? svg2 : svg1;
      isSvg1 = !isSvg1;
      if (searchForm) { // Check if searchForm exists before toggling class
         searchForm.classList.toggle('search-bar-show');
      }
   });
}
// Ensure header is defined correctly
const headers = document.querySelector('header');

function handleScroll() {
   if (window.scrollY > 80) {
      headers.classList.add('sticky-top');
   } else {
      headers.classList.remove('sticky-top');
   }
}

// Add an event listener to the window object to call handleScroll on scroll
window.addEventListener('scroll', handleScroll);

function closePopHeadOnClickOutside(event) {
   if (!pophead.contains(event.target) && event.target !== popup) {
      pophead.classList.remove("open");
      mainContent.classList.remove("overlay"); // Remove overlay class from main content
      bodyOverlay.remove();
      document.removeEventListener("click", closePopHeadOnClickOutside);
   }
}

function toggleButtons() {
   const toggleBtn = document.querySelector('.toggle-slide-btn');
   const cancelBtn = document.querySelector('.cancel-btn');
   const headerUl = document.querySelector('nav ul');
   if (toggleBtn && cancelBtn && headerUl) { // Check if elements exist before performing actions
      headerUl.classList.toggle("show-ul");
      // toggleBtn.style.display = toggleBtn.style.display === "none" ? "flex" : "none";
      cancelBtn.style.display = cancelBtn.style.display === "flex" ? "none" : "flex";
   }
}
const dropdowns = document.querySelectorAll(".dropdown");

function toggleDropdown(e) {
   const svgicon = e.target;
   const parentOfTarget = svgicon.parentNode; // li
   dropdowns.forEach((dropdown) => {
      if (dropdown !== parentOfTarget && !dropdown.contains(parentOfTarget)) {
         dropdown.classList.remove("show-dropdown");
      }
   });
   if (parentOfTarget) {
      parentOfTarget.classList.toggle("show-dropdown");
   }
}
dropdowns.forEach((dropdown) => {
   const svg = dropdown.querySelector('svg');
   if (svg) { // Check if svg exists before adding event listener
      svg.addEventListener("click", toggleDropdown);
   }
});
// Add a click event listener to the document to close dropdowns when clicking outside
document.addEventListener("click", (e) => {
   if (![...dropdowns].some((dropdown) => dropdown.contains(e.target))) {
      dropdowns.forEach((dropdown) => {
         dropdown.classList.remove("show-dropdown");
      });
   }
});
const searchButton = document.querySelector('.mob-search-btn');
const searchElement = document.querySelector('.site-search');
const closeButton = document.querySelector('.cross-btn'); // Select the close button
// Ensure the initial state is correct
searchElement.style.opacity = '0';
searchElement.style.pointerEvents = 'none';
searchButton.addEventListener('click', function () {
   if (searchElement.style.opacity === '1') {
      searchElement.style.opacity = '0';
      searchElement.style.pointerEvents = 'none';
   } else {
      searchElement.style.opacity = '1';
      searchElement.style.pointerEvents = 'auto';
   }
});
closeButton.addEventListener('click', function () {
   searchElement.style.opacity = '0';
   searchElement.style.pointerEvents = 'none';
});
const popup = document.querySelector(".newsletter-btn");
const popclose = document.querySelector(".close-btn");
const pophead = document.querySelector(".pop-up-head-flex");
const mainContent = document.querySelector("main");
popup.addEventListener("click", function () {
   pophead.classList.add("open");
   mainContent.classList.add("overlay"); // Apply overlay class to main content
   // Create and append overlay element
   bodyOverlay = document.createElement("div");
   bodyOverlay.classList.add("body-overlay");
   document.body.appendChild(bodyOverlay);
   document.addEventListener("click", closePopHeadOnClickOutside);
});
popclose.addEventListener("click", function () {
   pophead.classList.remove("open");
   mainContent.classList.remove("overlay"); // Remove overlay class from main content
   if (bodyOverlay) {
      bodyOverlay.remove();
      document.removeEventListener("click", closePopHeadOnClickOutside);
   }
});
// Ensure headers is defined correctly