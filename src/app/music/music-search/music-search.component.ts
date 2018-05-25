import { Component, OnInit } from '@angular/core';
import {Album} from '../models/album';
import {MusicService} from '../music.service';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {
  albums: Album[];
  error  = '';
  albums$ = this.musicService
    .getAlbums()
    .pipe(map (albums => albums.reverse()))
    .pipe(catchError(error => (this.error = error)));
  query$ = this.musicService.getQueries();
  constructor(private musicService: MusicService) {
  }
  search(query) {
    this.musicService.search(query);
  }

  ngOnInit() {
  }

}
