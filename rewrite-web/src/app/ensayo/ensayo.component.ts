import { Component, OnInit } from '@angular/core';
import {Ensayo} from "../models/ensayo";
import {EnsayoService} from "../services/ensayo.service";
import {Usuario} from "../models/usuario";

@Component({
  selector: 'app-ensayo',
  templateUrl: './ensayo.component.html',
  styleUrls: ['./ensayo.component.css']
})
export class EnsayoComponent implements OnInit {
  ensayo: Ensayo;
  usuario: Usuario;
  constructor(private ensayoService: EnsayoService) {
    this.ensayo = new Ensayo();
    this.usuario = new Usuario();
    this.usuario.usuario = 'Angelito';
    this.usuario.avatar = 'estesmiavatar';
  }

  ngOnInit() {
  }

  submitEnsayo() {
    console.log(this.ensayo);
    this.ensayo.obra.usuario = this.usuario;
    this.ensayoService.addEnsayo(this.ensayo)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.error(err);
      });
  }

}
