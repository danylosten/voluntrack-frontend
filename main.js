const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Це з'єднає десктопне вікно з твоїм React-сервером
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);