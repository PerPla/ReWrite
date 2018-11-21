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
import {Routes, RouterModule} from '@angular/router';

// Importamos Angular Material Animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import { MaterialModule} from './material';
import {HttpClientModule} from "@angular/common/http";
<<<<<<< HEAD
import {ArticuloService} from "./services/articulo.service";
import {EnsayoService} from "./services/ensayo.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

//Covalent

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import {CovalentFileModule} from "@covalent/core";
import {UsuarioService} from "./services/usuario.service";
=======
import {HttpModule} from "@angular/http";
import { TablaScoreComponent } from './tabla-score/tabla-score.component';
>>>>>>> 4d5bb587b05eab57320cd7805426b42957c4686f

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Ajustes', component: AjustesComponent},
  {path: 'Articulo' , component: ArticuloComponent},
  {path: 'Crear', component: CrearComponent},
  {path: 'Dramatico', component: DramaticoComponent},
  {path: 'Ensayo', component: EnsayoComponent},
  {path: 'Evolucion', component: EvolucionComponent},
  {path: 'Lienzo', component: LienzoComponent},
  {path: 'Lirico', component: LiricoComponent},
  {path: 'MisObras', component: MisObrasComponent},
  {path: 'Narrativo', component: NarrativoComponent},
  {path: 'Resumen', component: ResumenComponent}
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
    CovalentFileModule
  ],
  providers: [ArticuloService, EnsayoService, UsuarioService],
  bootstrap: [InitComponent]
})
export class AppModule { }
