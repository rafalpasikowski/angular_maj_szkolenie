import { Component, OnInit } from '@angular/core';
import {PlaylistsService} from '../playlists.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.css']
})
export class PlaylistContainerComponent implements OnInit {
  playlist$;

  constructor(private playlistService: PlaylistsService,
              private  route: ActivatedRoute) {
    const id = parseInt(route.snapshot.paramMap.get('id'), 0);
   this.playlist$ = route.paramMap.pipe(
      map(params => parseInt(params.get('id'), 0)),
      switchMap(id => this.playlistService.getPlaylist(id))
    );
  }

  ngOnInit() {
  }
  save(playlist) {
    console.log('save');
  }

}
