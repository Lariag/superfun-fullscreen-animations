const { contextBridge } = require('electron');
const path = require('path');

// Get the path passed as an argument
const args = window.process.argv;
const animsNum = process.argv.filter((str) => str.startsWith('animName='))[0].replace('animName=','');
const duration = process.argv.filter((str) => str.startsWith('duration='))[0].replace('duration=','');

// Expose the path to the browser context
contextBridge.exposeInMainWorld('electronVars', {
  //animsScriptURL: 'anims/anim'+animsNum+'/anim'+animsNum+'.js',
  animsStyleURL: 'anims/anim' + animsNum + '/anim.css',
  animsScriptURL: 'anims/anim' + animsNum + '/anim.js',
  animDuration: duration,
});