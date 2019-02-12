//mobile-menu

var close = document.querySelector('.close');
var opened = document.querySelector('.humburger-menu-link');
var mobileMenu = document.querySelector('.mobile-menu');

opened.addEventListener('click', () =>{
    mobileMenu.classList.add('opened');
})


close.addEventListener('click', () =>{
    mobileMenu.classList.remove('opened');
})


//accordion-team

var teamItem = document.querySelectorAll('.team__item');

for (let i = 0; i < teamItem.length; i++) {
    teamItem[i].addEventListener('click',()=>{
        if (teamItem[i].classList.contains('active')){        
            teamItem[i].classList.remove('active');
        } else {

            teamItem.forEach(elem=>{
                elem.classList.remove('active');
            })

            teamItem[i].classList.add('active'); 
            }
    })
}

//accordion-menu



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