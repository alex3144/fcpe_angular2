export class Classe {

    	
export class Classe {

    private id: number;
    private nom: string;
    private nomDel: string;;
    private nomPrin: string;
    private niv :string;
    private serie : string;
 
    constructor( $id: number, $nom: string, $nomDel: string, $nomPrin: string, $niv: string, $serie: string) {
		this.$id = $id;
		this.nom = $nom;
		this.nomDel = $nomDel;
		this.nomPrin = $nomPrin;
		this.niv = $niv;
		this.serie = $serie;

	}

    public get $id(): number {
		return this.id;
	}

	public set $id(value: number) {
		this.id = value;
	}


	public get $nomDel(): string {
		return this.nomDel;
	}

	public set $nomDel(value: string) {
		this.nomDel = value;
	}

	public get $nom(): string {
		return this.nom;
	}

	public set $nom(value: string) {
		this.nom = value;
	}

	public get $nomPrin(): string {
		return this.nomPrin;
	}

	public set $nomPrin(value: string) {
		this.nomPrin = value;
	}

	public get $niv(): string {
		return this.niv;
	}

	public set $niv(value: string) {
		this.niv = value;
	}

	public get $serie(): string {
		return this.serie;
	}

	public set $serie(value: string) {
		this.serie = value;
	}
    


   

}


