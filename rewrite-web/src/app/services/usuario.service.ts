import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/storage/upload';

  getUsuarios() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(this.url, {headers: headers})
      .pipe(map((res: Response) => res));
  }

  addUsuario(body: FormData) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let bodyString = JSON.stringify(body);
    return this.http.post(this.url, body, headers )
      .pipe(map((res: Response) => res));
  }


}
