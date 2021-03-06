import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ArticuloService {

  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/api/articulos';

  getArticulos() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(this.url, {headers: headers})
      .pipe(map((res: Response) => res));
  }


  addArticulo(body: Object) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.url, body, {headers: headers})
      .pipe(map((res: Response) => res));
  }


}
