import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../services/articulo.service'
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor(articuloService: ArticuloService) {
  }

  ngOnInit() {
  }

}
