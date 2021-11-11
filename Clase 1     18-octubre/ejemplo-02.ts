

abstract class Guerrero {

    altura: number;
    nacionalidad: string;

    constructor(altura:number, nacionalidad:string){
        this.altura=altura;
        this.nacionalidad=nacionalidad;
    }

    describirse(){
        return `Tengo ${this.altura} metros de altura y mi nacionalidad es ${this.nacionalidad}`
    }

    abstract gritoDeGuerra(nombre:string):string

}



class Espadachin extends Guerrero {
    

    constructor(altura:number, nacionalidad:string){
        super(altura,nacionalidad)
    }


    gritoDeGuerra(nombre: string): string {
        return `Soy un guerro espadacchin y aataco con espada, bajo el nombre de ${nombre}`
    }
}


class Arquero extends Guerrero {

    constructor(altura:number, nacionalidad:string){
        super(altura,nacionalidad)
    }


    gritoDeGuerra(nombre: string): string {
        return `Soy unn arquero y ataco con mi arco, bajo el nombre de: ${nombre}`
    }

}




//POLIMORFISMO
const guerreros = [];

guerreros.push(new Espadachin(2,'Persa'))
guerreros.push(new Arquero(2, 'Azteca'))

for (const guerrero of guerreros) {
    console.info(guerrero.gritoDeGuerra('JULIO CESAR'))
}




