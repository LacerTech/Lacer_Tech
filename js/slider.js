(function() {
    /*creamos una funcion*/

    /*creamos uina variable llakmada slider y con ayuda de cocument.queryselectorAll, vamos a obtener todos los elementos con la clase testimony__body*/
    /* lo enserramos entre [...] para transformar esos elementos en arrays*/
    const sliders = [...document.querySelectorAll('.testimony__body')];
    /* CREAMOS OTRA VARIABLE QUE TENDRA EL BOTON SIGUIENTE PARA PASAR EL SLAIDER , Y CON DOCUMENT.QUERYSELECTOR= VAMOS A OBTENER LA CLASE DE ESE BOTON QUE ES = #NEXT*/
    const buttonNext = document.querySelector('#next');
    /*Hcemos lo mismo con el boton atras*/
    const buttonBefore = document.querySelector('#before');
    /* CREAMOS UNA VARIABLE LLAMADA VALUE  */
    let value;

    /* Creamos un evento al boton siguiente para que cada que alguien le de click a ese boton se ejecute una funcion */
    buttonNext.addEventListener('click', () => {
        /* CON ESTO INDICAMOS QUE CUANDO LE DEMOS A SIGUIENTE SE SUME UNO */
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        /* CON ESTO INDICAMOS QUE CUANDO LE DEMOS ATRAS SE RESTE UNO */
        changePosition(-1);
    });

    /* CREAMOS UNA VARIABLE LLAMADA = CHANGEPOSITION Y QUE TRENGA UN ARGUMENTO = (ADD) */
    const changePosition = (add) => {
        /* CREAMOS OTRA VARIABLE QUE TENDRA EL TESTIMONIO PRINCIPAL Y SELECCIONAMOS LA CLASE DE ESE TESTIMONIO
        y queremos obtener de esa clase su dataset que como recordaremos le pusimos un identificador a cada slider = data-id="1", etc */
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        /* AHORA LE DECIMOS QUE NUESTRA VARIABLE VALUE QUE CREAMOS AL PRINCIPIO SERA IGUAL AL TESTIMONIO PRINCIPAL o actual, OSEA EL DE ARRIBA EL DATA-ID="1" */
        /* AHORA COMBERTIMOS A NUMERO L ELEMENTO CURRENTTESTIMONY YA QUE CUANDO LE DAMOS NEXT CONCATENA EL NUMERO EN VEZ DE SUMAR 1 *1 CONCATENA A 11*/
        value = Number(currentTestimony);
        /* Y QUEREMOS SUMARLE EL VALOR QUE LE PASAMOS A LA FUNCION ADD = const changePosition = (add) => {*/
        value += add;

        /* ahora le quitamos la clase  testimony__body--show al testimonio actual para que oculte los testimonios cada actuales cada que le demos siguiente o atras */
        sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
        /* Creamos una condicional y le decimos = que si el valor actual es = a slider.length = que slider.length = nos dice cuantos arrays tenemos osea los slaiders 
         y le vamos a sumar +1, pero tambien pondremos o que  = || si el valor es = a 0, significa que se resto osea que si estamos en el data id 1 
         y le damos atras nos dara 0*/
        /*osea que no tenemos un slider 0 o 4 ya que se sumo 1 con =  sliders.length + 1  que nos dice cuantos slider tenemos osea 3 y +1 serian 4 que no existe
        entonces si pasa esto le decimos que haga lo siguiente ...*/
        if (value === sliders.length + 1 || value === 0) {
            /* Si value es = 0, entonces significa que estaabamos en el primer elemento y retrocedimos, entonces que nos mande al ultimo slider = sliders.length
            que sliders.length = indica cuantos slider tenemos y nos manda al ultimo
            Pero en caso contrario : 1 = si revazamos el numero de sliders que nos mande al primero */
            value = value === 0 ? sliders.length : 1
        }

        /* AHORA ACCEDEMOS A NUESTRA VARIABLE SLIDERS QUE CONTIENE TODOS LOS ELEMENTOS DE LOS TESTIMONIOS QUE SON NUESTROS SLIDERS
        Y LE DECIMOS QUE EMPIEZE DESDE EL VALOR 1 OSEA EL PRIMER SLIDER =  [value - 1] = por que -1, por que recuerda que en programacion el primer numero se empieza desde 0 
        osea que 1 seria el valor = 0 , poreso pusimos -1
        Y queremos que agrege la clase testimony__body--show a esos elementos = que lo que hace es aparecer los testimonios que ocultamos
         ya que con la propiedad opacity os opacamos
         PERO PARA ESO DEVEMOS OCULTAR LOS DEMAS TESTIMONIOS ACTUALES CADA QUE LE DEMOS SIGUIENTE AL SLIDER, ESO LO HACEMOS EN LA LINEA 36*/
        sliders[value - 1].classList.add('testimony__body--show');
    }




})();