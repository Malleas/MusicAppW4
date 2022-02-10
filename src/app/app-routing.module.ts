import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAlbumComponent} from "./create-album/create-album.component";
import {ListArtistsComponent} from "./list-artists/list-artists.component";
import {ListAlbumsComponent} from "./list-albums/list-albums.component";
import {DisplayAlbumComponent} from "./display-album/display-album.component";
import {EditAlbumComponent} from "./edit-album/edit-album.component";
import {DeleteAlbumComponent} from "./delete-album/delete-album.component";
import {AnimationsComponent} from "./animations/animations.component";

const routes: Routes = [
  {path: 'create', component:CreateAlbumComponent},
  {path: 'list-artists', component:ListArtistsComponent},
  {path: 'list-albums', component:ListAlbumsComponent},
  {path: 'display', component:DisplayAlbumComponent},
  {path: 'edit/:id', component:EditAlbumComponent},
  {path: 'delete/:id', component:DeleteAlbumComponent},
  {path: 'animations', component:AnimationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
