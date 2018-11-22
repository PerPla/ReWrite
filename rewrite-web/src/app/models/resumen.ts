import {Obra} from "./obra";

export class Resumen {
  id: number;
  contenido: string;
  claves: string;
  referencia: string;
  obra: Obra = new Obra();

}
