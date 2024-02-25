
// ------------------------------------observer----------------------------------------------
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("in-view");
            entry.target.classList.remove("not-in-view");
        } else{
          // add line to have 2 way animation
          // entry.target.classList.remove("in-view");
          entry.target.classList.add("not-in-view");
        }
    })
},{
    rootMargin:"-50px",
    threshold: [0, 0.1, 1]
})

const tags = document.querySelectorAll(".section__heading, .section__subheading, .services__card, .blog-card, .contact-card, .cta__subheading, .cta__heading, .clickable-title, .right-column")
tags.forEach((tag) => {
    observer.observe(tag)
})
// -----------------------------------------------------------------------------------------
function showContent(contentId, clickedHeading) {
    // Hide all content elements
    var contentElements = document.querySelectorAll('.content');
    contentElements.forEach(function(element) {
      element.style.display = 'none';
    });

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';

    // Update the style of the headings
    var headingElements = document.querySelectorAll('.clickable-title');
    headingElements.forEach(function(heading) {
      heading.classList.remove('active');
    });

    // Set the clicked heading to active
    clickedHeading.classList.add('active');
  }
// ------------------------------------------------------------------------------------------
// const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
// const firstCardWidth = carousel.querySelector(".blog-card").offsetWidth;
// const arrowBtns = document.querySelectorAll(".carousel-icon");
// const carouselChildrens = [...carousel.children];

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens.slice(0, cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
// carousel.classList.add("no-transition");
// carousel.scrollLeft = carousel.offsetWidth;
// carousel.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
//     });
// });

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     // Records the initial cursor and scroll position of the carousel
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return; // if isDragging is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// const infiniteScroll = () => {
//     // If the carousel is at the beginning, scroll to the end
//     if(carousel.scrollLeft === 0) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     }
//     // If the carousel is at the end, scroll to the beginning
//     else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }

//     // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//     clearTimeout(timeoutId);
//     if(!wrapper.matches(":hover")) autoPlay();
// }

// const autoPlay = () => {
//     if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//     // Autoplay the carousel after every 2500 ms
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);





























