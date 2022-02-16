import { Injectable } from '@angular/core';
import {Artist} from "../models/Artist";
import {Album} from "../models/Album";
import {Track} from "../models/Track";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  hostname: string = "http://localhost:3000"

  constructor(private http: HttpClient) {

  }

  public getArtists(callback: any){
    this.http.get<Artist[]>(this.hostname + "/artists").subscribe((data) => {
      let artists:Artist[] = [];
      for(let x=0;x < data.length;++x){
        artists.push(new Artist(data[x]['id'], data[x]['name']));
      }
      callback(artists);
    });
  }

  public getAlbums(artist:string, callback: any) {
    this.http.get<Album[]>(this.hostname + "/albums/" + artist).subscribe((data) =>{
      let albums:Album[] = []
      for (let i = 0; i < data.length; i++){
        let tracks:Track[] = []
        for (let j = 0; j < data[i]['tracks'].length; j++){
          tracks.push(new Track(data[i]['tracks'][j]['id'], data[i]['tracks'][j]['number'], data[i]['tracks'][j]['title'],
            data[i]['tracks'][j]['lyrics']))
        }
        albums.push(new Album(data[i]['id'], data[i]['title'], data[i]['artist'], data[i]['year'], data[i]['image'],
          data[i]['description'], tracks))
      }
      callback(albums)
    })
  }


  public getAlbum(id:number, callback: any){
    this.http.get<Album>(this.hostname + "/album/" + id).subscribe((data) =>{
      let tracks:Track[] = []
      for (let j = 0; j < data['tracks'].length; j++){
        tracks.push(new Track(data['tracks'][j]['id'], data['tracks'][j]['number'], data['tracks'][j]['title'],
          data['tracks'][j]['lyrics']))
      }
      let album = new Album(data['id'], data['title'], data['artist'], data['year'], data['image'],
        data['description'], tracks)
      callback(album)
    })

  }

  public createAlbum(album:Album, callback: any){
    this.http.post<Album>(this.hostname + "/albums", album).subscribe((data) => {
      callback(data)
    })
  }

  public updateAlbum(album:Album, callback: any){
    this.http.put<Album>(this.hostname + "/albums", album).subscribe((data) => {
      callback(data)
    })
  }

  public deleteAlbum(id:number, callback: any) {
    this.http.delete(this.hostname + "/albums/" + id).subscribe((data) =>{
      callback(data)
    })
  }
}
