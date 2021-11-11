

class Persona {

    //PROPIEDADES
    nombre: string;
    edad: number;

    //CONSTRUCTOR
    constructor(nombre: string, edad:number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //METODOS
    
    quienSoy():string {
        return `Yo soy ${this.nombre} y mi edad es ${this.edad}`
    }

}



class Cliente extends Persona{

    empresa: string;

    constructor(nombre:string, edad:number, empresa:string  ) {
        super(nombre,edad);
        this.empresa = empresa;
    }

    describirse():string {
        return this.quienSoy() + ` y soy de la empresa ${this.empresa}`
    }
}

class Proveedor extends Persona {

    constructor(nombre:string, edad:number) {
        super(nombre, edad)
    }

    presentar():string{
        return `Soy un Proveedor y ${this.quienSoy()}`
    }
}


const cliente1 = new Cliente('Andres',29,'NTT DATA')

console.info(cliente1.describirse())
console.info(cliente1.empresa)


const proveedor1 = new Proveedor('EDEMSA',50)
console.info(proveedor1.presentar())



