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

export default loadMenu;