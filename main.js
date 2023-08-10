const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

let animWindow = null;
let lastTimeout = -1;

function startAnim(animName, duration = 2){
  if(animWindow != null)
  animWindow.close();
if(lastTimeout >= 0)
  clearTimeout(lastTimeout);

animWindow = new BrowserWindow({
  width: 800,
  height: 600,
  transparent: true,
  frame: false,
  show: false, // Start hidden
  webPreferences: {
    nodeIntegration: true,
    preload: path.join(__dirname, 'preload.js'),
    additionalArguments: ['animName=' + animName, 'duration='+(duration*1000)],
  },
});
console.log('Showing anim ' + animName);
animWindow.loadFile('index.html');
animWindow.maximize();
animWindow.setFullScreen(true);

animWindow.show();

lastTimeout = setTimeout(() => {
    animWindow.close();
    animWindow = null;
    lastTimeout = -1;
}, duration * 1000);
}

app.on('ready', () => {
  globalShortcut.register('CommandOrControl+Num1', () => {
    startAnim('1.matrix', 5);
  });
  globalShortcut.register('CommandOrControl+Num2', () => {
    startAnim('2.sad', 3);
  });
  globalShortcut.register('CommandOrControl+Num3', () => {
    startAnim('3.check', 3);
  });
  globalShortcut.register('CommandOrControl+Num5', () => {
    startAnim('5.confetti', 4);
  });
  globalShortcut.register('CommandOrControl+Num6', () => {
    startAnim('6', 0.3);
  });
  globalShortcut.register('CommandOrControl+Num7', () => {
    startAnim('7.dance', 3);
  });
  globalShortcut.register('CommandOrControl+Num8', () => {
    startAnim('8.smile', 3);
  });
  globalShortcut.register('CommandOrControl+Num9', () => {
    startAnim('9.facepalm', 2);
  });
});

app.on('window-all-closed', (event) => {
  event.preventDefault();
});

app.on('will-quit', () => {
  // Unregister the shortcut when the app is about to quit
  globalShortcut.unregisterAll();
});