function positionCenteredElement(elm) {
    elm.style.position = 'absolute';

    const elementWidth = elm.offsetWidth;
    const elementHeight = elm.offsetHeight;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const posX = (windowWidth - elementWidth) / 2;
    const posY = (windowHeight - elementHeight) / 2;

    elm.style.left = posX + 'px';
    elm.style.top = posY + 'px';
}

function positionElement(elm, x, y) {
    elm.style.position = 'absolute';

    const elementWidth = elm.offsetWidth;
    const elementHeight = elm.offsetHeight;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const posX = ((windowWidth - elementWidth) / 2) * (x * 2);
    const posY = ((windowHeight - elementHeight) / 2) * (y * 2);

    elm.style.left = posX + 'px';
    elm.style.top = posY + 'px';
}

function GetRandomInt(max){
    return Math.floor(Math.random() * max);
}

function GetRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function GetRandomFloat(max){
    return Math.random() * max;
}
function GetRandomFloat(min, max){
    return Math.random() * (max - min) + min;
}

function CreateElementWithText(text, id = ''){
    const newElement = document.createElement('div');
    newElement.textContent = text;
    if(id === ''){
        id = Math.floor(Math.random() * 1000000)
    }
    newElement.id = id;
    return newElement;
}
function AddElementToBodyAtPos(elm, size, x, y){
    
    //elm.style.transform = `scale(${size*10})`
    elm.style.fontSize = (size * 10) + 'em';
    document.body.appendChild(elm);
    positionElement(elm, x, y);
}

let ReplaceElementTextAfterAccumulatedDelays = {};

function ReplaceElementTextAfter(elm, text, delay = 0){
    let acc = ReplaceElementTextAfterAccumulatedDelays[elm.id + 'ReplaceElementTextAfter'];
    if(!acc)
        acc = 0;
    acc += delay;

    if(delay === 0){
        elm.textContent = text;
    }else{
        setTimeout(()=>{
            elm.textContent = text;
        }
        ,acc * 1000);
    }

    ReplaceElementTextAfterAccumulatedDelays[elm.id+ 'ReplaceElementTextAfter'] = acc;
}

let AddElementClassAfterAccumulatedDelays = {};

function AddElementClassAfter(elm, clas, delay, prevClas = ''){
    let acc = AddElementClassAfterAccumulatedDelays[elm.id + 'AddElementClassAfter'];
    if(!acc)
        acc = 0;
    acc += delay;

    if(delay === 0){
        if(prevClas !== '')
        elm.classList.remove(prevClas);
        elm.classList.add(clas);
    }else{
        setTimeout(()=>{
            if(prevClas !== '')
                elm.classList.remove(prevClas);
            elm.classList.add(clas);
        }
        ,acc * 1000);
    }

    AddElementClassAfterAccumulatedDelays[elm.id+ 'AddElementClassAfter'] = acc;
}