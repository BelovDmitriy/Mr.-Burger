//меню
(function() {
    
    const burgerMenu = document.querySelector('.menu__list');
  
   
    burgerMenu.addEventListener ('click', function(e) {
  
      e.preventDefault();
      
      
      let target = e.target;
  
      
      while (target.tagName != 'A') {
        target = target.parentNode;
      }  
  
      let item = target.parentNode;
      let list = item.parentNode;
      let items = list.children;
  
      for ( let i = 0; i < items.length; i++ ) {
        if ( items[i] == item ) {
          items[i].classList.toggle('menu__item--active');
        }
        else
        if ( items[i].classList.contains('menu__item--active') ) 
          items[i].classList.remove('menu__item--active');  
      }
    });
  })();

  // Аккордеон "Наша команда"
  (function () {
    const teamAccordeon = document.querySelector('.team__list');

    teamAccordeon.addEventListener('click', event => {
        if (event.target.classList.contains('team__trigger')) {
            event.preventDefault();

            const eventThis = event.target;
            const teamItem = eventThis.parentNode;
            const teamList = teamItem.parentNode;
            const items = teamList.children;
            const content = eventThis.nextElementSibling;
            const contentHeight = content.firstElementChild.clientHeight;

            if (!teamItem.classList.contains('team__item--active')) {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('team__item--active');
                    items[i].lastElementChild.style.height = 0;
                }

                teamItem.classList.add('team__item--active');
                content.style.height = contentHeight + 'px';

            } else {
                teamItem.classList.remove('team__item--active');
                content.style.height = 0;
            }
        }
    });
})();


//Слайдер

    (function () {
        const sliderWrapper = document.querySelector('.burgers__container');
        const slider = document.querySelector('.slider__burgers');
        const list = document.querySelector('.burgers__content');
        const sliderWidth = slider.clientWidth;
        const itemsCount = list.children.length;
        const listWidth = sliderWidth * itemsCount;
        const step = sliderWidth;
        let activeSlide = null;
        let slidePos = 0;
    
        list.style.width = listWidth + 'px';
    
        sliderWrapper.addEventListener('click', function (event) {
            activeSlide = list.querySelector('.burgers__content-item--active');
    
            if (event.target.classList.contains('arrow__svg--right')) {
                event.preventDefault();
    
                if (activeSlide.nextElementSibling) {
                    slideTo('next');
                }
            } else if (event.target.classList.contains('arrow__svg--left')) {
                event.preventDefault();
    
                if (activeSlide.previousElementSibling) slideTo('prev');
            }
        });
    
        function slideTo(vector) {
            if (vector === 'next') {
                slidePos += step;
                activeSlide.nextElementSibling.classList.add('burgers__content-item--active');
            } else {
                slidePos -= step;
                activeSlide.previousElementSibling.classList.add('burgers__content-item--active');
            }
    
            list.style.transform = `translateX(${-slidePos}px)`;
            activeSlide.classList.remove('burgers__content-item--active');
        }
    })();


 
 /*  const butt = document.querySelector('#butt');
    let mobileMenu = document.querySelector('#hamb-menu__id')
                    butt.addEventListener('click', function(){
                        console.log('cl');
                        
                        mobileMenu.style.opacity=1;
                    });

                    const buttClose = document.querySelector('#closeIcon');
                    let closeMenu =document.querySelector('#hamb-menu__id')
                    buttClose.addEventListener('click', function(){
                        console.log('cl');
                     closeMenu.style.display='none';
                                          
                                        
                                        
                                    });*/
                                    const butt = document.querySelector('#butt');
                                     const mobileMenu = document.querySelector('.hamb-menu')
                    butt.addEventListener('click', function(){
                        console.log('cl');
                        mobileMenu.style.opacity="1";
                        mobileMenu.classList.add('hamb-menu--active');
                        
                    });
                    const buttClose = document.querySelector('#closeIcon');
                    const closeMenu =document.querySelector('#hamb-menu__id')
                    buttClose.addEventListener('click', function(){
                        console.log('cl');
                     closeMenu.style.display='none';
                     closeMenu.classList.remove('.hamb-menu--active');});

   