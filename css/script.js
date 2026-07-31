const acordeones = document.querySelectorAll(".accordion-header");

acordeones.forEach(boton => {

    boton.addEventListener("click", () => {

        const item = boton.parentElement;

        item.classList.toggle("active");

    });

});

// ==========================
// Abrir modal
// ==========================

const botones = document.querySelectorAll(".abrir-modal");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const id = boton.dataset.modal;

        document.getElementById(id).style.display = "block";

    });

});

// ==========================
// Cerrar con X
// ==========================

const cerrar = document.querySelectorAll(".cerrar");

cerrar.forEach(x => {

    x.addEventListener("click", () => {

        x.parentElement.parentElement.style.display = "none";

    });

});

// ==========================
// Cerrar haciendo click afuera
// ==========================

window.addEventListener("click", e => {

    if(e.target.classList.contains("modal")){

        e.target.style.display = "none";

    }

});


// Buscador


document.addEventListener('DOMContentLoaded', () => {
    const inputBuscar = document.getElementById('buscarCurso');
    const cards = document.querySelectorAll('.card[data-nombre]');
    const accordionItems = document.querySelectorAll('.accordion-item');

    if (!inputBuscar) return;

    inputBuscar.addEventListener('input', (e) => {
        const texto = e.target.value.toLowerCase().trim();

        cards.forEach(card => {
            const nombre = (card.getAttribute('data-nombre') || '').toLowerCase();
            const codigo = (card.getAttribute('data-codigo') || '').toLowerCase();

            // Si coincide con el nombre o el código del curso
            if (nombre.includes(texto) || codigo.includes(texto)) {
                card.style.display = ''; // Muestra la tarjeta
            } else {
                card.style.display = 'none'; // Oculta la tarjeta
            }
        });

        // Si hay texto escrito, abre automáticamente los acordeones que tengan resultados
        accordionItems.forEach(item => {
            const content = item.querySelector('.accordion-content');
            const cardsVisibles = item.querySelectorAll('.card[data-nombre]:not([style*="display: none"])');

            if (texto !== '' && cardsVisibles.length > 0) {
                if (content) content.style.display = 'block'; // Muestra el contenido del acordeón
            } else if (texto === '') {
                if (content) content.style.display = ''; // Vuelve al estado original del CSS
            }
        });
    });
});