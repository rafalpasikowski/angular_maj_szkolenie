import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist/playlist.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import {SharedModule} from '../shared/shared.module';
import {PlaylistsRoutingModule} from './playlists-routing.module';
import { PlaylistContainerComponent } from './playlist-container/playlist-container.component';
import {PlaylistsService} from './playlists.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PlaylistsRoutingModule
  ],
  declarations: [PlaylistComponent, ItemListComponent, ListItemComponent, PlaylistDetailsComponent, PlaylistContainerComponent],
  exports: [PlaylistComponent],
  providers: [PlaylistsService]
})
export class PlaylistsModule { }
