export class Campagne {

    private id: number;
    private nom: string;
    private dateFin: Date;
    private nomCC: string;
    private trimCC: string;
    private dateCC: Date;
    private url: string;

    constructor(id: number, nom: string, dateFin: Date, nomCC: string, trimCC: string, dateCC: Date){
        this.id = id;
        this.nom = nom;
        this.dateFin = dateFin;
        this.nomCC = nomCC;
        this.trimCC = trimCC;
        this.dateCC = dateCC;
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
    

	public get $dateFin(): Date {
		return this.dateFin;
	}

	public set $dateFin(value: Date) {
		this.dateFin = value;
	}
    

	public get $nomCC(): string {
		return this.nomCC;
	}

	public set $nomCC(value: string) {
		this.nomCC = value;
	}
    

	public get $trimCC(): string {
		return this.trimCC;
	}

	public set $trimCC(value: string) {
		this.trimCC = value;
	}
    

	public get $dateCC(): Date {
		return this.dateCC;
	}

	public set $dateCC(value: Date) {
		this.dateCC = value;
	}
    

	public get $url(): string {
		return this.url;
	}

	public set $url(value: string) {
		this.url = value;
	}
    

}
