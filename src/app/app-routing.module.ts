import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes para las rutas de la app
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {path: '', component:MostrarComponent},
  {path:'crear',component:CrearComponent},
  {path: 'editar/:id',component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
