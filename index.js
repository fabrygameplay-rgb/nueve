window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


const items = document.querySelectorAll("li");
const imagen = document.getElementById("imagenAnatomía");
const texto = document.getElementById("textoAnatomía");
const visor1 = document.getElementById("visor1");
const visor2 = document.getElementById("visor2");

visor1.style.display = "none";
visor2.style.display = "none";

items.forEach(item => item.classList.remove("activo"));

items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("activo"));
        item.classList.add("activo");

        visor1.style.display = "block";
        visor2.style.display = "block";

        imagen.classList.remove("mostrar");
        void imagen.offsetWidth;

        imagen.src = item.dataset.img;
        texto.value = item.dataset.text;

        setTimeout(() => {
            imagen.classList.add("mostrar");
        }, 20);
    });
});
