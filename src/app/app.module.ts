import {AddQuestionnaireComponent} from './components/add-questionnaire/add-questionnaire.component';
import {QuestionnaireComponent} from './components/questionnaire/questionnaire.component';
import * as path from 'path';
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
import { EtablissementshowComponent } from './components/etablissementshow/etablissementshow.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AddCampagneComponent } from './components/add-campagne/add-campagne.component'
import { QuestionService } from "app/services/question/question.service";
import { QuestionComponent } from './components/question/question.component';
import { QuestionnaireService } from "app/services/questionnaire/questionnaire.service";
import { CampagneComponent } from './components/campagne/campagne.component';
import { CampagneService } from "app/services/campagne/campagne.service";
import { HomeAuthComponent } from './components/home-auth/home-auth.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { AddClasseComponent } from './components/add-classe/add-classe.component';
import { ClasseComponent } from './components/classe/classe.component';
import { ClasseService } from "app/services/classe/classe.service";

const appRoutes = [
  { path: 'etablissements', component: EtablissementComponent, },
  { path: 'etablissements/create', component: AddEtablissementComponent },
  { path: 'etablissements/:id', component: EtablissementshowComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'questions/create', component: AddQuestionComponent },
  { path: 'questionnaires', component: QuestionnaireComponent },
  { path: 'questionnaires/create', component: AddQuestionnaireComponent },
  { path: 'campagnes', component: CampagneComponent },
  { path: 'campagnes/create', component: AddCampagneComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'classes/create', component: AddClasseComponent },
  { path: 'classes', component: ClasseComponent },
  { path: '', component: HomeAuthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EtablissementComponent,
    AddEtablissementComponent,
    EtablissementshowComponent,
    FilterByPipe,
    AddQuestionnaireComponent,
    QuestionnaireComponent,
    AddQuestionComponent,
    AddCampagneComponent,
    QuestionComponent,
    CampagneComponent,
    HomeAuthComponent,
    FormulaireComponent,
    AddClasseComponent,
    ClasseComponent,
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
    AddEtablissementService,
    QuestionService,
    QuestionnaireService,
    CampagneService,
    ClasseService

  ]
  ,
  bootstrap: [AppComponent]
})

export class AppModule { }
