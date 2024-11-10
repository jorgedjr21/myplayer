export interface Torrent {
  url: string;
  quality: string;
  type: string;
  size: string;
  seeds: number;
  peers: number;
  hash: string
}