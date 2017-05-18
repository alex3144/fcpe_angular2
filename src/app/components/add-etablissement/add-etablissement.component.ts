import { Component, OnInit } from '@angular/core';
import {AddEtablissementService} from '../../services/etablissement/add-etablissement.service'
import {Etablissement} from '../../classes/etablissement'
import {EtablissementService} from '../../services/etablissement/etablissement.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-etablissement',
  templateUrl: './add-etablissement.component.html',
  styleUrls: ['./add-etablissement.component.css']
})
export class AddEtablissementComponent implements OnInit {

	public etablissements = [];
	public id;
	public Etablissement = {
	  nom: "",
	  ville: "",
	  academie: ""
	};
  	constructor(public EtablissementService: EtablissementService , public AddEtablissementService: AddEtablissementService, private router: Router) { }


  	public addEtablissement(){
	  // add, only if data are OK !
	   console.log("add etab");
	   console.log(Etablissement)
	  if ( this.Etablissement.nom != "" && this.Etablissement.ville != "" && this.Etablissement.academie != ""){
	  this.EtablissementService.getEtablissements().subscribe(etabs => 
	  		this.id = etabs.length
	  	);
	    let etab = new Etablissement(this.id, this.Etablissement.nom,  this.Etablissement.ville,  this.Etablissement.academie);
	    console.log(etab)
	    this.AddEtablissementService.addEtablissement(etab).subscribe((etab) => {
	      // Add the contact in the contacts list
	      console.log(etab)
	      this.router.navigate(['/etablissements'])
	    });    
	  }
	};

  ngOnInit() {
  }

}
