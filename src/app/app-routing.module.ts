import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { PortfolioGuardService as guard } from './guards/portfolio-guard.service';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'new-educacion', component: NewEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'edit-educacion', component: EditEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'new-experiencia', component: NewExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'edit-experiencia', component: EditExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'new-proyecto', component: NewProyectoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'edit-proyecto', component: EditProyectoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'new-skill', component: NewSkillComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'edit-skill', component: EditSkillComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }