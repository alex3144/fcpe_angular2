import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CompleterData, CompleterService } from "ng2-completer";
import { QuestionService } from "app/services/question/question.service";
import { Question } from "app/classes/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {



  protected searchStr: string = "";
  protected dataService: CompleterData;

  public collection: any[] = [];
  public Question = {
    libelle: "",
    generique: false,
    type:"",
    choix1:"",
    choix2:"",
    choix3:"",
    choix4:"",
    aide:"",
    actif: false
  }

  public p: number = 1;

  constructor(public completerService: CompleterService, public questionService: QuestionService, private router: Router ) { 
    this.dataService = completerService.local(this.collection, 'libelle', 'libelle');
  }

  public getAllQuestion(){
    this.questionService.getQuestions().subscribe(qtions =>
    qtions.forEach(element => {
      this.collection.push(new Question(element.id, element.libelle, element.generique,
      element.type, element.choix1, element.choix2, element.choix3, 
      element.choix4, element.aide, element.actif))
    }
    )
    );
  }

  public filerItem

  public addQuestion(){
    this.router.navigate(['/questions/create']);
  }

  public getQuestion(id){
    this.router.navigate(['/questions/', id]);
  }

  ngOnInit() {
    this.getAllQuestion();
  }

}
