(function() {
    /* Creamos una variable para las preguntas y combertimos en arrays ese apartado de preguntas que seria en total de arrays = 3*/
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question => {
        /* CREAMOS UN EVENTO PARA QUE CADA QUE LE DEMOS CLICK A UNA PREGUNTA HAGA LO SIGUIENTE = QUE SE DESPLACE LA RESPUESTA DE LA PREGUNTA */
        question.addEventListener('click', () => {
            /* creamos una variable donde calcularemos el alto del elemento */
            let height = 0;
            /* creamos una variable donde lo que hara con  nextElementSibling = es pasar al hermano del elemento question de la pregunta osea el parrafo que se mostrara como respuesta*/
            let answer = question.nextElementSibling;
            /* agregamos otra variable que obtendra en si todo el articulo osea el padre del padre del elemento */
            let addPadding = question.parentElement.parentElement;

            /* con .toggle('questions__padding--add'); = l0o que hace es con toglle es quitar o poner la clase = questions__padding--add para que se haga un efecto de toggle */
            addPadding.classList.toggle('questions__padding--add');
            /* le decimos que al elemento cuestion, queremos obtener al primer higon recuerda que en programacion se cuenta desde 0
            ahora agregamos la clase3  questions__arrow--rotate = que lo que hara es rotar la flecha cada que le demos click a ella o a la pregunta*/
            question.children[0].classList.toggle('questions__arrow--rotate');

            /* LE DECIMOS QUE SI DEL ELEMENTO ANSER OSEA EL PARRAFO TIEENE UN ALTO HEIGHT = 0, ENTONCES ES POR  QUE LE QUITAMOS EL HIDE */
            if (answer.clientHeight === 0) {
                /* Y SI ESO PASA QUEREMOS QUE TENGA EL ALTOMINIMO PARA QUE ESE ELEMENTO SE MUESTRE, TODO ESO CON LA FUNCION = scrollHeight */
                height = answer.scrollHeight;
            }
            /*Y SI ESTO ES VERDAD QUEREMOS QUE  AGREGE EL ALTO MINIMO  DE ALTURA = HEIGHT AL PARRAFO OSEA EL = ANSWER*/
            answer.style.height = `${height}px`;
        });
    });
})();