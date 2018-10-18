const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

app.on("ready", function() {
	const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;

	mainWindow = new BrowserWindow({width, height});

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

});