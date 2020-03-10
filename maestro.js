import Persona from "./persona.js";
import FechaNacimiento from "./fecha-nacimiento.js";
export default class Maestro extends Persona{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {FechaNacimiento} fechaNacimiento 
     * @param {string} genero 
     * @param {number} numTrabajador 
     * @param {String} tipoContrato 
     * @param {Number} sueldo 
     */
    constructor(nombre,fechaNacimiento,genero,numTrabajador,tipoContrato,sueldo){
        super(nombre,fechaNacimiento,genero);
        this._numTrabajador= numTrabajador;
        this._tipoContrato = tipoContrato;
        this._sueldo = sueldo;
    }
    getPerfil(){
        return `${this._numTrabajador}, ${this._tipoContrato},${this._sueldo}, ${this._genero}, ${this._fechaNacimiento.getFormatoCorto()},${this._nombre.getCompleto()}`
    }
}