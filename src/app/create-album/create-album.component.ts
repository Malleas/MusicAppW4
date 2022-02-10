import { Component, OnInit } from '@angular/core';
import {Album} from "../models/Album";
import {MusicServiceService} from "../service/music-service.service";
import {Track} from "../models/Track";

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  title: any
  artist: any
  year: any
  description: any
  image:any

  constructor(private service:MusicServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let id : number = this.service.getIndex()
    let tracks:Track[] = []
    let album:Album = new Album(id, this.title, this.artist, this.year, this.image, this.description, tracks)
    this.service.createAlbum(album)

  }

}
