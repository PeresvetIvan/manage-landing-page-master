'use strict'

class App {

    constructor() {

        // vars
        this.translateValue = 0;
        this.sliderItemMargin = 0;

        // menu
        this.hamburger = document.querySelector('.hamburger');
        this.menu = document.querySelector('.nav__menu');

        // slider
        this.slider = document.querySelector('.reviews__content');
        this.sliderItems = document.querySelectorAll('.review');
        this.sliderCircles = document.querySelectorAll('.reviews__switch-review span');
        this.sliderArrows = document.querySelectorAll('.reviews__switch--tablet');
    }

    sliderMove = () =>  {
        this.translateValue -= 100;
        this.sliderItemMargin += 2;
        for(let sliderItem of this.sliderItems) {
            sliderItem.style.transform = `translateX(calc(${this.translateValue}% - ${this.sliderItemMargin}rem`;
        }
        // this.sliderItems[this.sliderItems.lenght - 1].style.order = '1';
        // this.sliderItems[0].style.order = '1';
        setTimeout(function() { 
            this.sliderItems[0].style.transform = `translateX(calc(100% + 6rem)`;
        }, 2000); 
    } 

    init() {
        for(let arrow of this.sliderArrows) {
            arrow.addEventListener('click', this.sliderMove);
        }

    }
}

let app = new App();
app.init();