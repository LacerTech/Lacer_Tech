(function() {

    /* creamos unas variables que van a seleccionar sus clases en especifico o que seran igual a las clases seleccionadas*/

    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    /* CREAMOS  *UN EVENTO PARA QUE CUANDO HAGAMOS CLICK AL BOTON OPENBUTTON HAGA LO SIGUIENTE*/
    openButton.addEventListener('click', () => {
        /* CUANDO LE DEMOS CLICK AL BOTON HAMBURGESA QUEREMOS QUE AGREGE LA CLASE = nav__link--show = PARA QUE APARESCA LOS NAV DE NAVEGACION*/
        menu.classList.add('nav__link--show');
    });
    /* ahora creamos un evento para el boton cerrar */
    closeMenu.addEventListener('click', () => {
        /* Y le decimos que remueva cuando le demos click al boton cerrar los navs para que se oculten */
        menu.classList.remove('nav__link--show');
    });




})();