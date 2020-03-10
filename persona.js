

export default class Persona{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {FechaNacimiento} fechaNacimiento 
     * @param {string} genero 
     */
    constructor(nombre,fechaNacimiento,genero){
        this._nombre= nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._genero=genero;
    }
    getNombre(){
        return nombre;
    }
    getGenero(){
        return genero;
    }
    setFechaNacimiento(fechaNacimiento){
        this._fechaNacimiento=fechaNacimiento;
    }
    setGenero(genero){
        this._genero=genero;
    }
    getPerfil(){
        return `${this._genero} ${this._fechaNacimiento.getFormatoCorto()} ${this._nombre.getCompleto()}`;
    }
}