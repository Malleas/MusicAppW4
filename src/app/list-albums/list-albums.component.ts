import {Component, Input, OnInit} from '@angular/core';
import {MusicServiceService} from "../service/music-service.service";
import {Artist} from "../models/Artist";
import {Album} from "../models/Album";


@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {

  @Input() artist: any
  albums:Album[] = []
  selectedAlbum: any


  constructor(private service:MusicServiceService) { }

  ngOnInit(): void {
    this.service.getAlbums(this.artist.name, (albums:Album[]) =>{
      this.albums = albums
    })
  }

  public onSelectedAlbum(album:Album){
    this.selectedAlbum = album
  }

}
