/**
 * The contact class
 * This is a bean like class
 *
 * It only contains :
 *  - private attributs
 *  - default contructor
 *  - getters and setters
 */
export class Etablissement {

    private id: number;
    private nom: string;
    private academie: string;
    private ville: string;
    private numrue :string;
    private nomrue : string;
    private cp: string;
    private departement : string;
    private typeetablissement : string;
    

	constructor($id: number, $nom: string, $academie: string, $ville: string, $numrue: string, $nomrue: string, $cp: string, $departement: string, $typeetablissement: string) {
		this.id = $id;
		this.nom = $nom;
		this.academie = $academie;
		this.ville = $ville;
		this.numrue = $numrue;
		this.nomrue = $nomrue;
		this.cp = $cp;
		this.departement = $departement;
		this.typeetablissement = $typeetablissement;
	}
    
	public get $id(): number {
		return this.id;
	}

	public set $id(value: number) {
		this.id = value;
	}

	public get $nom(): string {
		return this.nom;
	}

	public set $nom(value: string) {
		this.nom = value;
	}

	public get $academie(): string {
		return this.academie;
	}

	public set $academie(value: string) {
		this.academie = value;
	}

	public get $ville(): string {
		return this.ville;
	}

	public set $ville(value: string) {
		this.ville = value;
	}

	public get $numrue(): string {
		return this.numrue;
	}

	public set $numrue(value: string) {
		this.numrue = value;
	}

	public get $cp(): string {
		return this.cp;
	}

	public set $cp(value: string) {
		this.cp = value;
	}

	public get $nomrue(): string {
		return this.nomrue;
	}

	public set $nomrue(value: string) {
		this.nomrue = value;
	}

	public get $departement(): string {
		return this.departement;
	}

	public set $departement(value: string) {
		this.departement = value;
	}

	public get $typeetablissement(): string {
		return this.typeetablissement;
	}

	public set $typeetablissement(value: string) {
		this.typeetablissement = value;
	}
    
}
