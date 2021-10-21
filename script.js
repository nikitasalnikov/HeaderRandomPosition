// const user = {
//     name: 'John',
//     age: 50,
//     getAge() {
//         return this
//     }
// }

// console.log(user.getAge());


// class Human {
//     constructor(obj) {
//         this.name = obj.name;
//         this.gendor = obj.gendor;
//     } 

//     about(gendor) {
//         console.log(`Пол: ${gendor}` );
//     }
// }

// class Woman extends Human {
//     constructor(obj) {
//         super(obj)
//         this.gendor = 'Ж';
//     }

//     about() {
//         super.about()
//     }
// }

// class Man extends Human { // extands - наследует от класса родителя
//     constructor(obj) {
//         super(obj)
//         this.gendor = 'М'
//     }
// }

// const human = new Human({
//     name: 'Имя',
//     gendor: 'Пол'
// })

// const woman = new Woman({
//     name: 'Alisa'
// })

// const man = new Man({
//     name: 'John'
// })

// console.log(man);
// console.log(woman.about());

// console.log(human.about('Женский'));
// const obj = new Object({
//     name: 'asdasd'
// })


// const obj2 = {
//     name: 'asdasd'
// }

// console.log();

class Scroll {
    constructor(set) {
        if (typeof set.element == 'string') {
            this.element = document.querySelector(set.element)
        } else if (set.element instanceof HTMLElement) {
            this.element = set.element;
        }

        this.top = set.top;
        this.element.style.position = 'fixed';
        this.element.style.top = this.scroll();
        this.init = set.init;

        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }

    scroll() {
        this.window = this.scrollNumber()

        if (this.window - pageYOffset > 0) {
            this.element.style.top = this.window - pageYOffset + 'px'
        } else {
            this.element.style.top = 0
        }
    }

    scrollNumber() {
        if (this.init == 'px') {
            return this.top >= 0 ? this.top : 0;
        } else if (this.init == '%' || this.init == undefined) {
            return this.calc(window.innerHeight, this.top)
        }
    }

    calc(height, top) {
        return height / 100 * top
    }
}

const scroll = new Scroll({
    element: '.header__nav',
    top: 100
})



let btn = document.querySelector('.header__content');

btn.addEventListener('mouseover', Hover, false)


function Hover() {
    const max = 50;
    const min = 0;
    loc = document.querySelector('.header__content')
    loc.style.marginTop = `${Math.floor(Math.random()*(max + min))}%`
    loc.style.marginLeft = `${Math.floor(Math.random()*max + min)}%`
}