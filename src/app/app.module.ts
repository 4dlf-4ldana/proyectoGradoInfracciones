import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS} from '@angular/material/'

  import   {MomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';

//Notificaciones
import {SimpleNotificationsModule} from 'angular2-notifications'

// Firebase
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule} from 'angularfire2/storage'
import { AngularFireAuthModule} from 'angularfire2/auth'

import { AuthGuard } from '../app/guards/auth.guard'

// Servicios
import { ServiciosService } from './services/servicios.service';
import { AuthService} from './services/auth.service';

// GOOGLE MAPS
import { AgmCoreModule} from '@agm/core'


// Rutas
import { RouterModule,Routes} from '@angular/router'
// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AddCodigoTransitoComponent } from './components/administracion/codigoTransito/add-codigo-transito/add-codigo-transito.component';
import { ListCodigoTransitoComponent } from './components/administracion/codigoTransito/list-codigo-transito/list-codigo-transito.component';
import { AddColorVehiculoComponent } from './components/administracion/gestion-vehiculos/colorVehiculo/add-color-vehiculo/add-color-vehiculo.component';
import { ListColorVehiculoComponent } from './components/administracion/gestion-vehiculos/colorVehiculo/list-color-vehiculo/list-color-vehiculo.component';
import { AddMarcaVehiculoComponent } from './components/administracion/gestion-vehiculos/marcaVehiculo/add-marca-vehiculo/add-marca-vehiculo.component';
import { ListMarcaVehiculoComponent } from './components/administracion/gestion-vehiculos/marcaVehiculo/list-marca-vehiculo/list-marca-vehiculo.component';
import { AddTipoVehiculoComponent } from './components/administracion/gestion-vehiculos/tipoVehiculo/add-tipo-vehiculo/add-tipo-vehiculo.component';
import { ListTipoVehiculoComponent } from './components/administracion/gestion-vehiculos/tipoVehiculo/list-tipo-vehiculo/list-tipo-vehiculo.component';
import { AddServicesComponent } from './components/administracion/servicios/add-services/add-services.component';
import { ListaServiciosComponent } from './components/administracion/servicios/lista-servicios/lista-servicios.component';
import { BoletaInfraccionComponent } from './components/boleta-infraccion/boleta-infraccion.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CodigoInfraccionesComponent } from './components/codigo-infracciones/codigo-infracciones.component';
import { ListaMultasComponent } from './components/multasRegistradas/lista-multas/lista-multas.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPersonalTransitoComponent } from './components/administracion/personalTransito/add-personal-transito/add-personal-transito.component';
import { ListPersonalTransitoComponent } from './components/administracion/personalTransito/list-personal-transito/list-personal-transito.component';
import { AddCargoComponent } from './components/administracion/cargo/add-cargo/add-cargo.component';
import { ListCargoComponent } from './components/administracion/cargo/list-cargo/list-cargo.component';
import { GestionVehiculosComponent } from './components/administracion/gestion-vehiculos/gestion-vehiculos.component';
import { AddGestionUsuarioComponent } from './components/administracion/gestionUsuario/add-gestion-usuario/add-gestion-usuario.component';
import { ListGestionUsuarioComponent } from './components/administracion/gestionUsuario/list-gestion-usuario/list-gestion-usuario.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AddBoletaComponent } from './components/boleta-infraccion/add-boleta/add-boleta.component';
import { AddInfractorComponent } from './components/administracion/datosInfractor/add-infractor/add-infractor.component';
import { ListInfractorComponent } from './components/administracion/datosInfractor/list-infractor/list-infractor.component';
import { LitDatosVehiculoComponent } from './components/administracion/datosVehiculoInfractor/lit-datos-vehiculo/lit-datos-vehiculo.component';
import { AddDatosVehiculoComponent } from './components/administracion/datosVehiculoInfractor/add-datos-vehiculo/add-datos-vehiculo.component';
import { AddMapaComponent } from './components/boleta-infraccion/mapa/add-mapa/add-mapa.component';
import { ListMapaComponent } from './components/boleta-infraccion/mapa/list-mapa/list-mapa.component';

// CAMARA
import {WebcamModule} from 'ngx-webcam';
import { AddLogueoComponent } from './components/login/addLogueo/add-logueo/add-logueo.component';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';
import { AddTestigoComponent } from './components/boleta-infraccion/Testigo/add-testigo/add-testigo.component';
import { ListTestigoComponent } from './components/boleta-infraccion/Testigo/list-testigo/list-testigo.component';
import { ViewImagesComponent } from './components/multasRegistradas/lista-multas/view-images/view-images.component'
import { RoleGuardGuard } from './guards/role-guard.guard';
import { RegistroVehiculosInfraccionadosComponent } from './components/reportes/registro-vehiculos-infraccionados/registro-vehiculos-infraccionados.component';
import { RegistrosPorPoliciaComponent } from './components/reportes/registros-por-policia/registros-por-policia.component';
import { ListBitacoraComponent } from './components/administracion/bitacora/list-bitacora/list-bitacora.component';
import { AddBitacoraComponent } from './components/administracion/bitacora/add-bitacora/add-bitacora.component';


//create our cost var with the information about the format that we want 
export  const   MY_FORMATS   =   { 
  parse :   { 
    dateInput :   'DD/MM/YYYY' , 
  } , 
  display :   { 
    // dateInput :   'DD/MM/YYYY' , 
    monthYearLabel :   'MM YYYY' , 
    dateA11yLabel :   'DD/MM/YYYY' , 
    monthYearA11yLabel :   'MM YYYY' , 
  } , 
} ; 

//Crea variable donde estarán todas las rutas
//canActivate: [AuthGuard]
const misRutas: Routes = [
  { path: 'registro', component : AddBoletaComponent,canActivate: [AuthGuard]},
  { path: '', component : AddLogueoComponent },
  { path: 'multas', component : ListaMultasComponent,canActivate: [AuthGuard]},
  { path: 'administrador', component: AdministracionComponent ,canActivate: [AuthGuard]},
  // { path: 'codigoInfracciones', component: CodigoInfraccionesComponent,canActivate: [AuthGuard]},
  { path: 'autentificacion', component: AddLogueoComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddCargoComponent,
    ListCargoComponent,
    AddCodigoTransitoComponent,
    ListCodigoTransitoComponent,
    GestionVehiculosComponent,
    AddColorVehiculoComponent,
    ListColorVehiculoComponent,
    AddMarcaVehiculoComponent,
    ListMarcaVehiculoComponent,
    AddTipoVehiculoComponent,
    ListTipoVehiculoComponent,
    AddPersonalTransitoComponent,
    ListPersonalTransitoComponent,
    AddServicesComponent,
    ListaServiciosComponent,
    BoletaInfraccionComponent,
    CabeceraComponent,
    CodigoInfraccionesComponent,
    ListaMultasComponent,
    AdministracionComponent,
    AddGestionUsuarioComponent,
    ListGestionUsuarioComponent,
    AddBoletaComponent,
    AddInfractorComponent,
    ListInfractorComponent,
    LitDatosVehiculoComponent,
    AddDatosVehiculoComponent,
    AddMapaComponent,
    ListMapaComponent,
    AddLogueoComponent,
    NotFoundComponent,
    AddTestigoComponent,
    ListTestigoComponent,
    ViewImagesComponent,
    RegistroVehiculosInfraccionadosComponent,
    RegistrosPorPoliciaComponent,
    ListBitacoraComponent,
    AddBitacoraComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(misRutas),
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ScrollingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxkoOlWTS2dKgs15QxhgmLCTluhaP6iV0'
    }),
    WebcamModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    ServiciosService, AuthGuard,
    {   provide :   MAT_DATE_LOCALE ,   useValue :   'es'   } ,   //you can change useValue 
    //  {   provide :   DateAdapter ,   useClass :   MomentDateAdapter ,   deps :   [ MAT_DATE_LOCALE ]   } , 
    //  {   provide :   MAT_DATE_FORMATS ,   useValue :   MY_FORMATS  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

