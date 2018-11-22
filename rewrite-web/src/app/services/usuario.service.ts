import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/api/usuarios';

  getUsuarios() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(this.url, {headers: headers})
      .pipe(map((res: Response) => res));
  }

  getUsuarioById(id) {
    //let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(this.url + '/' + id)
      .pipe(map((res: Response) => res));
  }

  addUsuario(body: Object) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let bodyString = JSON.stringify(body);
    return this.http.post(this.url, body)
      .pipe(map((res: Response) => res));
  }

  getObras(body: Object) {
    //let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.url + '/obras', body)
      .pipe(map((res: Response) => res));
  }

  login(usuario: Object) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/storage/login', usuario, {headers: headers})
      .pipe(map((res: Response) => res));
  }


}
