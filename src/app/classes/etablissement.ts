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

    public id: number;
    public nom: string;
    public academie;
    public ville: string;
    public numrue :string;
    public nomrue : string;
    public cp: number;
    public departement : string;
    public typeetablissement : string;
    

    /**
     * Default constructor
     */

    constructor(id: number, nom: string, ville: string, academie) {
        this.id = id;
        this.nom = nom;
        this.ville = ville;
        this.academie = academie;
    }


    getid(): number {
        return this.id;
    }

    getnom(): string {
        return this.nom;
    }

    getville(): string {
        return this.ville;
    }

    getacademie() {
        return this.academie;
    }


    setid(value: number) {
        this.id = value;
    }

    setnom(value: string) {
        this.nom = value;
    }

    setville(value: string) {
        this.ville = value;
    }

    setacademie(value) {
        this.academie = value;
    }
}
