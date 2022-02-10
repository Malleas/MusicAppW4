import { Injectable } from '@angular/core';
import {default as exampleData} from '../../data/sample-music-data.json'
import {Artist} from "../models/Artist";
import {Album} from "../models/Album";
import {Track} from "../models/Track";


@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  artists:Artist[] = []
  albums:Album[] = []

  constructor() {
    this.artists.push(new Artist(0, "The Beatles"))

    for (let i = 0; i < exampleData.length; i++){
      let tracks:Track[] = []
     for(let j = 0; j < exampleData[i].tracks.length; j++){
      tracks.push(new Track(exampleData[i].tracks[j].id, exampleData[i].tracks[j].number, exampleData[i].tracks[j].title,
        exampleData[i].tracks[j].lyrics))
       }
      this.albums.push(new Album(exampleData[i].id, exampleData[i].title, exampleData[i].artist, exampleData[i].year, exampleData[i].image,
        exampleData[i].description, tracks))
    }
  }

  public getIndex(){
    return this.albums.length+1
  }

  public getArtists(){
    return this.artists
  }

  public getAlbums(artist: any) {
    let albums: Album[] = []
    for(let i = 0; i < this.albums.length; i++){
      if(this.albums[i].artist === artist.name){
        albums.push(new Album(this.albums[i].id, this.albums[i].title, this.albums[i].artist, this.albums[i].year,
          this.albums[i].image, this.albums[i].description, this.albums[i].tracks))
      }
    }
    return albums
  }


  public getAlbum(id:number){
    for(let i = 0; i < this.albums.length; i++){
      if(this.albums[i].id == id){
        let tracks:Track[] = []
        for (let j = 0; j < this.albums[i].tracks.length; j++){
          tracks.push(new Track(this.albums[i].tracks[j].id, this.albums[i].tracks[j].number, this.albums[i].tracks[j].title,
            this.albums[i].tracks[j].lyrics))
        }
        return new Album(this.albums[i].id, this.albums[i].title, this.albums[i].artist, this.albums[i].year, this.albums[i].image,
          this.albums[i].description, tracks)
      }
    }
    return null;
  }

  public createAlbum(album:Album){
        if(this.albums.push(new Album(this.albums.length+1, album.title, album.artist, album.year, album.image,
      album.description, album.tracks))){
          this.artists.push(new Artist(this.artists.length+1, album.artist))
          return this.albums.length+1
    }else {
      return -1
    }
  }

  public updateAlbum(album:Album){
    for(let i = 0; i < this.albums.length; i++){
      if(this.albums[i].id == album.id){
        this.albums[i].title = album.title
        this.albums[i].artist = album.artist
        this.albums[i].year = album.year
        this.albums[i].image = album.image
        this.albums[i].description = album.description
        return 0
      }
    }
    return -1
  }

  public deleteAlbum(id:number){
    for(let i = 0; i < this.albums.length; i++){
      if(this.albums[i].id == id){
        this.albums.splice(i,1 )
        return 0
      }
    }
    return -1
  }
}
