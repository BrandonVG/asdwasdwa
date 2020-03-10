export default class Programa{
    constructor(nombre){
        this._nombre= nombre;
        this._estudiantes=[];
    }
    registrar(estudiante){
        if(this.buscar(estudiante)===null){
            this._estudiantes.push(estudiante);
            return true;
        }
        return false;
    }
    buscar(estudiante){
        var resultado= null;
        this._estudiantes.forEach(estu=>{
            if (estu=== estudiante){
                resultado = estu;
            }
        });
        return resultado;
    }
    printEstudiantes(){
        this._estudiantes.forEach((estudiante,i)=>{
            console.log(`${i+1} ${estudiante.getPerfil()}`);
        });
    }

}