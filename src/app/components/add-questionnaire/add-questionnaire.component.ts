import {CompleterItem, CompleterService,  CompleterData} from 'ng2-completer';
import {Questionnaire} from '../../classes/questionnaire';
import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from "app/services/questionnaire/questionnaire.service";
import { Observable } from "rxjs/Observable";



@Component({
  selector: 'app-add-questionnaire',
  templateUrl: './add-questionnaire.component.html',
  styleUrls: ['./add-questionnaire.component.css']
})
export class AddQuestionnaireComponent implements OnInit {
  public searchData = [
  'Question6',
  'Question7',
  'Question8',
  'Question9',
  'Question10' 
  ];
  public searchStr: string;
  public selectedQtion: string;
  private dataService: CompleterData;

  public qtionaireAdd: string = "";
  public qtionaires = [
    'Question1',
    'Question2',
    'Question3',
    'Question4',
    'Question5' 
  ];
  
  public questionnaires = [];
  public id: number;
  public Questionnaire = {   
     nom: "",
     generique: false,
     actif: false
  }

  constructor(public questionnaireService: QuestionnaireService, private router: Router,
  private completerService: CompleterService
  ) { 
   // let timedRes = Observable.from([this.searchData]).delay(3000);
    this.dataService = completerService.local(this.searchData, '', '');
    console.log(this.searchData);
  }
  
  public AddQuestionnaire(){
    if (this.Questionnaire.nom != "") {
      this.questionnaireService.getQuestionnaires().subscribe(qtionaires => this.id = qtionaires.length);
      
      let qtionaire = new Questionnaire(this.id, this.Questionnaire.nom, this.Questionnaire.generique, this.Questionnaire.actif);
      this.questionnaireService.addQuestionnaire(qtionaire).subscribe((qtionaire) =>
       {this.router.navigate(['/questionnaires'])
    });
   }
  }

  /**
   * qtionaireAdd
   */
  
  public qtionaire(qtionaireAdd) {
    if(qtionaireAdd != ""){
       this.qtionaireAdd = qtionaireAdd;
       this.qtionaires.push(qtionaireAdd);
       this.qtionaireAdd="";
    }   
  }

  /**
   * suppQtion
   */
  public suppQtion(qtion) {
   let idx = this.qtionaires.indexOf(qtion);
   console.log(idx);
   this.qtionaires.splice(idx, 1);
   console.log(this.qtionaires);
  }

  /**
   * onSelected
   */
  public onSelected(item: CompleterItem) {
    this.selectedQtion = item?item.title:"";
  }

  /**
   * retourQtionaire
   */
  public retourQtionaire() {
    this.router.navigate(['/questionnaires']);
  }
  ngOnInit() {
    
  }

}
