let let slider = document.getElementById("barra")
const fnMasks = {
    barra: maskbarra
}


slider.oninput = function() {
    output.innerHTML = this.value;
}