/**
 * This function plays sound when a key is pressed on the keyboard 
 */
function playSound(e) {
    // Get the audio file associated with the key
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Get the selector of the key - we are getting it via the class
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) {
        // Stop the function from running altogether
        return;
    }
    // Rewind to the start
    audio.currentTime = 0;
    // Play the sound
    audio.play();
    // Add the playing class to the key to give it the animation effect
    key.classList.add('playing');

    // Get all the keys with the class 'key'
    const keys = document.querySelectorAll('.key');
    // Loop for each key and remove the animation when the transition ends
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

function removeTransition(e) {
    // Return if it is not a transform
    if(e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);