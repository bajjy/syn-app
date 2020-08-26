import { app, BrowserWindow, Menu } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

function setMainMenu(mainWindow: any) {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Exit',
          click() {
            app.quit();
          }
        },
        {
          label: 'Tools',
          click() {
            mainWindow.webContents.openDevTools();
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

if (require('electron-squirrel-startup')) {
  app.quit();
};

const createWindow = () => {

  // Create the browser window.
  
  var mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools if you need.
  // mainWindow.webContents.openDevTools();

  setMainMenu(mainWindow);
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