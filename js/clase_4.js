

// declaramos las variables

// let car = "Fiat";

const carro = {
	marca:"Fiat",
	modelo: "500",
	color: "blanco"
}

console.log(carro);

const persona = {
	nombre: "Edwar",
	apellido:"Vilchez",
	edad: 43,
	colorOjos: "Marrones",
	profesion: "Ingeniero en Informática",
	fullName: function(){
		return this.nombre + " " + this.apellido + " " + this.edad;
	}
};

/*console.log(
			persona.nombre, 
			persona.apellido,
			persona.profesion,
			carro
			);*/
console.log(persona);

nombre = persona.fullName();

console.log(nombre);





// JavaScript Object Notation (JSON)




// alert("It works");