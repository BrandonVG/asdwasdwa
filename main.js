import FechaNacimiento from "./fecha-nacimiento.js";
import Nombre from "./nombre.js";
class Main{
    constructor(){
        this.fecha = new FechaNacimiento(25,2,2005);
        this.nombre= new Nombre("Elmo","Torista","Diaz");
    }
    //Metodo de acceso de lectura para el atributo fecha
    testFecha(){
        console.log(this.fecha);
        console.log(this.fecha.fecha);
        console.log(this.fecha.setFecha(new Date(2007,4,20)));
        console.log(this.fecha.getFormatoCorto());
        console.log(this.fecha.getFormatoExtendido());
        console.log(this.fecha.setFecha(new Date(2027,4,20)));
        console.log(this.fecha.getEdad());
    }
    testNombre(){
        console.log(this.nombre.getCompleto());
        console.log(this.nombre.getNombre());
        this.nombre.setApellidoPaterno("Rodriguez");
        console.log(this.nombre.getCompleto());
        this.nombre.setApellidoMaterno("Juarez");
        console.log(this.nombre.getApellidoMaterno());
        console.log(this.nombre.getCompleto());
    }
}
let app = new Main();
app.testFecha();
app.testNombre();