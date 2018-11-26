import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {ImageCroppedEvent} from "ngx-image-cropper/src/image-cropper.component";
import {Usuario} from "../models/usuario";
import {AngularFireStorage} from "@angular/fire/storage";
import {Router} from "@angular/router";
//Adriana esta junto a mi
//David esta a lado de Frida
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  files;
  formData: FormData;
  picture: any;
  usuario: Usuario;
  constructor(private usuarioService: UsuarioService, private firebaseStorage: AngularFireStorage, private router:Router) {
    this.formData = new FormData();
    this.usuario = new Usuario();
  }

  fileSelectMsg: string = 'No has seleccionado un archivo';
  fileUploadMsg: string = 'No se ha subido el archivo';
  disabled: boolean = false;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }

  submitRegistro() {
    console.log(this.croppedImage);
    this.submitPicture();
  }

  submitPicture() {
    const currentPictureId = Date.now();
    const pictures = this.firebaseStorage.ref('pictures/' + currentPictureId + '.jpg')
      .putString(this.croppedImage, 'data_url');

    pictures.then(response => {
      this.picture = this.firebaseStorage.ref('pictures/' + currentPictureId + '.jpg')
        .getDownloadURL();

      this.picture.subscribe(picture => {
        this.usuario.avatar = picture;

        this.usuarioService.addUsuario(this.usuario)
          .subscribe(res => {
            console.log(res);
            this.router.navigate(['/Login']);
          }, err => {
            console.error(err);
          });
      }, err => {
        console.error(err);
      });
    }).catch(err => {
      console.error(err);
    });
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
