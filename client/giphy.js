let APIKEY = "2V2Uae4FchN0oT35elaecpYffR4wYWM3";
// you will need to get your own API KEY
// https://developers.giphy.com/dashboard/
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault(); //to stop the page reload
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
        let fig1 = document.createElement("figure");
        let img1 = document.createElement("img");
        let fc1 = document.createElement("figcaption");
        img1.src = content.data[1].images.downsized.url;
        img1.alt = content.data[1].title;
        fc1.textContent = content.data[1].title;
        fig1.appendChild(img1);
        fig1.appendChild(fc1);
        let fig2 = document.createElement("figure");
        let img2 = document.createElement("img");
        let fc2 = document.createElement("figcaption");
        img2.src = content.data[2].images.downsized.url;
        img2.alt = content.data[2].title;
        fc2.textContent = content.data[2].title;
        fig2.appendChild(img2);
        fig2.appendChild(fc2);
        let out = document.querySelector(".out");
        let out1 = document.querySelector(".out1");
        let out2 = document.querySelector(".out2");
        out.insertAdjacentElement("afterbegin", fig);
        out1.insertAdjacentElement("afterbegin", fig1);
        out2.insertAdjacentElement("afterbegin", fig2);
        // document.querySelector("#search").value = "";
      })
      .catch(err => {
        console.error(err);
      });
  });
}