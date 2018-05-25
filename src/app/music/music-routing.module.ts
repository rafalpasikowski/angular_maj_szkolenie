import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MusicSearchComponent} from './music-search/music-search.component';

const routes: Routes = [
  {path: 'music', component: MusicSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
