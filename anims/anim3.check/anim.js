CreateThing('✅', 30);

function CreateThing(text, interval){
    let thing = CreateElementWithText(text);
    thing.className = 'scale-up-and-fade-out';
    AddElementToBodyAtPos(thing, 0.8, GetRandomFloat(0, 1), GetRandomFloat(0, 1));
    setTimeout(() => CreateThing(text, interval), interval);
}