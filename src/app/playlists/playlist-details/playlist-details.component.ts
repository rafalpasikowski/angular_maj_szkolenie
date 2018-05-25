import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from '../playlist/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {
  @Output()
  playlistChange = new EventEmitter<Playlist>()
  @Input()
  playlist: Playlist
  mode = 'show';

  constructor() { }

  ngOnInit() {
  }
  edit() {
    this.mode = 'edit';
    }
  cancel() {
    this.mode = 'show';
  }
  save(form) {
    console.log('save', form.value)
    this.playlistChange.emit({
      id: this.playlist.id,
      ...form.value
    });
  }
}
