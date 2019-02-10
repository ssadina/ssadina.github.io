var close = document.querySelector('.close');
var opened = document.querySelector('.humburger-menu-link');
var mobile_menu = document.querySelector('.mobile-menu');

opened.addEventListener('click', () =>{
    mobile_menu.classList.add('opened');
})


close.addEventListener('click', () =>{
    mobile_menu.classList.remove('opened');
})





/*var myMap;
ymaps.ready(init);
function init(){ 
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
}*/