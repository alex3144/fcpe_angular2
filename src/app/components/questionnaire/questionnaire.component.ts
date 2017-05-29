import {Questionnaire} from '../../classes/questionnaire';
import {Router} from '@angular/router';
import {CompleterService, CompleterData} from 'ng2-completer';
import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from "app/services/questionnaire/questionnaire.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  
  protected searchStr: string = "";
  protected dataService: CompleterData;

  public collection: any[] = [];
  public Questionnaire = {
    nom: "",
    generique: false,
    actif: false
    
  }
  public p: number = 1;

  constructor(public completerService: CompleterService, public questionnaireService: QuestionnaireService, private router: Router) {
    this.dataService = completerService.local(this.collection, 'nom', 'nom');
   }
  
  public getAllQuestionnaire(){
    this.questionnaireService.getQuestionnaires().subscribe(qtionaires =>
    qtionaires.forEach(element => {
      this.collection.push(new Questionnaire(element.id, element.nom, element.generique, element.actif
      ))
    })
    );
  }

  public addQuestionnaire(){
    this.router.navigate(['/questionnaires/create']);
  }

  public getQuestionnaire(id){
    this.router.navigate(['/questionnaires/', id]);
  }
  ngOnInit() {
  }

}
