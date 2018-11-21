import { Component, OnInit } from '@angular/core';
import {Usuario} from '../interfaces/usuario';
import {ArticuloService} from "../services/articulo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articuloService: ArticuloService)
    {
      let myUser: Usuario = {
        nombre: 'Eduardo',
        email: 'eduardo@hotmail.com',
        amigo: true,
      };
      let users: Usuario[] = [myUser];
      console.log(myUser);
      console.log(users);
    }



  ngOnInit() {
    this.articuloService.getArticulos()
      .subscribe(articulos => {
        console.log(articulos)
      }, err => {
        console.error(err);
      })
  }

}
