import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Articulo } from '../models/articulo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: Http) {}
  private url = 'http://localhost:3000/api/usuarios';

  getArticulos() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.get(this.url, {headers: headers})
      .pipe(map((res: Response) => res.json()))
  }

  addArticulo() {

  }


}
