import {Track} from "./Track";

export class Album
{
    private _id?: number
    private _title: string
    private _artist: string
    private _year: number
    private _image: string
    private _description: string
    private _tracks: Track[]


  constructor(id: number, title: string, artist: string, year: number, image: string, description: string, tracks: Track[]) {
    this._id = id;
    this._title = title;
    this._artist = artist;
    this._year = year;
    this._image = image;
    this._description = description;
    this._tracks = tracks;
  }


  get id(): number {
    if(this._id == undefined){
      return -1
    }else {
      return this.id
    }
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get artist(): string {
    return this._artist;
  }

  set artist(value: string) {
    this._artist = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get tracks(): Track[] {
    return this._tracks;
  }

  set tracks(value: Track[]) {
    this._tracks = value;
  }
}
