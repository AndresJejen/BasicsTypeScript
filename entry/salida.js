var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var numero = 2;
var bool = true || false;
var text = "Hola";
var variable = "cualquiera";
variable = 2;
variable = ["Arreglo", "No", "genera", "Error", "con", "ANY"];
variable = true;
var arr = [1, 2, 3, 4, 5];
var arrtext = ["text1", "text2", "...", "text n"];
var arrabool = [true, false];
var arrany = [1, 5, true, false, "No Hay Lio y me corrige errores en la codificación"];
var tupla;
tupla = ["Hola", 4];
var myVoid = undefined;
var myUndefined = undefined;
var myNull = null;
function getSum(num1, num2) {
    return num1 + num2;
}
var fun = function (var1, var2) {
    if (typeof (var1) == "string") {
        var1 = parseInt(var1);
    }
    if (typeof (var2) == "string") {
        var2 = parseInt(var2);
    }
    return var1 + var2;
};
function getName(FirstName, LastName) {
    if (LastName == undefined) {
        return FirstName;
    }
    return FirstName + " " + LastName;
}
function myVoidFunction() {
    return;
}
function showToDo(todo) {
    console.log(todo.title + " - " + todo.description);
}
var MyTarea = { title: "Comer", text: "Alimentación", value: 5 };
function showTareas(tarea) {
    console.log(tarea.title + " - " + tarea.text + " - " + tarea.value);
}
showTareas(MyTarea);
var UsuarioExample = (function () {
    function UsuarioExample(name) {
        if (name == undefined) {
            console.log("El usuario No tiene datos registrados.");
        }
        else {
            this._name = name;
        }
    }
    Object.defineProperty(UsuarioExample.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioExample.prototype.register = function () {
        console.log("El usuario " + this._name + " se debe registrar en la p\u00E1gina web.");
    };
    UsuarioExample.prototype.ageInYears = function () {
        return this.age + " A\u00F1os";
    };
    UsuarioExample.prototype.payDebt = function () {
        console.log(this._name + " Pag\u00F3 la deuda");
    };
    return UsuarioExample;
}());
var User = new UsuarioExample("Pedro");
User.register();
User.ageInYears();
console.log(User.register());
var Member = (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payDebt = function () {
        _super.prototype.payDebt;
        console.log("And is member with ID: " + this.id);
    };
    return Member;
}(UsuarioExample));
var Miembro = new Member(4, "juan", "juan@gmail.com", 21);
Miembro.payDebt();
