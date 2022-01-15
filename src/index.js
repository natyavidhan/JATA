const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
if (require('electron-squirrel-startup')) {
  app.quit();
}
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 350,
    height: 450,
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  Menu.setApplicationMenu(Menu.buildFromTemplate(process.env.NODE_ENV !== 'production' ? mainmenu : []));
};
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
const mainmenu = [
  {
    label: 'DevTools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: 'CmdOrCtrl+I',
        click: function(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      }
    ]
  }
]