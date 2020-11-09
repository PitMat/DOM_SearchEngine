const addElement = (e, node,txt, attr,value) =>{
e.preventDefault();
const element=document.createElement(node);

if(txt){
    const text = document.createTextNode(txt);
    element.appendChild(text);
}

if(attr){
    element.setAttribute(attr,value);
}

document.querySelector('.content').appendChild(element);
}


const searchElements=(event,nameElement) =>{
    event.preventDefault();
    const infoElement=document.querySelector('.result');
    infoElement.textContent ='';
    searchForm.elements['searching-element'].value;
    const elements=[...document.querySelectorAll(nameElement)];
    if(elements.length){
        infoElement.innerHTML= `<p class = "result__number-info"> W tym dokumencie znalazłem ${elements.length} elementy<strong> ${nameElement}</strong></p>`;
        showInfo(elements,infoElement);
    }else{
        infoElement.innerHTML= `<p class = "result__number-info"> W tym dokumencie nie znalazłem ${elements.length} elementów <strong>${nameElement}</strong></p>`;
        return;
    }
}

const showInfo=(elements, infoElement)=>{
    elements.forEach(element =>{
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>klasa/klasy: <strong> ${element.className}</strong></div>
        <div>Wyskokość elementu: <strong> ${element.offsetHeight}</strong></div>
        <div>Szerokość elementu: <strong>${element.offsetWidth}</strong></div>
        <div>Odległość od lewej krawędzi: <strong>${element.offsetLeft}</strong></div>
        <div>Odległość od górnej krawędzi: <strong>${element.offsetTop}</strong></div>
        <div>Liczba elementów dzieci: <strong>${element.childElementCount}</strong></div>
        `;
        infoElement.appendChild(item);
    })
};

// NASŁUCHIWANIE
const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit',(e)=>addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
    
    
    ))

    const searchForm = document.querySelector('.form--search');
    searchForm.addEventListener('submit', (e)=> searchElements(e,searchForm.elements['searching-element'].value));