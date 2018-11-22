import {Obra} from "./obra";

export class Articulo {
  id: number;
  resumen: string;
  autores: string;
  materiales: string;
  metodos: string;
  resultados: string;
  discusion: string;
  conclusion: string;
  obra: Obra = new Obra();

}
