const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Quit when all windows are closed.
app.on('window-all-closed', function () {
 if (process.platform != 'darwin') {
   app.quit();
 }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {

 // Create the browser window.
 mainWindow = new BrowserWindow({
   width: 1024,
   height: 768,
   toolbar: false,
   webPreferences: {
     nodeIntegration: false
   }
  });

  mainWindow.setMenu(null);

  mainWindow.maximize();

 // and load the index.html of the app.
 mainWindow.loadURL('file://' + __dirname + '/index.html');

 mainWindow.openDevTools();

 // Emitted when the window is closed.
 mainWindow.on('closed', function () {

   // Dereference the window object, usually you would store windows
   // in an array if your app supports multi windows, this is the time
   // when you should delete the corresponding element.
   mainWindow = null;
 });
});
