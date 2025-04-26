// Runs the application

import { SliderHandler } from "./SliderHandler.js";

document.querySelectorAll('.controls input').forEach(input => {
    new SliderHandler(input);
})