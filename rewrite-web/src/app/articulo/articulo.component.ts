import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../services/articulo.service'
import {Articulo} from "../models/articulo";
import {UsuarioService} from "../services/usuario.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulo: Articulo
  constructor(private articuloService: ArticuloService, private usuarioService: UsuarioService, private router: Router) {
    this.articulo = new Articulo();
  }


  submitArticulo() {
    console.log(this.articulo);
    let id = parseInt(sessionStorage.getItem('id'));
    this.usuarioService.getUsuarioById(id)
      .subscribe(usr => {
        console.log(usr)
        this.articulo.obra.usuario = usr;
        this.articuloService.addArticulo(this.articulo)
          .subscribe(res => {
            console.log(res);
            alert('Obra creada');
            this.router.navigate(['/Home']);
          }, err => {
            console.error(err);
          });
      }, err => {
        console.error(err);
      });
  }

  ngOnInit() {
  }

}
