const btn = document.querySelector('.emoji-button');
const container = document.getElementById('emojiContainer');

btn.addEventListener('click', (e) => {
    createEmoji();
    //experimental feature of how many "likes"
    //btn.innerHTML = `Click count: ${event.detail}`;

});
// on click of one of the elements, selects the element and pastes it into a new div container
// needs to be createElement, because it adds the content to the nav bar otherwise
// innerHTML allows display of emoji, unlike textContent
// work in progress: creating a loop that checks if there is an emoji already chosen
function createEmoji() {
    let emoji = document.querySelector('emoji')
    if (!emoji) {
        console.log("emoji not chosen")
    const pasteEmoji = document.createElement
    ('emoji');
    console.log(pasteEmoji)
    let reply = () => {
        pasteEmoji.srcElement.innerHTML = reply;
    }
    
        container.appendChild(pasteEmoji);
    console.log(container) } else {
       alert("You already chose your mood")
    } 
}
