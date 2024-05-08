// Get all elements with the class 'containers'
const containers = document.querySelectorAll('.applyingboxes .flex-card');

// Function to check if an element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    // Return true if the element's bottom is greater than 0 and its top is less than a specific height
    return (
        rect.bottom > 0 &&
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}

// Event listener for scroll events
document.addEventListener("scroll", function() {
    containers.forEach(container => {
        if (isInView(container)) {
            // Add class to indicate the element is in view
            container.classList.add("containers--visible");
        } else {
            // Remove class if the element is out of view
            container.classList.remove("containers--visible");
        }
    });
});
