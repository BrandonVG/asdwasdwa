const diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const diaMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
export default class FechaNacimiento {
    /**
     * 
     * @param {number} dia valor 1...31 
     * @param {number} mes valor 1...12
     * @param {number} año año de la fecha de nacimiento
     */
    constructor(dia, mes, año){
        this._fecha = new Date(año, mes - 1, dia);
        
        
        this.fecha2 = new Date();
    }
    getFecha(){
        return this._fecha
    }
    /**
     * Metodo de acceso de escritura para el atributo fecha
     * @param {Date} fecha fecha valor de la nueva fecha
     */
    setFecha(fecha){
        if (fecha < Date.now()){
        this._fecha=fecha;
        return true;
        }
        else{
            return false;
        }
        
    }
    getFormatoCorto(){
        let date = this._fecha.getDate();
        let month = this._fecha.getMonth() + 1;
        let year = this._fecha.getFullYear();
        return(`${date}/${month}/${year}`);
    }
    getFormatoExtendido(){
        let dia = diaSemana[this._fecha.getDay()];
        let numero = this._fecha.getDate();
        let mes = diaMes[this._fecha.getMonth()];
        let año = this._fecha.getFullYear();
        return(`${dia} ${numero} de ${mes} de ${año}`);
    }
    getEdad(){
        let edad = this.fecha2.getUTCFullYear() - this._fecha.getFullYear();
        return edad
        
    }    
}

