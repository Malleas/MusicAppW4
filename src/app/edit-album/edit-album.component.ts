import {Component, Input, OnInit} from '@angular/core';
import {MusicServiceService} from "../service/music-service.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {
  id: any
  title: any
  artist: any
  year: any
  image: any
  description: any

  constructor(private route:ActivatedRoute, private service:MusicServiceService) { }

  ngOnInit(): void {
      }

  onSubmit(){

  }



}
