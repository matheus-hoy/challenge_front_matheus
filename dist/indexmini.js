const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});function openMenu(){var e=document.querySelector(".menu");e.style.display="flex"===e.style.display?"none":"flex"}