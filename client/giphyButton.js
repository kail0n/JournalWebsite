const gifContainer = document.getElementById('gifContainer');

document.querySelectorAll('.emojibutton1').forEach(item => {
    item.addEventListener('click', () => {
      //handle click

      let val = event.target.innerHTML;
  
    createEmoji();

    function createEmoji() {
        let gif = document.querySelector('gif')
        if (!gif) {
            console.log("emoji not chosen")
        const pasteGif = document.createElement
        ('gif');
        console.log(pasteGif)
        pasteGif.innerHTML = val;
            gifContainer.appendChild(pasteGif);
            const d = new Date();
            document.getElementById("date-time").innerHTML = d;
        } 
    }
})
});