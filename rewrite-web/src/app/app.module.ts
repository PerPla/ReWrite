import { AjustesComponent } from './ajustes/ajustes.component';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { BrowserModule } from '@angular/platform-browser';
import { CrearComponent } from './crear/crear.component';
import { DramaticoComponent } from './dramatico/dramatico.component';
import { EnsayoComponent } from './ensayo/ensayo.component';
import { EvolucionComponent } from './evolucion/evolucion.component';
import { HomeComponent } from './home/home.component';
import {InitComponent} from './init.component';
import { LienzoComponent } from './lienzo/lienzo.component';
import { LiricoComponent } from './lirico/lirico.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MisObrasComponent } from './mis-obras/mis-obras.component';
import { NarrativoComponent } from './narrativo/narrativo.component';
import { NgModule } from '@angular/core';
import { RegistroComponent } from './registro/registro.component';
import { ResumenComponent } from './resumen/resumen.component';
import { TablaScoreComponent } from './tabla-score/tabla-score.component';
import {Routes, RouterModule} from '@angular/router';

// Importamos Angular Material Animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import { MaterialModule} from './material';
import {HttpClientModule} from "@angular/common/http";
import {ArticuloService} from "./services/articulo.service";
import {EnsayoService} from "./services/ensayo.service";
import {UsuarioService} from "./services/usuario.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

//Covalent
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import {CovalentFileModule} from "@covalent/core";

//Image
import { ImageCropperModule } from 'ngx-image-cropper';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import {AuthenticationService} from "./services/authentication.service";
import {AuthenticationGuard} from "./services/authentication.guard";
import {ResumenService} from "./services/resumen.service";


//Firebase


const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'Home', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'Login', component: LoginComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Ajustes', component: AjustesComponent, canActivate: [AuthenticationGuard]},
  {path: 'Articulo' , component: ArticuloComponent, canActivate: [AuthenticationGuard]},
  {path: 'Crear', component: CrearComponent, canActivate: [AuthenticationGuard]},
  {path: 'Dramatico', component: DramaticoComponent, canActivate: [AuthenticationGuard]},
  {path: 'Ensayo', component: EnsayoComponent, canActivate: [AuthenticationGuard]},
  {path: 'Evolucion', component: EvolucionComponent, canActivate: [AuthenticationGuard]},
  {path: 'Lienzo', component: LienzoComponent, canActivate: [AuthenticationGuard]},
  {path: 'Lirico', component: LiricoComponent, canActivate: [AuthenticationGuard]},
  {path: 'MisObras', component: MisObrasComponent, canActivate: [AuthenticationGuard]},
  {path: 'Narrativo', component: NarrativoComponent, canActivate: [AuthenticationGuard]},
  {path: 'Resumen', component: ResumenComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    ArticuloComponent,
    EnsayoComponent,
    ResumenComponent,
    NarrativoComponent,
    LiricoComponent,
    DramaticoComponent,
    CrearComponent,
    EvolucionComponent,
    AjustesComponent,
    MisObrasComponent,
    LienzoComponent,
    MenuComponent,
    InitComponent,
    TablaScoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //Covalent
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentFileModule,
    //Image
    ImageCropperModule,

    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [ArticuloService, EnsayoService, ResumenService, UsuarioService, AuthenticationGuard, AuthenticationService, { provide: StorageBucket, useValue: 'rewrite-832fd.appspot.com' }],
  bootstrap: [InitComponent]
})
export class AppModule { }
