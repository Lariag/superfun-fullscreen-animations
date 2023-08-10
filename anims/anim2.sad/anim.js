CreateThing('🙁', 40);
CreateThing('😕', 130);
CreateThing('😢', 130);
CreateThing('😭', 200);

function CreateThing(text, interval){
    let thing = CreateElementWithText(text);
    thing.className = 'scale-up-and-fade-out';
    AddElementToBodyAtPos(thing, 0.8, GetRandomFloat(0, 1), GetRandomFloat(0, 1));
    setTimeout(() => CreateThing(text, interval), interval);
}