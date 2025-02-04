



/* =======================================

           HERO VERTICAL SLIDER 

======================================= */




const heroSwiper = new Swiper('.hero-slider', {
    direction: 'vertical',    // Vertical direction
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,


        renderBullet: function (index, className) {
            return `
            <div class="${className}  swiper-pagination-number">
              <span>${index + 1}</span>
            </div>`;
        },
    },
    // Infinite loop
    autoplay: {
        delay: 2000,            // 2 seconds between slides
        disableOnInteraction: false, // Keeps autoplay active on user interaction
    },
    speed: 1000,              // Transition speed of 1 second
    allowTouchMove: false,
    // Disable swipe gestures
});




/* =======================================

           HORZONTAL PRODUCT SLIDER

======================================= */


// Initialize Horizontal Swiper for Slides Per View
const horizontalSwiper = new Swiper('.horizontal-slider', {
    slidesPerView: 3, // Number of slides visible at once
    spaceBetween: 20, // Space between slides
    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true, // Infinite loop
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});




/* =======================================

           TESTIMONIAL SLIDER

======================================= */



// const swiper = new Swiper('.mySwiper', {
//     slidesPerView: 'auto',     // Allow dynamic width
//     centeredSlides: true,      // Center the active slide
//     autoplay: {
//         delay: 100000,            // 2 seconds between slides
//         disableOnInteraction: false, // Keeps autoplay active on user interaction
//     },

//     loop: true,                // Enable infinite loop
//     spaceBetween: 70,          // Space between slides
//     speed: 1000,                // Smooth slide transition
//     navigation: {
//         nextEl: '.custom-button-next',
//         prevEl: '.custom-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//             return `<span class="${className}">${index + 1}</span>`; // Add numbers to bullets
//         },
//     },


// });




// const swiper = new Swiper('.mySwiper', {
//     slidesPerView: 'auto', // Allow dynamic width
//     centeredSlides: true, // Center the active slide
//     autoplay: {
//         delay: 10000, // Delay between slides
//         disableOnInteraction: false, // Keeps autoplay active on user interaction
//     },
//     loop: true, // Enable infinite loop
//     spaceBetween: 70, // Space between slides
//     speed: 1000, // Smooth slide transition
//     navigation: {
//         nextEl: '.custom-button-next',
//         prevEl: '.custom-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//             // Define custom words
//             const words = ['Paintings', 'Photography', 'Design', 'Art'];
//             const word = words[index] || `Word ${index + 1}`;

//             return `
//         <span class="${className}" data-word="${word}" data-number="${index + 1}">
//         </span>
//       `;
//         },
//     },
// });
























const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 70,
    speed: 1000,
    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            // Define custom words
            const words = ['Painting', 'Photography', 'Design', 'Art'];
            const word = words[index] || `Word ${index + 1}`;

            // Return HTML for each pagination item
            return `
        <div class="pagination-item">
          <span class="pagination-word">${word}</span>
          <span class="pagination-dot ${className}"></span>
          <span class="pagination-number">${index + 1}</span>
        </div>
      `;
        },
    },
});
