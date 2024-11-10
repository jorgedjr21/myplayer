// Type for Movie Details response data
import { Torrent } from "./Torrents";


export interface MovieDetails {
  id: number;
  title: string;
  description_full: string;
  rating: number;
  runtime: number;
  genres: string[];
  year: number;
  large_cover_image: string;
  like_count?: number;
  torrents?: Torrent[];
  yt_trailer_code?: string,
  cast: { name: string; character_name: string }[];
  screenshots?: string[],
}
