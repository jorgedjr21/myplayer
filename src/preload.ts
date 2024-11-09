import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel: string, data: any) => ipcRenderer.send(channel, data),
  on: (channel: string, callback: (event: any, data: any) => void) => 
    ipcRenderer.on(channel, callback)
})

window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload script loaded');
})