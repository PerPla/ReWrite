import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/api/verify';

  verifyUser(token) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.url, token, {headers: headers} )
      .pipe(map((res:Response) => res));
  }

  async isLogged() {
    if (sessionStorage.getItem('token')) {
      let token = { token: sessionStorage.getItem('token') };
      console.log('ISLOGGEDMETHOD', token);
      this.verifyUser(token)
        .subscribe(res => {
          console.log('INSIDE ISLOGED', res)
          let status = res
          return status.status;
        }, err => {
          console.error(err);
        });
    } else {
      return false;
    }
  }


}
