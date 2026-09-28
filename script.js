
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", event => {
        const destino = document.querySelector(link.getAttribute("href"));

        if (!destino) return;

        event.preventDefault();

        destino.scrollIntoView({
            behavior: "smooth"
        });
    });
});


const elementos = document.querySelectorAll(
    ".produto, .sobre-texto, .sobre-imagem, .destaque div, .contato > div"
);

const observador = new IntersectionObserver(
    entradas => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("aparecer");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach(elemento => {
    observador.observe(elemento);
});


window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});

