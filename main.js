import FechaNacimiento from "./fecha-nacimiento.js";
import Nombre from "./nombre.js";
import Persona from "./persona.js";
import Estudiante from "./estudiante.js";
import Maestro from "./maestro.js";
import Programa from "./programa.js";
class Main{
    constructor(){
        this.fecha = new FechaNacimiento(25,2,2005);
        this.nombre= new Nombre("Elmo","Torista","Diaz");
        this._e1=new Estudiante(this.nombre,this.fecha,"Macho",20166640,2,"H");
        this._e3=new Estudiante(this.nombre,this.fecha,"Macho",20166640,2,"H");
        this._e2=new Estudiante(this.nombre,this.fecha,"Macho",20166642,2,"H");
        this._m1 = new Maestro(this.nombre,this.fecha,"Macho",112233,"Por horas",28000);
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
    testPersona(){
        var persona1 = new Persona(this.nombre,this.fecha,"Macho");
        console.log(persona1.getPerfil());
    }
    testEstudiante(){
        console.log(this._e1.getPerfil());
    }
    testMaestro(){
        console.log(this._m1.getPerfil());
    }
    testPrograma(){
        var p = new Programa("Ing. de software");
        console.log(p.registrar(this._e1));
        console.log(p.registrar(this._e2));
        console.log(p.registrar(this._e3));
        p.registrar(this._e1);
        p.registrar(this._e2);
        p.registrar(this._e3);
        console.log(p.buscar(this._e1));
        console.log(p.buscar(this._e2));
        p.printEstudiantes();
    }
}
var app = new Main();
/*
app.testFecha();
app.testNombre();
app.testPersona();
app.testEstudiante();
app.testMaestro();
*/
app.testPrograma();