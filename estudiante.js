import Persona from "./persona.js";
export default class Estudiante extends Persona{
    /**
     * 
     * @param {*} numeroCuenta 
     * @param {*} semestre 
     * @param {*} grupo 
     */
    constructor(nombre,fechaNacimiento,genero,numeroCuenta,semestre,grupo){
        super(nombre,fechaNacimiento,genero);
        this._numeroCuenta = numeroCuenta;
        this._semestre= semestre;
        this._grupo= grupo;
    }
    getNumCuenta(){
        return this._numeroCuenta;
    }
    getPerfil(){
        return `${this._numeroCuenta}, ${this._semestre}${this._grupo}, ${this._genero}, ${this._fechaNacimiento.getFormatoCorto()},${this._nombre.getCompleto()}`
    }
    esIgualA(estudiante){
        if (estudiante.getNumCuenta===this._numeroCuenta){
            return true;
        }
        return false;
    }
}