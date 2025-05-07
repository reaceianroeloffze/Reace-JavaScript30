// Handling of enlarging and shrinking the panels

const flexPanels = document.querySelectorAll(".panel");

// Create a function to toggle the open class
const toggleOpen = function () {
  this.classList.toggle("open");
}

// listen for click events on the flex panels
flexPanels.forEach(flexPanel => flexPanel.addEventListener("click", toggleOpen));

// Create a function to toggle the open-active class
const toggleOpenActive = function (event) {
    if (event.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

// listen for mouseenter events on the flex panels
flexPanels.forEach(flexPanel => flexPanel.addEventListener("transitionend", toggleOpenActive));