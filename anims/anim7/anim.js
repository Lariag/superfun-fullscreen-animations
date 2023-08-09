let elm = CreateElementWithText('💃');
AddElementToBodyAtPos(elm, 2.5, 0.5, 1);
AddElementClassAfter(elm, 'wobble', 0);

CreateThing();

function CreateThing(){
    let thing = CreateElementWithText('🎶');
    thing.className = 'scale-up-and-fade-out';
    AddElementToBodyAtPos(thing, 0.5, GetRandomFloat(0, 1), GetRandomFloat(0, 0.5));
    setTimeout(CreateThing, 70);
}