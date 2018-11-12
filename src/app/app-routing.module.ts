import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EvolucionComponent} from './evolucion/evolucion.component';
import {AjustesComponent} from './ajustes/ajustes.component';
import {EnsayoComponent} from './ensayo/ensayo.component';
import {HomeComponent} from './home/home.component';
import {ResumenComponent} from './resumen/resumen.component';
import {CrearComponent} from './crear/crear.component';
import {LiricoComponent} from './lirico/lirico.component';
import {LienzoComponent} from './lienzo/lienzo.component';
import {NarrativoComponent} from './narrativo/narrativo.component';
import {MisObrasComponent} from './mis-obras/mis-obras.component';
import {ArticuloComponent} from './articulo/articulo.component';
import {RegistroComponent} from './registro/registro.component';
import {DramaticoComponent} from './dramatico/dramatico.component';
import {LoginComponent} from './login/login.component';

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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
