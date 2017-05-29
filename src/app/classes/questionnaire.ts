export class Questionnaire {

    private id: number;
    private nom: string;
    private generique: boolean;
    private actif: boolean;
    
    constructor(id: number, nom: string, generique: boolean, actif: boolean){
        this.id = id;
        this.nom = nom;
        this.generique = false;
        this.actif = false;
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
    

	public get $generique(): boolean {
		return this.generique;
	}

	public set $generique(value: boolean) {
		this.generique = value;
	}
    

	public get $actif(): boolean {
		return this.actif;
	}

	public set $actif(value: boolean) {
		this.actif = value;
	}
    

    
}
