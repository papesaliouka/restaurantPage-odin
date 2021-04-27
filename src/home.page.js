
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

export default createHomePage;


