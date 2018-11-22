import { Component, OnInit } from '@angular/core';
import {ResumenService} from "../services/resumen.service";
import {UsuarioService} from "../services/usuario.service";
import {Router} from "@angular/router";
import {Resumen} from "../models/resumen";


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  resumen: Resumen;
  constructor(private resumenService: ResumenService, private usuarioService: UsuarioService, private router: Router) {
    this.resumen = new Resumen();
  }

  submitResumen() {
    console.log(this.resumen);
    let id = parseInt(sessionStorage.getItem('id'));
    this.usuarioService.getUsuarioById(id)
      .subscribe(usr => {
        this.resumen.obra.usuario = usr;
        this.resumenService.addResumen(this.resumen)
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
