import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { interceptorProvider, InterceptorService } from './services/interceptor-service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    EducacionComponent,
    AcercaDeComponent,
    CopyrightComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    UploadFormComponent,
    UploadDetailsComponent,
    UploadListComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    NewSkillComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
