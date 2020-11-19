const container = document.getElementById('gifContainer');

document.querySelectorAll('.gifButton').forEach(item => {
    item.addEventListener('click', () => {
      //handle click

      let val = event.target.innerHTML;
  
    creategif();

    function creategif() {
        let gif = document.querySelector('gif')
        if (!gif) {
            console.log("gif not chosen")
        const pastegif = document.createElement
        ('gif');
        console.log(pastegif)
        pastegif.innerHTML = val;
            container.appendChild(pastegif);
            const d = new Date();
            document.getElementById("date-time").innerHTML = d;
        } 
    }
})
});