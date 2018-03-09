import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SuperiorComponent } from './superior/superior.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '/projetos', component: ProjetosComponent },
  { path: '/home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SuperiorComponent,
    HomeComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
