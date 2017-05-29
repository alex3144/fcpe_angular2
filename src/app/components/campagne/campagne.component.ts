import {Campagne} from '../../classes/campagne';
import {Router} from '@angular/router';
import {CompleterService, CompleterData} from 'ng2-completer';
import { Component, OnInit } from '@angular/core';
import { CampagneService } from "app/services/campagne/campagne.service";

@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.css']
})
export class CampagneComponent implements OnInit {

 protected searchStr: string = "";
  protected dataService: CompleterData;

  public collection: any[] = [];
  public Campagne = {
        nom: '',
        dateFin: new Date,
        nomCC: '',
        trimCC: '',
        dateCC: new Date
    
  }
  public p: number = 1;

  constructor(public completerService: CompleterService, public campagneService: CampagneService, private router: Router) {
    this.dataService = completerService.local(this.collection, 'nom', 'nom');
   }
  
  public getAllQuestionnaire(){
    this.campagneService.getCampagnes().subscribe(qtionaires =>
    qtionaires.forEach(element => {
      this.collection.push(new Campagne(element.id, element.nom, element.dateFin, element.nomCC,
      element.trimCC, element.dateCC
      ))
    })
    );
  }

  public addCampagne(){
    this.router.navigate(['/campagnes/create']);
  }

  public getCampagne(id){
    this.router.navigate(['/campagnes/', id]);
  }

  ngOnInit() {
  }

}
