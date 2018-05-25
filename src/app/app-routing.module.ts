import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'playlists', pathMatch: 'full'},
  {path: '**', redirectTo: 'playlists', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: false
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

