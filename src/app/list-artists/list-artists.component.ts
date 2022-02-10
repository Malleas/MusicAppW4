import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MusicServiceService} from "../service/music-service.service";
import {Artist} from "../models/Artist";

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {

  selectedArtist: any
  artists:Artist[] = []

  constructor(private route:ActivatedRoute, private service: MusicServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("Getting Data...");
      this.artists = this.service.getArtists();
      this.selectedArtist = null;
    })
  }

  public onSelectArtist(artist:Artist){
    this.selectedArtist = artist
  }





}
