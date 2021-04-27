/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createDiv(){
    
}

function createImageElement(){
    const imgEl = {
        src: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        alt: 'Chef kitchen',
        class: 'home-img',
    };
    const image = document.createElement('img');
    image.setAttribute('src', imgEl.src);
    image.setAttribute('alt', imgEl.alt);
    image.setAttribute('class', imgEl.class);
    return image
}

function createDescription(){
     const description = document.createElement('p');
     description.textContent= 'great meal for everyone';
     return description
}

function createOrder(){
    const order = document.createElement('p');
    const a= document.createElement('a')
     order.innerText = 'order online now';
     a.setAttribute('href', '#')
     a.append(order)
    return a
}


function createHomePage (){
    const div = document.createElement('div');
    div.setAttribute('class', 'image-container');
    div.classList.add('home');
    div.append(createDescription(), createImageElement(), createOrder())
    return div;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);





// Header Creation
function createHeader (){
    const headerArray = ['Home', 'Menu', 'Contact'];
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.innerText = 'The Tangana';
    const navigation = document.createElement('nav');
    const ul = document.createElement('ul');
    for(let i=0; i<headerArray.length;  i++){
        let a = document.createElement('a')
        let li = document.createElement('li');
        a.setAttribute('href', '#');
        a.setAttribute('id', headerArray[i])
        a.innerText = headerArray[i];
        li.appendChild(a);
        ul.appendChild(li);
    }
    navigation.appendChild(ul);
    header.append(title,navigation);
    return header
}
    
// Main Creation
function createMain(){
    const main = document.createElement('main'); 
    main.setAttribute('class', 'main');
    main.append((0,_home_page__WEBPACK_IMPORTED_MODULE_0__.default)(),(0,_menu_page__WEBPACK_IMPORTED_MODULE_2__.default)(), (0,_contact_page__WEBPACK_IMPORTED_MODULE_1__.default)());
    return main
}

// Footer creation 
function createFooter (){
    const footer = document.createElement('footer');
    const h3 = document.createElement('h3')
    h3.innerText = 'Made by pskath1 2021';
    const a = document.createElement('a');
    a.setAttribute('href', 'https://github.com/papesaliouka');
    const p = document.createElement('p')
    p.innerText = 'Github';
    a.append(p)
    footer.append(h3,a);
    return footer
}


// load the page
function loadPage(){
    const content = document.getElementById('content');
    content.append(createHeader(), createMain(), createFooter());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const div = document.createElement('div');
div.setAttribute('class', 'contact');
div.classList.add('main')
const img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80');
img.setAttribute('alt', 'gps');
const adress = document.createElement('span');
const number = document.createElement('span');

adress.innerText= '800 soldier road, PSKCity';
number.innerText= '221-772-012-5280';

div.append(adress, number, img);

function loadContactPage(){
    return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemsArray = [
    {
        src:'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        desc:'gateau',
        price: 200,
        alt:'gateau'
    },
    {
        src:'https://images.unsplash.com/photo-1578874557108-9fc2cfb1121e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        desc:'chicken',
        price: 300,
        alt:'chicken'
    },
    {
        src:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=602&q=80',
        desc:'burger',
        price: 250,
        alt:'burger'

    },
    {
        src:'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        desc:'juice',
        price: 150,
        alt:'huice'
    }
];
let divs = [];
itemsArray.forEach((item)=> {
    const div = document.createElement('div');
    div.setAttribute('class','item');
    const img = document.createElement('img');
    img.setAttribute('src', item.src);
    img.setAttribute('alt', item.alt);
    const desc = document.createElement('p');
    desc.innerText=item.desc;
    const price = document.createElement('span');
    price.innerText = item.price;
    div.append(img, desc, price);
    divs.push(div)
});


function loadMenu(){
    const containerDiv = document.createElement('div');
    divs.forEach(div=> containerDiv.append(div))
    containerDiv.setAttribute('class', 'main');
    containerDiv.classList.add('menu')
    return containerDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.default)();

const homeBtn = document.getElementById('Home');
const menuBtn = document.getElementById('Menu');
const contactBtn = document.getElementById('Contact');

const menu = document.querySelector('.menu');
const home = document.querySelector('.home');
const contact = document.querySelector('.contact');
console.log(menu, home, contact)

homeBtn.addEventListener('click', ()=> {
    console.log('home');
    menu.style.display='none';
    home.style.display='flex';
    contact.style.display='none';
})
menuBtn.addEventListener('click', ()=> {
    console.log('menu');
    menu.style.display='flex';
    home.style.display='none';
    contact.style.display='none';
})
contactBtn.addEventListener('click',()=> {
    console.log('contact');
    menu.style.display='none';
    home.style.display='none';
    contact.style.display='flex';
})
})();

/******/ })()
;