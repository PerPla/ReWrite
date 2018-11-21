import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {ImageCroppedEvent} from "ngx-image-cropper/src/image-cropper.component";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  files;
  formData: FormData;
  constructor(private usuarioService: UsuarioService) {
    this.formData = new FormData();
  }

  fileSelectMsg: string = 'No has seleccionado un archivo';
  fileUploadMsg: string = 'No se ha subido el archivo';
  disabled: boolean = false;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.file;
  }

  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }

  submitRegistro() {
    console.log(this.croppedImage);
    /*this.formData.append("uploads[]", this.files, this.files.name);
    this.usuarioService.addUsuario(this.formData)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.error(err);
      })*/
  }

  aiuda(event) {
    this.imageChangedEvent = event;
  }

  selectEvent(file: File): void {
    this.fileSelectMsg = file.name;
    //this.imageChangedEvent = event;
  }

  uploadEvent(file: File): void {
    this.fileUploadMsg = file.name;
    console.log(file)
  }

  cancelEvent(): void {
    this.fileSelectMsg = 'No has seleccionado un archivo';
    this.fileUploadMsg = 'No se ha subido el archivo';
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  ngOnInit() {
  }

}
