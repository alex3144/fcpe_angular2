/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { URLSearchParams } from "@angular/http"

// Import RxJs required methods

@Injectable()
export class EtablissementService {
     // Resolve HTTP using the constructor

    private headers: Headers;
    private options: RequestOptions;
    constructor(private http: Http) {
       this.headers = new Headers({'Content-Type': 'application/json'});
       this.options = new RequestOptions({headers: this.headers});
    }

     // private instance variable to hold base url
    private etablissementUrl = 'http://localhost:8080/api/etablissements'; 
    

    getEtablissements(){
	// ...using get request
        return this.http.get(this.etablissementUrl)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getEtablissement(etablissementId){
      console.log(this.etablissementUrl + '/' + etablissementId);
      return this.http.get(this.etablissementUrl + '/' + etablissementId)
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}

