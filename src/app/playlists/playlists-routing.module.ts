import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlaylistComponent} from './playlist/playlist.component';
import {PlaylistContainerComponent} from './playlist-container/playlist-container.component';

const routes: Routes = [
  {path: 'playlists', component: PlaylistComponent,
  children: [
      { path: '', component: PlaylistContainerComponent},
      { path: ':id', component: PlaylistContainerComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
