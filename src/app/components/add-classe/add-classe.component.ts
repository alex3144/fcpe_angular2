import {Etablissement} from '../../classes/etablissement';
import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClasseService } from "app/services/classe/classe.service";
import { Classe } from "app/classes/classe";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";


@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {
  
  public clsses = [];
  public idnumber: number;
  public Clsse = {
   nom: "",
   nomDel: "",
   nomPrin: "",
   niv: "",
   serie: ""
 
  }

  etabs: Observable<Etablissement[]> 
  private searchTerms = new Subject<string>();
  public etab: Etablissement;
  public affichage: boolean = false;

  constructor(public classeService: ClasseService, private router: Router) { }
  
  /**
   * addClasse
   */
  public addClasse() {
    if (this.Clsse.nom != "" && this.Clsse.nomDel!= ""  && this.Clsse.nomDel!= "" 
     && this.Clsse.niv!= ""  && this.Clsse.serie!= "") {
      this.classeService.getClasses().subscribe(clas => this.idnumber = clas.length);
      
      let cls = new Classe(this.idnumber, this.Clsse.nom, this.Clsse.nomDel,this.Clsse.nomPrin, this.Clsse.niv, this.Clsse.serie);
      
      this.classeService.addClasse(cls).subscribe((classe) => {
        this.router.navigate(['/classes'])
      });
  }
};

  /**
   * retourClas
   */
  public retourClas() {
    this.router.navigate(['/classes']);
  }

  ngOnInit() {
    this.classeService.getClasses().subscribe(classes => this.clsses = classes);
    
    this.etabs = this.searchTerms.debounceTime(300)
                                 .distinctUntilChanged()
                                 .switchMap(term => term ?
                                 this.classeService.getEtabClass(term)
                                 : Observable.of<Etablissement[]>([]))
                                 ._catch(error => {
                                   console.log(error);
                                 return Observable.of<Etablissement[]>([]);
                                 });
  }

  //chercher un etablissement

  search(term: string): void{
    this.searchTerms.next(term);
  }

  afficher(etab: Etablissement): void{
     this.etab = etab;
     this.affichage = true;
  }

}
