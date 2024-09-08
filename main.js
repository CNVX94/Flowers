// This function runs when the page loads
window.onload = () => {
        // Remove the "container" class from the body
        document.body.classList.remove("container");
    
        // Play the audio automatically (this is optional if autoplay works in your browser)
        var audio = document.getElementById("myAudio");
        audio.play();
    };
    