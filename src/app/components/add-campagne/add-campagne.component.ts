import {Campagne} from '../../classes/campagne';
import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CampagneService } from "app/services/campagne/campagne.service";

@Component({
  selector: 'app-add-campagne',
  templateUrl: './add-campagne.component.html',
  styleUrls: ['./add-campagne.component.css']
})
export class AddCampagneComponent implements OnInit {
  
  public cgneAdd: string = "";
  public cgnes = [];

  public campagnes = [];
  public id: number;
  public Campagne = {
        nom: '',
        dateFin: new Date,
        nomCC: '',
        trimCC: '',
        dateCC: new Date
  }
  constructor(public campagneService: CampagneService, private router: Router) { }
  
  public AddCampagne(){
    if(this.Campagne.nom != '' &&  this.Campagne.nomCC != ''
      && this.Campagne.trimCC != ''){
        this.campagneService.getCampagnes().subscribe(cgnes => this.id = cgnes.length);
        let cgne = new Campagne(this.id, this.Campagne.nom, this.Campagne.dateFin, this.Campagne.nomCC,
                                this.Campagne.trimCC, this.Campagne.dateCC);
        this.campagneService.addCampagne(cgne).subscribe((cgne) =>
        { this.router.navigate(['/campagnes'])
      });
      }
  }

  /**
   * campAdd2
   */
  public campAdd2(cgneAdd) {

    if (cgneAdd != '') {
      this.cgneAdd = cgneAdd;
      this.cgnes.push(cgneAdd);
      this.cgneAdd = '';
    }
    
  }

  /**
   * voirForm
   */
  public voirForm() {
    this.router.navigate(['formulaire']);
  }

  public retourCgne(){
    this.router.navigate(['/campagnes']);
  }
  ngOnInit() {
  }

}
