import { Component, OnInit } from '@angular/core';
import {Ensayo} from "../models/ensayo";
import {EnsayoService} from "../services/ensayo.service";
import {Usuario} from "../models/usuario";
import {UsuarioService} from "../services/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ensayo',
  templateUrl: './ensayo.component.html',
  styleUrls: ['./ensayo.component.css']
})
export class EnsayoComponent implements OnInit {
  ensayo: Ensayo;
  usuario: any;
  constructor(private ensayoService: EnsayoService, private usuarioService: UsuarioService, private router: Router) {
    this.ensayo = new Ensayo();
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  async submitEnsayo() {
    console.log(this.ensayo);
    let id = parseInt(sessionStorage.getItem('id'));
    this.usuarioService.getUsuarioById(id)
      .subscribe(usr => {
        this.ensayo.obra.usuario = usr;
        this.ensayoService.addEnsayo(this.ensayo)
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

}
