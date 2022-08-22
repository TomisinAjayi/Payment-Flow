var header = document.getElementById('headerLinks');
var links = document.getElementsByClassName('links');
var underline = document.querySelector('#marker');

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        if(links[i].parentNode.classList.contains("activeLink")) {
            links[i].parentNode.classList.remove("activeLink");
        }
        this.parentNode.classList.add("activeLink");

        // const width = this.getBoundingClientRect().width;
        // const height = this.getBoundingClientRect().height;
        // const left = this.getBoundingClientRect().left;
        // const top = this.getBoundingClientRect().top;
        // const color = colors[Math.floor(Math.random() * colors.length)];
        
        // target.style.width = `${width}px`;
        // target.style.height = `${height}px`;
        // target.style.left = `${left}px`;
        // target.style.top = `${top}px`;
        // target.style.borderColor = color;
        // target.style.transform = "none";
    });
}