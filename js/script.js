//mobile-menu

var close = document.querySelectorAll('.close');
var humburgerMenuLink = document.querySelector('.humburger-menu-link');
var mobileMenu = document.querySelector('.mobile-menu');
var menuLink = document.querySelectorAll('.mobile-menu .menu__link');
var downArrow = document.querySelector('.down-arrow');

 humburgerMenuLink.addEventListener('click', () =>{
    mobileMenu.classList.add('opened');
    downArrow.style.display = "none";

});

function closed(elemClosed){
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () =>{
            elemClosed.classList.remove('opened');
        })
    }
};

closed(mobileMenu);

function closedMenu() {
    for (let k = 0; k < menuLink.length; k++) {
        menuLink[k].addEventListener('click', () =>{
            mobileMenu.classList.remove('opened');
        })
    }
};

closedMenu();

// const menuLink = document.querySelectorAll('.menu .button');
// const close = document.querySelectorAll('.close .button');

// function closeMenu(ele) {
//     ele.parentElement.classList.remove('opened');
// }

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', () => closeMenu(close[i]))
// }
// for (let k = 0; k < menuLink.length; k++) {
//     menuLink[k].addEventListener('click', e =>{
//         e.preventDefault;
//         closeMenu(menuLink[k]);
//     })
// }

    

//accordion-team

var teamItem = document.querySelectorAll('.team__item');

for (let i = 0; i < teamItem.length; i++) {
    teamItem[i].addEventListener('click',()=>{
        if (teamItem[i].classList.contains('active')){        
            teamItem[i].classList.remove('active');
        } else {

            teamItem.forEach(elem =>{
                elem.classList.remove('active');
            })

            teamItem[i].classList.add('active'); 
            }
    })
};

//accordion-menu

var menuItem = document.querySelectorAll('.accordion-menu__item');
var menuItemLink = document.querySelectorAll('.accordion-menu__link');

for (i = 0; i < menuItemLink.length; i++) {
    menuItemLink[i].addEventListener('click', function(event){
        event.preventDefault();
    })
}

for (let j = 0; j < menuItem.length; j++) {
    menuItem[j].addEventListener('click',()=>{
        if (menuItem[j].classList.contains('active')){        
            menuItem[j].classList.remove('active');
        } else {
            menuItem.forEach(elem =>{
                elem.classList.remove('active');
            })

            menuItem[j].classList.add('active');
        }
    })
}


//reviews_popup


var reviewsPopup = document.querySelector('.reviews__popup');
var reviewsBtn = document.querySelectorAll('.reviews__btn');
var reviewsBtnLink = document.querySelectorAll('.button');

/*for (let i = 0; i < reviewsBtnLink.length; i++) {
    reviewsBtnLink[i].addEventListener('click', function(event){
        event.preventDefault();
    })
}
*/
for (let i = 0; i < reviewsBtn.length; i++) {
    reviewsBtn[i].addEventListener('click',function(event){
        event.preventDefault();
        reviewsPopup.classList.add('opened');
    })
}

closed(reviewsPopup);



//slider__arrow

var right = document.querySelector('.slider__arrow_left');
var left = document.querySelector('.slider__arrow_right');
var sliderItem = document.querySelector('.slider__list');

right.addEventListener('click', function(event){
        loop('right')
    });

left.addEventListener('click', function(event){
        loop('left')
    });

function loop (direction){
    if (direction === right){
        sliderItem.appendChild(sliderItem.firstElementChild);
    } else {
        sliderItem.insertBefore(sliderItem.lastElementChild, sliderItem.firstElementChild);
    }
}



// validateForm

var formOrder = document.querySelector('.order__form');
var formButtonOrder = document.querySelector('.form__block-submit');
var formPopap = document.querySelector('.form-popap');
var formPopapText = document.querySelector('.form-popap__text');

console.log(formButtonOrder);
formButtonOrder.addEventListener('click', (event) =>{
    event.preventDefault();
    event.stopPropagation();
    // .formButtonOrder;
    if (validateForm(formOrder)) {
        var formData = new FormData(document.forms.formOrder);
        formData.append("to","ssadina@list.ru");

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(formData);

        xhr.responseType = 'json';
        xhr.addEventListener('load', ()=>{
            if (xhr.response.status){
                formPopapText.textContent = "Сообщение отправлено";
                formPopap.classList.add('opened');
            } else {
                formPopapText.textContent = "Что-то пошло не так";
            }
         }); 
console.log(xhr.response.status);
        // xhr.send(JSON.stringify(data));

    };
});

closed(formPopap);

function validateForm(form){
    var valid = true;
    if(!validateField(form.elements.name)){
        valid = false;
    }
    if(!validateField(form.elements.phone)){
        valid = false;
    }
    if(!validateField(form.elements.street)){
        valid = false;
    }

    return valid;
};
function validateField(field){
    if (!field.checkValidity()){
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    } else{
        field.nextElementSibling.textContent = '';
        return true;
    };
};



// one-page-arrows

/*$ (function() {
        var container = $('.wrapper');
        console.log(container);
        var sections = container.find('.section');
        console.log(sections);
        var activeSection = sections.filter('.active');
        var sectionNum = 2;
        var reqSection = sections.eq(sectionNum);
        var reqIndex = reqSection.index();
        var downArrow = $('.down-arrow');
        // downArrow.addEventListener('click', (e)=>{
        //     e.preventDefault;
        //     activeSection.removeClass('active');
        //     reqSection.addClass('active');
        // });
        var hero = $('.hero');
        var best = $('.best');

        downArrow.on('click', function(e){
        e.preventDefault();
        hero.removeClass('active');
        best.addClass('active');

        });
});*/
/*var firstSection = $('.section:first-child');
var activeFirstSection = firstSection.hasClass('active');
var lastSection = $('.one-page:last-child');
var activeLastSection = lastSection.hasClass('active');
var upArrow = $('.up-arrow');
var downArrow = $('.down-arrow');

if (activeFirstSection){                  //как сделать проверку, которая будет отслеживать изменения класса active при скролле?
    upArrow.css({'display':'none'});
} else if(activeLastSection){
    downArrow.css({
        'display':'none'
    });
};*/


// one-page-scroll variant 1


/*$ (function() {

    var generateDots = function () {
        $('.section').each(function () {
            var dot = $('<li>',{
                attr : {
                    class: 'fixed-menu__item'
                },
                html : '<a href="#"></a>'
            });

            $('.fixed-menu__list').append(dot);
        });
    };
    generateDots();

    var activeDots = function (index){
        $('.wrapper')
            .find('.fixed-menu__item')
            .eq(index)
            .addClass('active')
            .siblings()
            .removeClass('active');
    }




    var moveSection = function (container, sectionNum){
        var 
            sections = container.find('.section'),
            activeSection = sections.filter('.active'),
            reqSection = sections.eq(sectionNum),
            reqIndex = reqSection.index(),
            list = container.find('.one-page'),
            duration = 500;

        if(reqSection.length){
            list.animate({
            'top' : -reqIndex * 100 + '%'
            }, duration, function(){
                activeSection.removeClass('active');
                reqSection.addClass('active');
               // activeDots(sectionNum);
            });
        }
    }


    $('.arrow').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.wrapper'),
            sections = container.find('.section'),
            activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        if ($this.hasClass('down-arrow')) {
             moveSection(container, nextSection.index());
         } else{
             moveSection(container, prevSection.index());
         }

    $('body').on('click', '.fixed-menu__item', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.wrapper'),
            index = $this.index();

            moveSection(container, index);
            activeDots(index);
    })
      
/*
    $('body').on('mousewheel', function(){
         var $this = $(this),
            container = $this.closest('.wrapper'),
            index = $this.index();

            moveSection(container, index);
            activeDots(index);
    })  
    }); 


});*/



// one-page-scroll variant 2

$('#fullpage').fullpage({
    menu: '#fixed-menu'
});

// video

function ready() {
    let videoPlayer = document.getElementById('video__player');
    let play = document.getElementById('play');
    let progress = document.getElementById('progress');
    let volumeBtn = document.getElementById('volume-btn');
    let volume = document.getElementById('volume');

    let videoFlag = false;
    let volumeFlag = false;


    let playVideo = () =>{
        if (!videoFlag) {
            videoPlayer.play();
            videoFlag = true;
            play.classList.add('active');
        } else {
            videoPlayer.pause();
            videoFlag = false;
            play.classList.remove('active');
        }
    };
    let volumeVideo = () =>{
        if (!volumeFlag) {
            videoPlayer.volume = 0;
            volumeFlag = true;
        } else {
            videoPlayer.volume = 1;
            volumeFlag = false;
        }
    };
    let progressVideo = () =>{
        // console.log(progress.value);
        videoPlayer.currentTime = Math.floor((videoPlayer.duration/100)*progress.value);
    };

    videoPlayer.addEventListener('timeupdate', () =>{
        let percent = (100/videoPlayer.duration)*videoPlayer.currentTime;
        progress.value = percent;
    });


    let volumeVideoControl = ()=>{
        videoPlayer.volume = volume.value / 100;

    };

    play.addEventListener('click', playVideo);
    volumeBtn.addEventListener('click', volumeVideo);
    progress.addEventListener('input', progressVideo);
    volume.addEventListener('input', volumeVideoControl);
};

document.addEventListener("DOMContentLoaded", ready);


// map

var myMap;
ymaps.ready(init);
function init(){ 
   
    var myMap = new ymaps.Map("map", {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var myPlacemark1 = new ymaps.Placemark([59.8899, 30.3165], {        
        hintContent: 'Лучшая бургерная!',
        balloonContent: 'Самые вкусные бугеры у нас!',
    }, {// Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-23, -57],

    });

     var myPlacemark2 = new ymaps.Placemark([59.91, 30.49], {        
        hintContent: 'Лучшая бургерная!',
        balloonContent: 'Самые вкусные бугеры у нас!',
    }, {// Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-23, -57],

    });

      var myPlacemark3 = new ymaps.Placemark([59.9764, 30.312], {        
        hintContent: 'Лучшая бургерная!',
        balloonContent: 'Самые вкусные бугеры у нас!',
    }, {// Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-23, -57],

    });

       var myPlacemark4 = new ymaps.Placemark([59.9466, 30.3827], {        
        hintContent: 'Лучшая бургерная!',
        balloonContent: 'Самые вкусные бугеры у нас!',
    }, {// Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-23, -57],

    });

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
}