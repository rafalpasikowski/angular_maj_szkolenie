import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Album} from './models/album';
import {HttpClient} from '@angular/common/http';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

export const SEARCH_URL = new InjectionToken('SEARCH_URL')
@Injectable()
export class MusicService {
  constructor(@Inject(SEARCH_URL) private url,
              private http: HttpClient) {
    this.queries$
      .pipe(
        debounceTime(400),
        filter(query => query.length >= 3),
        distinctUntilChanged(),
        map(query => ({
          q: query,
          type: 'album'
        })),
        switchMap(params => this.http.get<AlbumsResponse>(this.url, {
            params
          })
        ),
        map(response => response.albums.items)
      )
      .subscribe((albums) => {
        this.albums$.next(albums);
      });
  }

  queries$ = new BehaviorSubject(<string>(''));
  albums$ = new BehaviorSubject(<Album[]>([]));

  search(query = '') {
    this.queries$.next(query);
  }
  getAlbums(query = '') {
    return this.albums$.asObservable();
  }
  getQueries() {
    return this.queries$.asObservable();
  }
}

interface AlbumsResponse {
  albums: {
    items: Album[];
  };
}
