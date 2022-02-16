import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MusicServiceService} from "../service/music-service.service";

@Component({
  selector: 'app-delete-album',
  templateUrl: './delete-album.component.html',
  styleUrls: ['./delete-album.component.css']
})
export class DeleteAlbumComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:MusicServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.deleteAlbum(params['id'], (results:string) =>{
        window.alert(results)
      })
    })
  }


}
