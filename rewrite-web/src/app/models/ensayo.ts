import {Obra} from "./obra";

export class Ensayo {
  id: number;
  introduccion: string;
  desarrollo: string;
  conclusion: string;
  referencia: string;
  obra: Obra = new Obra();
}
