// Learning Full TypeScript

//Number
var numero:number = 2;
    // numero = true;       //Thats generates error

//Boolean    
var bool:boolean = true || false;
    // bool = "Hola"        //Thats generates error

//String
var text:string = "Hola";
    // text = 5;            //Thats generates error again

//any
var variable:any = "cualquiera";
variable = 2;
variable = ["Arreglo", "No","genera","Error","con","ANY"];  
variable = true;

//array
var arr: number[] = [1,2,3,4,5];
var arrtext:string[] = ["text1","text2","...","text n"];
var arrabool:boolean[] = [true,false];
var arrany:any[] = [1,5,true,false,"No Hay Lio y me corrige errores en la codificación"];

//tuple
var tupla:[string,number];
tupla = ["Hola",4];
    // tupla = [5,"hola"]  //Thats generates error

//void, undefined and null types
let myVoid:void = undefined;
let myUndefined: undefined = undefined;
let myNull: null = null;

//Functions
function getSum(num1:number,num2:number):number{
    return num1+num2;
}

let fun = function(var1: number | string,var2: number | string):number{
    if(typeof(var1) == "string"){
        var1 = parseInt(var1);
    }
    if(typeof(var2) == "string"){
        var2 = parseInt(var2);
    }
    return var1 + var2;
}

function getName(FirstName:string, LastName?:string):string{

    if(LastName == undefined){
        return FirstName;
    }

    return `${FirstName} ${LastName}`
}

function myVoidFunction():void{
    return;
}

function showToDo(todo: {title:string,description:string}){
    console.log(`${todo.title} - ${todo.description}`);
}

//Interfaces
interface Tareas{
    title: string;
    text: string;
    value: number;
}
    //implementation

    let MyTarea:Tareas = { title: "Comer", text:"Alimentación", value:5 } 

    function showTareas(tarea: Tareas){
        console.log(`${tarea.title} - ${tarea.text} - ${tarea.value}`);
    }

    showTareas(MyTarea);

//Clases
class UsuarioExample{

    //fields
    private _name: string;
    public age: number;
    protected email: string;
    
    //Encapsulamiento
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    //Constructor
    constructor(name?:string){
        if(name == undefined){
            console.log(`El usuario No tiene datos registrados.`);
        }
        else{
            this._name = name;
        }
    }

    //Métodos
    public register():void{
        console.log(`El usuario ${this._name} se debe registrar en la página web.`);
    }

    public ageInYears():string{
        return `${this.age} Años`
    }

    public payDebt(){
        console.log(`${this._name} Pagó la deuda`);
    }
}

var User = new UsuarioExample("Pedro");
User.register();
User.ageInYears();
console.log(User.register());

//Herencia OOP
class Member extends UsuarioExample{
    id : number;

    constructor(id, name, email, age){
        super(name);
        this.id = id;
    }

    payDebt(){
        super.payDebt;
        console.log(`And is member with ID: ${this.id}`)
    }
}

var Miembro = new Member(4,"juan","juan@gmail.com",21);
Miembro.payDebt();
