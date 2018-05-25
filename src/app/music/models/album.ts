import {E, s, st} from '@angular/core/src/render3';


export interface Entity {
  id: string;
  name: string;
}

export interface Album extends Entity {
  images: AlbumImage[];
  artist: Artist[];
}

export interface Artist extends Entity {
  popularity: number;
}

export interface  AlbumImage {
  url: string;
  height: number;
  width: number;
}
