export {};

declare global {
  interface Window {
    electronAPI: {
      send: (channel: string, data: any) => void;
      on: (channel: string, callback: (event: any, data: any) => void) => void;
    };
  }
}