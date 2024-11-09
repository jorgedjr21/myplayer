import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as http from 'http';

function createWindow() {
  let mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Load `loading.html` initially
  mainWindow.loadFile(path.join(__dirname, '../public/loading.html'))

  const loadURL = (url: string) => {
    mainWindow.loadURL(url).catch((err) => {
      console.error(`Failed to load ${url}:`, err);
      setTimeout(() => loadURL(url), 500); // Retry after 500ms
    });
  };

  if (process.env.NODE_ENV === 'development') {
    // Continuously retry loading until the dev server is ready
    const devServerUrl = 'http://localhost:3000';
    const checkServer = () => {
      http.get(devServerUrl, (res) => {
        if (res.statusCode === 200) {
          loadURL(devServerUrl); // Load the URL if the server is ready
        } else {
          setTimeout(checkServer, 500); // Retry after 500ms
        }
      }).on('error', () => {
        setTimeout(checkServer, 500); // Retry after 500ms if connection fails
      });
    };
    checkServer();
  } else {
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('before-quit', () => {
  console.log('before-quit', process.env.ELECTRON_DEV)
  if (process.env.ELECTRON_DEV) {
    // Kill Webpack Dev Server or any other running process
    process.exit(0); // Force exit to close all subprocesses
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
