
import createHomePage from './home.page';
import loadContactPage from './contact.page';
import loadMenu from './menu.page';

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
    main.append(createHomePage(),loadMenu(), loadContactPage());
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
export default loadPage