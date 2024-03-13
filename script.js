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

const tags = document.querySelectorAll(".section__heading, .section__subheading, .services__card, .blog-card, .cta__subheading, .cta__heading, .clickable-title, .right-column, .clickables-heading")
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





document.addEventListener("DOMContentLoaded", function() {
  var toggleBtn = document.getElementById("toggle");
  var textElem = document.getElementById("hiddenText");

  toggleBtn.addEventListener("click", function() {
    var elemText = toggleBtn.textContent;

    if (elemText === "Read More") {
      // Stuff to do when btn is in the read more state
      toggleBtn.textContent = "Read Less";
      textElem.style.display = "block";
    } else {
      // Stuff to do when btn is in the read less state
      toggleBtn.textContent = "Read More";
      textElem.style.display = "none";
    }
  });
});

























