import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { URLSearchParams } from "@angular/http"

@Injectable()
export class AddEtablissementService {
    private headers: Headers;
    private options: RequestOptions;
	constructor(private http: Http) {
       this.headers = new Headers({'Content-Type': 'application/json'});
       this.options = new RequestOptions({headers: this.headers});
    }
	private etablissementPostUrl = 'http://localhost:8080/api/etablissements/create';
	// Add a new comment
	addEtablissement (body) {
	   return this.http
	  .post(this.etablissementPostUrl, JSON.stringify(body), this.options)
	  .map( res => res.json() );
	}

}
