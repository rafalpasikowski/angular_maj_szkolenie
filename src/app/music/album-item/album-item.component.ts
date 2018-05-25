import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../models/album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input()
  album: Album;
  constructor() { }

  ngOnInit() {
  }
}
