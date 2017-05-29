import {MaterializeAction} from 'angular2-materialize';
import {Question} from '../../classes/question';
import {Router} from '@angular/router';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { QuestionService } from "app/services/question/question.service";


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public questions = [];
  public id: number;
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
  constructor(public questionService: QuestionService, private router: Router) { }
  
  /**
   * addQuestion
   */
  public addQuestion() {
     if (this.Question.libelle != "" && this.Question.type != "") {
      this.questionService.getQuestions().subscribe(qtions => this.id = qtions.length);
      
      let qtion = new Question(this.id, this.Question.libelle, this.Question.generique,
      this.Question.type, this.Question.choix1, this.Question.choix2, 
      this.Question.choix3, this.Question.choix4,
      this.Question.aide, this.Question.actif);

      this.questionService.addQuestion(qtion).subscribe((qtion) => {
        this.router.navigate(['/questions'])
      });
  }
  };
  
  public trans: boolean = false;

  ngOnInit() {

    this.questionService.getQuestions().subscribe(qtions => this.questions = qtions);
  }

  /**
   * changed
   */
  public changed() {
    console.log(this.trans);
    this.trans = true;
  }

  /**
   * unChanged
   */
  public unChanged() {
    this.trans = false;
  }
}
