import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {Usuario} from "../models/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario
  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuario = new Usuario()
  }

  login() {
    console.log(this.usuario)
    this.usuarioService.login(this.usuario)
      .subscribe(res => {
        console.log(res);
        let token = res;
        sessionStorage.setItem('token', token.token);
        sessionStorage.setItem('id', token.id);
        this.router.navigate(['/Home']);
      }, err => {
        console.error(err);
      });
  }


  ngOnInit() {
  }



}
