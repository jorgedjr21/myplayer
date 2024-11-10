// global.d.ts or preload.d.ts

export {};

declare global {
  interface Window {
    electronAPI: {
      send: (channel: string, data: any) => void;
      on: (channel: string, callback: (event: any, data: any) => void) => void;
      openPlayerWindow: (movieId: number, hash: string) => void;
    };
  }
}
