let ball1 = CreateElementWithText('🎊');
AddElementToBodyAtPos(ball1, 1.5, 0.1, 0.1);
AddElementClassAfter(ball1, 'slide-rotate-hor-top', 0);
AddElementClassAfter(ball1, 'rotate-90-cw', 0.3, 'slide-rotate-hor-top');

let ball2 = CreateElementWithText('🎊');
AddElementToBodyAtPos(ball2, 1.5, 0.5, 0.1);
AddElementClassAfter(ball2, 'slide-rotate-hor-top', 0);
AddElementClassAfter(ball2, 'rotate-90-cw', 0.27, 'slide-rotate-hor-top');

let ball3 = CreateElementWithText('🎊');
AddElementToBodyAtPos(ball3, 1.5, 0.9, 0.1);
AddElementClassAfter(ball3, 'slide-rotate-hor-top', 0);
AddElementClassAfter(ball3, 'rotate-90-cw', 0.33, 'slide-rotate-hor-top');


setTimeout(() => {
    const ccc = document.body;
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        ccc.appendChild(confetti);
        // ccc.style.left = GetRandomInt(500) + 'px';
        // ccc.style.top = GetRandomInt(20, 100) + 'px';
    }
    makeItConfetti();
    onChange({currentTarget: {value: 'bookmarks'}});
    
    document.getElementById('type').addEventListener('change', onChange);

}, 300);

setTimeout(CreateThing, 300)

function CreateThing(){
    let thing = CreateElementWithText('🎇');
    thing.className = 'scale-up-and-fade-out';
    AddElementToBodyAtPos(thing, 0.5, GetRandomFloat(0.1, 0.9), GetRandomFloat(0.7, 1));
    setTimeout(CreateThing, 100);
}



var confettiPlayers = [];

function makeItConfetti() {
  var confetti = document.querySelectorAll('.confetti');
  
  if (!confetti[0].animate) {
    return false;
  }

  for (var i = 0, len = confetti.length; i < len; ++i) {
    var candycorn = confetti[i];
    candycorn.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
    var scale = Math.random() * .7 + .3;
    var player = candycorn.animate([
      { transform: `translate3d(${(i/len*100)}vw,-5vh,0) scale(${scale}) rotate(0turn)`, opacity: scale },
      { transform: `translate3d(${(i/len*100 + 10)}vw,105vh,0) scale(${scale}) rotate(${ Math.random() > .5 ? '' : '-'}2turn)`, opacity: 1 }
    ], {
      duration: Math.random() * 3000 + 5000,
      iterations: Infinity,
      delay: -(Math.random() * 7000)
    });
    
    confettiPlayers.push(player);
  }
}

function onChange(e) {
  document.body.setAttribute('data-type', e.currentTarget.value);
  confettiPlayers.forEach(player => player.playbackRate = e.currentTarget.value === 'bookmarks' ? 2 : 1);
}