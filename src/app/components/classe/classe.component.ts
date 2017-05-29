import { Router } from '@angular/router';
import { CompleterService, CompleterData } from 'ng2-completer';
import { Component, OnInit } from '@angular/core';
import { ClasseService } from "app/services/classe/classe.service";
import { Classe } from "app/classes/classe";

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {


  protected searchStr: string = "";
  protected dataService: CompleterData;
  public collection: any[] = [];

  public clsse = {
    nom: "",
    nomDel: "",
    nomPrin: "",
    niv: "",
    serie: ""
  }

  public p: number = 1;

  constructor(public completerService: CompleterService, public classeService: ClasseService, private router: Router) {
    this.dataService = completerService.local(this.collection, 'nom', 'nom');
  }

  public getAllClasse() {
    this.classeService.getClasses().subscribe(cls =>
      cls.forEach(element => {
        this.collection.push(new Classe(element.id, element.nom, element.nomDel, element.nomPrin, element.niv, element.serie))
      }
      )
    );
  }; 

  public addClass() {
    this.router.navigate(['/classes/create']);
  }

  public getClasse(id) {
    this.router.navigate(['/classes/', id]);
  }

  ngOnInit() {
  }

}
