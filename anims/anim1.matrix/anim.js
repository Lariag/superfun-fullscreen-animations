let animClass = 'fade-out-at-end';
let chars = '0123456789QWERTYUIOPASDFGHJKLÑZXCVBNM#';
let linesOrder = [];
let totalLines = 30;
let baseLineSpeed = 45;
let verticalCharSeparation = 0.04;

bg = CreateElementWithText('');
document.body.appendChild(bg);
AddElementClassAfter(bg, 'fullScreenBG', 0);

for(let i = 0; i < totalLines; i++){
    linesOrder[i] = i;
}
linesOrder = shuffle(linesOrder);

for(let i = 0; i < linesOrder.length; i++){
    setTimeout(() => {
        runLine(linesOrder[i] / linesOrder.length, 0, baseLineSpeed - GetRandomInt(0, 20));// );
    } , 80 * i);
}

function runLine(posX, posY, interval){
    let elm = CreateElementWithText(chars[GetRandomInt(0, chars.length)]);
    AddElementToBodyAtPos(elm, 0.3, posX, posY);
    AddElementClassAfter(elm, 'fade-out-at-end', 0);
    deleteElementAfter(elm, 1.1);
    ReplaceElementTextAfter(elm, chars[GetRandomInt(0, chars.length)], 0.4);
    
    setTimeout(() => {
        runLine(posX, posY + verticalCharSeparation, interval)
    }, interval); 

    if(posY > 1){
        posY = 0;
    }
}


function CreateThing(text, interval){
    let thing = CreateElementWithText(text);
    thing.className = 'scale-up-and-fade-out';
    AddElementToBodyAtPos(thing, 0.8, GetRandomFloat(0, 1), GetRandomFloat(0, 1));
    setTimeout(() => CreateThing(text, interval), interval);
}




function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}