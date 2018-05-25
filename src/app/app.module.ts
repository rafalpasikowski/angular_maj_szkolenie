import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { SharedModule } from './shared/shared.module';
import { PseudoPlackiDirective } from './shared/pseudo-placki.directive';
import { MusicModule } from './music/music.module';
import { AuthModule } from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    PseudoPlackiDirective
  ],
  imports: [
    BrowserModule,
    PlaylistsModule,
    SharedModule,
    MusicModule,
    AuthModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private auth: AuthService) {
    auth.getToken();
  }
}
