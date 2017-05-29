import {Response, Http,  RequestOptions,   Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { URLSearchParams } from "@angular/http"

@Injectable()
export class QuestionService {

  private headers: Headers;
  private option: RequestOptions;

  /**
   * Creates an instance of QuestionService.
   * @param {Http} http 
   * 
   * @memberOf QuestionService
   */
  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type':'application/json'});
    this.option = new RequestOptions({headers: this.headers});
   }

   private url = 'http://localhost:8080/api/questions';
   
   /**
    * 
    * 
    * @returns 
    * 
    * @memberOf QuestionService
    */
   getQuestions(){
     return this.http.get(this.url)
                     .map((res: Response) => res.json)
                     ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   /**
    * 
    * 
    * @param {any} id 
    * @returns 
    * 
    * @memberOf QuestionService
    */
   getQuestion(id){
     return this.http.get(this.url + '/' + id)
                     .map((res: Response) => res.json)
                     ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   private urlPost = 'http://localhost:8080/api/questions/create';

   /**
    * 
    * 
    * @param {any} body 
    * @returns 
    * 
    * @memberOf QuestionService
    */
   addQuestion(body){
     return this.http
	  .post(this.urlPost, JSON.stringify(body), this.option)
	  .map( res => res.json() );
   }

}
