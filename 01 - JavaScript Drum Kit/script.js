// Play a sound using JavaScript

// Create a function to play audio when buttons are pressed.
const playSound = (event) => {
     let key = event.key;
     // Set up functionality for when the click and touchstart events are fired.
     if (event.type === 'click' || event.type === 'touchstart') {
          key = event.target.getAttribute('data-key');
     }
     // Retrieve a DOM event with the data-key attribute in it.
     const sound = document.querySelector(`audio[data-key='${key}']`);
     const audioKey = document.querySelector(`.key[data-key='${key}']`);
     if (!sound) return; // Stops further function execution.
     sound.currentTime = 0; // Rewinds played audio to start when key is pressed.
     sound.play(); // Play the audio associated with its key.
     audioKey.classList.add('playing'); // Class gets added to apply CSS animation when corresponding key is pressed.

}

// Create a function to remove the playing class once the transition duration has ended.
const removeTransition = function (event) {
     if (event.propertyName !== 'transform') return; // Do not remove if property name is not 'transform'.
     this.classList.remove('playing');
}

// Select all elements with the class of key
const allKeys = document.querySelectorAll('.key');
allKeys.forEach(key => {
     key.addEventListener('transitionend', removeTransition)
     key.addEventListener('click', playSound);
     key.addEventListener('touchstart', playSound);
});

/* Add an event listener for the keydown event.
* The KeyDown event is triggered whenever a
* key is pressed down on a keyboard. */
window.addEventListener('keydown', playSound);