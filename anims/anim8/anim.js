CreateThing();

function CreateThing(){
    let thing = CreateElementWithText('😃');
    thing.className = 'scale-up-and-fade-out';
    AddElementToBodyAtPos(thing, 0.5, GetRandomFloat(0, 1), GetRandomFloat(0, 1));
    setTimeout(CreateThing, 30);
}