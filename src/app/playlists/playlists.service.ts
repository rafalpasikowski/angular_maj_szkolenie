import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Playlist} from './playlist/Playlist';


@Injectable()
export class PlaylistsService {
  playlists: Playlist[] = [
    { name: 'Ala ma kota',
      id: 2,
      color: '#ffff00',
      favourite: false
    },
    {name: 'Angular 2',
      id: 123456,
      favourite: false,
      color: '#5c95cd'
    },
    {name: 'Greatest hits',
      id : 789,
      favourite: true,
      color: '#335ff7'
    }
  ];

  constructor() { }
  getPlaylists(): Observable<Playlist[]> {
    return of(this.playlists);
  }
  getPlaylist(id: number): Observable<Playlist> {
    return of(this.playlists.find(
      playlists => playlists.id === id
    ));
  }
}
