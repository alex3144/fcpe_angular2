import { Component, OnInit } from '@angular/core';
import {Etablissement} from '../../classes/etablissement'
import {EtablissementService} from '../../services/etablissement/etablissement.service'
import {Router} from '@angular/router'
import {NgxPaginationModule} from 'ngx-pagination';
import { CompleterService, CompleterData } from 'ng2-completer';
import { FilterByPipe } from '../../filtres/filter.pipe';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {



	protected searchStr: string = ""
	protected dataService: CompleterData;


	public collection: any[] = [];
	public Etablissement = {
	   nom: "",
     academie: "",
     ville: "",
     numrue: "",
     nomrue : "",
     cp: "",
     departement : "",
     typeetablissement : ""
	};
	public p: number = 1;

	constructor (public completerService: CompleterService, public EtablissementService: EtablissementService, private router: Router,) {
	  // this.etablissements.push(new Etablissement(1, "IMIE", "Nantes, France", "LOIRE ATLANTIQUE"));
	  // this.etablissements.push(new Etablissement(2, "ENI", "Nantes, France", "LOIRE ATLANTIQUE"));
	  console.log(this.collection);
	  this.dataService = completerService.local(this.collection, 'nom', 'nom');
	};
	/**
	 * Adds a new etablissement
	 */
	public getAllEtablissement() {
	  this.EtablissementService.getEtablissements().subscribe(etabs => 
	    etabs.forEach(etab => {
	     this.collection.push(new Etablissement(etab.id, etab.nom, etab.academie, etab.ville, etab.numrue,
			  etab.nomrue, etab.cp, etab.departement, etab.typeetablissement));
	    }
	    )
	  );
	}

	public filterItem

	public addEtablissement(){
      this.router.navigate(['/etablissements/create'])
    }

   	public goEtablissement(etablissementid){
   	  console.log(etablissementid);
      this.router.navigate(['/etablissements/', etablissementid])
    }

	 ngOnInit() {
	  console.log('init')
	  this.getAllEtablissement();
	}
}
