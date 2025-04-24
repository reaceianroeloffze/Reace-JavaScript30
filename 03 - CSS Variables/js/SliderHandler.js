//

export class SliderHandler {
    constructor(inputElem) {
        this.input = inputElem;
        this.suffix = inputElem.dataset.sizing || '';
        this.name = inputElem.name;
        this.displayValue = document.querySelector(`.slider-value-display[data-for-${this.name}="${this.input.id}"]`);

        // Create a variable to track if the slider is being dragged
        this.sliderDrag = false;

        // Call the methods to bind the events and update the CSS variables
        this.bindAppEvents();
        this.updateCSSVariables();
    }

    // Create a method to update the CSS variables when sliders are moved
    updateCSSVariables () {
        const sliderValue = this.input.value + this.suffix;
        document.documentElement.style.setProperty(`--${this.name}`, sliderValue);
        if (this.displayValue) {
            this.displayValue.textContent = sliderValue;
        }
    }

    // Create a method to bind the events to the sliders
    bindAppEvents () {
        // Create a function to add a preventDefault to the input event listeners
        const addPreventDefaultToCSSVarUpdate = event => {
            event.preventDefault?.(); // Prevents default event behaviour if the event exists (what the "?." is for)
            this.updateCSSVariables();
        }

        // Listen for input and change events on the input element
        this.input.addEventListener('input', addPreventDefaultToCSSVarUpdate); // Fired when the user changes the value
        this.input.addEventListener('change', addPreventDefaultToCSSVarUpdate); // Fired when the user presses the enter key or clicks the slider

        // Create a function to add a class to the input element
        // when it is being dragged
        const addDragClass = () => {
            this.sliderDrag = true;
            this.input.classList.add('drag');
        };

        // Create a function to remove the drag class
        // from the input element when it is no longer being dragged
        const removeDragClass = () => {
            if (this.sliderDrag) {
                this.sliderDrag = false;
                this.input.classList.remove('drag');
            }
        }

        // Listen for mousedown and touchstart events on the input element
        // and add the drag class when the events are fired
        this.input.addEventListener('mousedown', addDragClass); // For Desktops/Laptops
        this.input.addEventListener('touchstart', addDragClass); // For Mobile Devices/Tablets

        // Listen for mouseup, touchend, and touchcancel events on the input element and
        // remove the drag class when the events are fired
        this.input.addEventListener('mouseup', removeDragClass); // For Desktops/Laptops
        this.input.addEventListener('touchend', removeDragClass); // For Mobile Devices/Tablets
        this.input.addEventListener('touchcancel', removeDragClass); // For Mobile Devices/Tablets

        // Listen for mousemove event on the input element and
        // update the CSS variables when the event is fired
        this.input.addEventListener('mousemove', () => {
            if (this.sliderDrag) {
                this.updateCSSVariables();
            }
        });

        // Listen for touchmove event on the input element and
        // update the CSS variables when the event is fired
        this.input.addEventListener('touchmove', () => {
            if (this.sliderDrag) {
                this.updateCSSVariables();
            }
        });
    }
}

