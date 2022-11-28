const scroll = document.getElementById("vt");



function abrir(obj){
    obj.src= "img/setacima.png";
    
}

function fechar(obj){
    obj.src= "img/setacima.png";
    
}

function scrollTop() {
    if (this.scrollY >= 420)
        scroll.style.visibility = "visible";
    else
        scroll.style.visibility = "hidden";
}

window.addEventListener('scroll', scrollTop);

scroll.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});
