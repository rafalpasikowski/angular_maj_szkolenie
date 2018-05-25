import {Component, Input, OnInit} from '@angular/core';
import {Playlist} from './Playlist';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaylistsService} from '../playlists.service';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists$;
  selected$;
  save(playlist: Playlist) {
    if (playlist.id) {
      const index = this.playlists.findIndex(p => p.id === playlist.id );
      this.playlists.splice(index, 1, playlist);
    }
  }
  @Input('items')
  playlists: Playlist[] = [
    { name: 'Duppppaaaa',
      id: 2,
      color: '#ffff00',
      favourite: false
    },
    {name: 'Dupa 2',
      id: 123456,
      favourite: false,
      color: '#5c95cd'
    },
    {name: 'DUUUUUpas',
      id : 789,
      favourite: true,
      color: '#335ff7'
    }
  ];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private playlistService: PlaylistsService) {
    this.playlists$ = this.playlistService.getPlaylists();
    this.selected$ = route.firstChild.paramMap.pipe(
      map(params => parseInt(params.get('id'), 0)),
      switchMap(id => this.playlistService.getPlaylist(id))
    );
  }
  selectPlaylist(playlist) {
    this.router.navigate(['playlists', playlist.id]);
  }
  ngOnInit() {
  }

}
