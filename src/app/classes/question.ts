
export class Question {

    private id: number;
    private libelle: string;
    private generique: boolean;
    private type: string;
    private choix1: string;
    private choix2: string;
    private choix3: string;
    private choix4: string;
    private aide: string;
    private actif: boolean;
    
    constructor(id: number, libelle: string, 
                 generique: boolean, type: string, 
                 choix1: string, choix2: string, choix3: string,
                 choix4: string, aide: string, actif: boolean){
                     this.id = id;
                     this.libelle = libelle;
                     this.generique = false;
                     this.type = type;
                     this.choix1 = null;
                     this.choix2 = null;
                     this.choix3 = null;
                     this.choix4 = null;
                     this.aide = aide;
                     this.actif = false;
                 }
  public get $id(): number {
		return this.id;
	}

	public set $id(value: number) {
		this.id = value;
	}
  

	public get $libelle(): string {
		return this.libelle;
	}

	public set $libelle(value: string) {
		this.libelle = value;
	}


	public get $generique(): boolean {
		return this.generique;
	}

	public set $generique(value: boolean) {
		this.generique = value;
	}

    public get $type(): string {
		return this.type;
	}

	public set $type(value: string) {
		this.type = value;
	}


	public get $choix1(): string {
		return this.choix1;
	}

	public set $choix1(value: string) {
		this.choix1 = value;
	}
    

	public get $choix2(): string {
		return this.choix2;
	}

	public set $choix2(value: string) {
		this.choix2 = value;
	}
    

	public get $choix3(): string {
		return this.choix3;
	}

	public set $choix3(value: string) {
		this.choix3 = value;
	}
    

	public get $choix4(): string {
		return this.choix4;
	}

	public set $choix4(value: string) {
		this.choix4 = value;
	}
    
	public get $aide(): string {
		return this.aide;
	}

	public set $aide(value: string) {
		this.aide = value;
	}


	public get $actif(): boolean {
		return this.actif;
	}

	public set $actif(value: boolean) {
		this.actif = value;
	}
    
    
    
  

    
}
