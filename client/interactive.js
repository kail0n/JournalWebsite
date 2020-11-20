const container = document.getElementById('emojiContainer');

document.querySelectorAll('.emojibutton').forEach(item => {
    item.addEventListener('click', () => {
      //handle click

      let val = event.target.innerHTML;
  
    createEmoji();

    function createEmoji() {
        let emoji = document.querySelector('emoji')
        if (!emoji) {
            console.log("emoji not chosen")
        const pasteEmoji = document.createElement
        ('emoji');
        console.log(pasteEmoji)
        pasteEmoji.innerHTML = val;
            container.appendChild(pasteEmoji);
            const d = new Date();
            document.getElementById("date-time").innerHTML = d;
        } 
    }
})
});