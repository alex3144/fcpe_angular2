import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2CompleterModule } from 'ng2-completer';
import { FilterByPipe } from './filtres/filter.pipe';
// import { MaterializeModule } from 'angular2-materialize';

import { EtablissementComponent } from './components/etablissement/etablissement.component';
import {EtablissementService} from './services/etablissement/etablissement.service';
import {AddEtablissementService} from './services/etablissement/add-etablissement.service';
import { AddEtablissementComponent } from './components/add-etablissement/add-etablissement.component';
import { EtablissementshowComponent } from './components/etablissementshow/etablissementshow.component'

const appRoutes = [
  { path: 'etablissements', component: EtablissementComponent, },
  { path: 'etablissements/create', component: AddEtablissementComponent },
  { path: 'etablissements/:id', component: EtablissementshowComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EtablissementComponent,
    AddEtablissementComponent,
    EtablissementshowComponent,
    FilterByPipe,
  ],
  imports: [
    Ng2CompleterModule,
    NgxPaginationModule,
    BrowserModule,
    FormsModule,
    // MaterializeModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EtablissementService,
    AddEtablissementService
  ]
  ,
  bootstrap: [AppComponent]
})

export class AppModule { }
