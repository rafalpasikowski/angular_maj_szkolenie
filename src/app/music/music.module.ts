import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search/music-search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import {MusicService, SEARCH_URL} from './music.service';
import {environment} from '../../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {MusicRoutingModule} from '../music/music-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MusicRoutingModule
  ],
  declarations: [MusicSearchComponent, SearchFormComponent, AlbumListComponent, AlbumItemComponent],
  exports: [],
  providers: [
    {
      provide: SEARCH_URL,
      useValue: environment.SEARCH_URL
    },
    MusicService
  ]
})
export class MusicModule { }
