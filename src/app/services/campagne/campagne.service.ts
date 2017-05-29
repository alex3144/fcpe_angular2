import {Response, Headers,  Http,   RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class CampagneService {

  private headers: Headers;
  private option: RequestOptions;

  
  /**
   * Creates an instance of QuestionnaireService.
   * @param {Http} http 
   * 
   * @memberOf QuestionnaireService
   */
  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type':'application/json'});
    this.option = new RequestOptions({headers: this.headers});
   }

   private urlGet = 'http://localhost:8080/api/campagnes';
   
   /**
    * 
    * 
    * @returns 
    * 
    * @memberOf QuestionService
    */
   getCampagnes(){
       return this.http.get(this.urlGet)
                     .map((res: Response) => res.json)
                     ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   
   getCampagne(id){
     return this.http.get(this.urlGet + '/' + id)
                     .map((res: Response) => res.json)
                     ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   private urlPost = 'http://localhost:8080/api/campagnes/create';

   /**
    * 
    * 
    * @param {any} body 
    * @returns 
    * 
    * @memberOf QuestionnaireService
    */
   addCampagne(body){
     return this.http
	  .post(this.urlPost, JSON.stringify(body), this.option)
	  .map( res => res.json() );
   }

}
