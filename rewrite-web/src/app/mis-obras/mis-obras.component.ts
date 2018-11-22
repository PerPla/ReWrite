import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";

@Component({
  selector: 'app-mis-obras',
  templateUrl: './mis-obras.component.html',
  styleUrls: ['./mis-obras.component.css']
})
export class MisObrasComponent implements OnInit {
  obras;
  constructor(private usuarioService: UsuarioService) {
    this.obras = [];
  }



  ngOnInit() {
    let id = parseInt(sessionStorage.getItem('id'));
        this.usuarioService.getObras({id: id})
          .subscribe(obras => {
            this.obras = obras;
            console.log(obras);
          }, err => {
            console.error(err);
          });
  }

}
