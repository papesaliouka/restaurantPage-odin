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

export default loadContactPage;