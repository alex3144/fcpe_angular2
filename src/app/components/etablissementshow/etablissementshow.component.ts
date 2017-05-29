import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {EtablissementService} from '../../services/etablissement/etablissement.service'
import {Etablissement} from '../../classes/etablissement'

@Component({
  selector: 'app-etablissementshow',
  templateUrl: './etablissementshow.component.html',
  styleUrls: ['./etablissementshow.component.css']
})
export class EtablissementshowComponent implements OnInit {

	public etablissement = {
		nom: '',
		academie:'',
		ville: ' '
	}
  	constructor(  private route: ActivatedRoute,
  	private router: Router, private EtablissementService: EtablissementService) { }


  	public getEtablissement (){
  		this.route.params
	  	 	// (+) converts string 'id' to a number
	  	 	.switchMap((params: Params) => this.EtablissementService.getEtablissement(+params['id']))
	  	 	.subscribe((Etablissement: Etablissement) => {
	  	 		this.etablissement.nom = Etablissement.$nom;
	  	 		this.etablissement.academie = Etablissement.$academie;
	  	 		this.etablissement.ville = Etablissement.$ville;
	  	 	})
  	}

  	ngOnInit() {
  		console.log("in init")
  		this.getEtablissement ();
	}

}
