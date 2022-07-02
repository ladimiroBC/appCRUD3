//Modulos por defecto
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos de la app creada
import { ReactiveFormsModule } from '@angular/forms';


//Importamos clases de firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Importamos configuracion de fb
import { environment } from 'src/environments/environment';

//Componentes 

import { MostrarComponent } from './components/mostrar/mostrar.component';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';




@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    CrearComponent,
    EditarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
