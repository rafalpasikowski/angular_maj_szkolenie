import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Playlist} from '../playlist/Playlist';


@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  highlighted = null;
  @Input()
  playlists: Playlist
  @Output()
  selectedChange = new EventEmitter<Playlist>()
  @Input()
  selected: Playlist
  selectPlaylist(playlist: Playlist) {
    this.selectedChange.emit(playlist);
  }
  trackFn(playlist) {
    return playlist.id;
  }
  constructor() { }

  ngOnInit() {
  }

}

