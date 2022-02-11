import {Component, Input, OnInit} from '@angular/core';
import {MusicServiceService} from "../service/music-service.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Album} from "../models/Album";


@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {
  album: any

  constructor(private route:ActivatedRoute, private service:MusicServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.album = this.service.getAlbum(params['id'])
    })
      }

  onSubmit(){
    let updateAlbum:Album = new Album(this.album.id, this.album.title, this.album.artist, this.album.year,
      this.album.image, this.album.description, this.album.tracks)
    this.service.updateAlbum(updateAlbum)
  }



}
