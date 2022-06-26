import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { CardsSectionComponent } from './components/cards-section/cards-section.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistBodyComponent } from './components/playlist-body/playlist-body.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken/img-broken.directive';

@NgModule({
  declarations: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    CardsSectionComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],

  imports: [
    CommonModule,
    RouterModule
  ],
  
  exports: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    CardsSectionComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]

})
export class SharedModule { }
