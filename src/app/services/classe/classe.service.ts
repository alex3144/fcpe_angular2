import {Etablissement} from '../../classes/etablissement';
import {Response, Http,  Headers,   RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClasseService {
  
  private headers: Headers;
  private option: RequestOptions;
  
  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type':'application/json'});
    this.option = new RequestOptions({headers: this.headers});
   }

   private url = 'http://localhost:8080/api/classes';

   getClasses(){
     return this.http.get(this.url)
                     .map((res: Response) => res.json)
                     ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
   
   getClasse(id){
     return this.http.get(this.url + '/' + id)
                     .map((res: Response) => res.json)
                     ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   private urlPost = 'http://localhost:8080/api/classes/create';

   addClasse(body){
     return this.http
	  .post(this.urlPost, JSON.stringify(body), this.option)
	  .map( res => res.json() );
   }

   private urlEtab = 'http://localhost:8080/api/etabliseements/?nom=';

    getEtabClass(term: string): Observable<Etablissement[]>{
     return this.http.get(this.urlEtab + '${term}')
                     .map((res: Response) => res.json().data as Observable<Etablissement[]>)
                     ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

}
