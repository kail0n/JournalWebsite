APIKEY = "2V2Uae4FchN0oT35elaecpYffR4wYWM3";
const gifContainer = document.getElementById('gifContainer');
const gifButton1 = document.querySelector('.out');
const gifButton2 = document.querySelector('.out1');
const gifButton3 = document.querySelector('.out2');

gifButton1.addEventListener('click', (e)=>{
    e.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=50&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(content => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        gifContainer.insertAdjacentElement("afterbegin",fig)
});
})

gifButton2.addEventListener('click', (e)=>{
    e.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=50&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(content => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[1].images.downsized.url;
        img.alt = content.data[1].title;
        fc.textContent = content.data[1].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        gifContainer.insertAdjacentElement("afterbegin",fig)
});
})

gifButton3.addEventListener('click', (e)=>{
    e.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=50&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(content => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[2].images.downsized.url;
        img.alt = content.data[2].title;
        fc.textContent = content.data[2].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        gifContainer.insertAdjacentElement("afterbegin",fig)
});
})
// document.querySelectorAll('.emojibutton1').forEach(item => {
//     item.addEventListener('click', () => {
//       //handle click

//       let val = event.target.innerHTML;
  
//     createEmoji();

//     function createEmoji() {
//         let gif = document.querySelector('gif')
//         if (!gif) {
//             console.log("emoji not chosen")
//         const pasteGif = document.createElement
//         ('gif');
//         console.log(pasteGif)
//         pasteGif.innerHTML = val;
//             gifContainer.appendChild(pasteGif);
//             const d = new Date();
//             document.getElementById("date-time").innerHTML = d;
//         } 
//     }
// })
// })