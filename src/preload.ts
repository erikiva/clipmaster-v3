import { contextBridge, ipcRenderer } from "electron";

const api = {
  writeToClipboard: (content: string) => {
    ipcRenderer.send("write-to-clipboard", content);
  },
  readFromClipboard: () => {
    return ipcRenderer.invoke("read-from-clipboard");
  },
} as const;

contextBridge.exposeInMainWorld("api", api);

export type API = typeof api;
