import { Injectable } from '@angular/core';
import { Ensayo } from '../models/ensayo';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class EnsayoService {

  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/api/ensayos';

  getEnsayos() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(this.url, {headers: headers})
      .pipe(map((res: Response) => res));
  }

  addEnsayo(body: Object) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.url, body, {headers: headers})
      .pipe(map((res: Response) => res));
  }


}
