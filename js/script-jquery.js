

$(document).ready(function(){
            //вертикальный аккордеон
        $('.vertical-accordeon__item').on('click', e  => {
        e.preventDefault ()
        let elem = $(e.currentTarget)
        elem.toggleClass('vertical-accordeon__item_active');
        
        if (elem.hasClass('vertical-accordeon__item_active')) {
                
            elem.siblings().removeClass('vertical-accordeon__item_active');
            
        } 

        })


        //горизонтальный аккордеон
        $('.team-acco a').on('click', function(){
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('team-acco__trigger--active')) {
                element.removeClass('team-acco__trigger--active'); 
                element.find('div').slideUp();           
            }
            else {
                element.addClass('team-acco__trigger--active');                 
                element.children('div').slideDown();
                element.siblings('li').children('div').slideUp();
                element.siblings('li').removeClass('team-acco__trigger--active');
                
            }
        });

        //меню в моб версии
        $('.menu-hamburger-link').on('click', function(){
            $('.hamb-menu').css('display','block');
            $('.hamb-menu').addClass('hamb-menu-active');            
            // $("section:not(.first_screen)").css('display','none');
            // $("body").css('overflow','hidden');
            $('body').addClass('disabled-onepage-scroll');
                
            $('.onepage-pagination').css('right','-99999px');
        });
        $('#closeIcon').on('click', function(){
            $('.hamb-menu').css('display','none');
            $('.hamb-menu').removeClass('hamb-menu-active');
            $('.onepage-pagination').css('right','25px');
        });
 
})

// смена кнопки в "отзывах" по размеру экрана
$(document).ready(function(){
        var smallSize = false;
        $(window).resize(function(){
        if (!smallSize && $(window).width() <= 480) {
            $(".seeReview").text("Читать отзыв!")
            smallSize = true;
            }
        })
})


//Слайдер
 $(document).ready(function(){
     $('.slider__container').bxSlider();
   });


   $(document).ready(function(){
     $('.screen_scroll-down--right').on('click', function(e){
         e.preventDefault();
         $('.bx-next').click();
     })
     $('.screen_scroll-down--left').on('click', function(e){
         e.preventDefault();
         $('.bx-prev').click();
     })
   });


   //Проверка заполнения полей формы
   $(document).ready(function () {

     $('#name').keyup(function(){
         var name = $('#name').val();
                 
         if (name.length < 3){
             $('#name').css('background','#f06969');
         }else {
             $('#name').css('background','#fff');
         }
             
     });	
     
     $('#tel').keyup(function(){
         var tel = $('#tel').val();
                 
         if (tel.length < 7){
             $('#tel').css('background','#f06969');
         }else {
             $('#tel').css('background','#fff');
         }
             
     });	
     $('#street').keyup(function(){
         var street = $('#street').val();
                 
         if (street.length < 4){
             $('#street').css('background','#f06969');
         }else {
             $('#street').css('background','#fff');
         }
             
     });	
     $('#house').keyup(function(){
         var house = $('#house').val();
                 
         if (house.length < 1){
             $('#house').css('background','#f06969');
         }else {
             $('#house').css('background','#fff');
         }
             
     });	
     $('#flat').keyup(function(){
         var flat = $('#flat').val();
                 
         if (house.length < 1){
             $('#flat').css('background','#f06969');
         }else {
             $('#flat').css('background','#fff');
         }
             
     });	
         // if ($('#noCall').prop('checked')) {
         
         // }
     
     //Отправка формы
     $("#form").on('submit', function (e) {
         e.preventDefault();
         var color = $('input').css('background-color');
         
         if (color == 'rgb(240, 105, 105)') {
             alert ('Проверьте правильность заполнения полей формы');
         } else {

             $.ajax('data.php', {
               type: "POST",
               data: $(this).serialize(),
               success: function (data) {
                 $('#result').text(data);
                 $('#result').css('display', 'block');

               }
             })
         }
       })
       
       // очищение полей формы
        $("#reset").on('click', function () {
           
             
             $("input").css('background-color','#fff');
             

            
        })
       
       //скрытие дива с результатом обработки формы
       $("body").on('click', function () {
             var openMes = $('.result').css('display');
                 
             if (openMes == 'block') {
                 $('.result').css('display', 'none');
             }else {
                
             }
             
         });	       
       
   });

   // карта яндекс
   $(document).ready(function(){
   ymaps.ready(init);
   var myMap;

   function init(){     
       myMap = new ymaps.Map("map", {
           center: [59.91817154482064,30.30557799999997],
           zoom: 11,
           controls: [],
       });
       myMap.behaviors.disable('scrollZoom'); 
     
      
     var coords = [
             [59.94554327989287,30.38935262114668], 
             [59.91142323563909,30.50024587065841], 
             [59.88693161784606,30.319658102103713], 
             [59.97033574821672,30.315194906302924]
         ],
         myCollection = new ymaps.GeoObjectCollection({}, {
             iconLayout: 'default#image',
             iconImageHref: './img/contacts/map-marker.svg',
             iconImageSize: [46, 57],
             iconImageOffset: [-26, -52],
             draggable: false 
         });
     
         for (var i = 0; i < coords.length; i++) {
             myCollection.add(new ymaps.Placemark(coords[i]));
         }
         myMap.geoObjects.add(myCollection);
          
    


      
   }

})

// $(document).ready(function(){
// $(".main").onepage_scroll({
//     sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//     easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//                                      // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//     animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//     pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//     updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//     beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//     afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//     loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//     keyboard: true,   
//                    // You can activate the keyboard controls
//     responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
//                                      // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//                                      // the browser's width is less than 600, the fallback will kick in.
//     direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
//  });


// переход по ссылкам
$(document).ready(function(){
        $('.menu__link').on('click', (e) => {
            e.preventDefault()
            let currentNavLine = $(e.currentTarget).closest('.menu__item')
            let linkIndex = currentNavLine.index()
            
            if ($(e.currentTarget).hasClass('contacts_link')) {
                $.fn.moveTo(linkIndex + 3)
            } else {
                $.fn.moveTo(linkIndex + 2)
            }
            
        })

        $('.orderFromHeader').on('click', (e) => {
            e.preventDefault()
            
            $.fn.moveTo(7)
        
            
        })

        $('.screen_scroll-down').on('click', (e) => {
            e.preventDefault()
            
            $.fn.moveTo(2)
        
            
        })
 
})

//one page scroll
$(document).ready(function(){
    // var openMenu = $('.hamb-menu').css('display');

    // if (openMenu == 'block') {
    //     $('body').addClass('disabled-onepage-scroll');
    // } else {

        $(".main").onepage_scroll({
                sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
                easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                                // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
                animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
                pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
                updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
                beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
                afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
                loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
                keyboard: true,   
                            // You can activate the keyboard controls
                responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                                // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                                // the browser's width is less than 600, the fallback will kick in.
                direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
            });

        
    // }
})



// отключение скролинга на высоте менее 620px
$(document).ready(function(){
    var smallSize = false;
    $(window).resize(function(){
    if (!smallSize && $(window).height() <= 620) {
        $('body').addClass('disabled-onepage-scroll');
        smallSize = true;
        }
    })
})


// переход по ссылкам из полноэкранного меню
$(document).ready(function(){
    $('.hamb-menu__link').on('click', (e) => {
        e.preventDefault()
        $('body').removeClass('disabled-onepage-scroll');
        let currentNavLine = $(e.currentTarget).closest('.hamb-menu__item')
        let linkIndex = currentNavLine.index()
        
        if ($(e.currentTarget).hasClass('contacts_link')) {
            $.fn.moveTo(linkIndex + 3)
        } else {
            $.fn.moveTo(linkIndex + 4)
        }
        
    })

 
})

