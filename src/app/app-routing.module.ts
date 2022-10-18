import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioGuardService as guard } from './guards/portfolio-guard.service';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'new-educacion', component: NewEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'edit-educacion', component: EditEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'new-experiencia', component: NewEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'edit-experiencia', component: NewEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }