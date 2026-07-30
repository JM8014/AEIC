const acordeones = document.querySelectorAll(".accordion-header");

acordeones.forEach(boton => {

    boton.addEventListener("click", () => {

        const item = boton.parentElement;

        item.classList.toggle("active");

    });

});