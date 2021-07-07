// agregamos las funcionalidades

// esta clase permitirá crear la lista de tareas y convertirlas en un archivo JSON, para poder 
// utilizar el constructor y la propiedad localStorage del navegador
class ListaTareas{
	constructor(){
		this.tareas = JSON.parse(localStorage.getItem('tareas'));

		// ciclo que permite comprobar que la variable tasks tiene datos o no
		if(!this.tareas){
			this.tareas = [
				{ tarea: 'Aprender Javascript', completado: false },
				{ tarea: 'Aprender Python', completado: false },
				{ tarea: 'Aprender Java', completado: false },
			];
		}

		// instancia de clase que permite cargar y agregar tareas, cuando se presiona el botón
		this.cargarTareas();
		this.agregarEventListeners();		  
	}

// meotodos para manipular el DOM por eventos del raton
	agregarEventListeners(){
		document.getElementById('recordatorio')
		.addEventListener('keypress', (event) =>{
			if(event.keyCode == 13){
				this.agregarTarea(event.target.value);
				console.log(event);
				event.target.value = '';				
			}
		});
	}

	cargarTareas(){
		localStorage.setItem('tareas', JSON.stringify(this.tareas));
		let htmlTareas = this.tareas.reduce((html, tarea, indice) => html += this.generarHtmlTarea(tarea, indice), '');
		document.getElementById('ListaTareas'). innerHTML = htmlTareas;
	}

	generarHtmlTarea(){}

	agregarTarea(tarea){
		let padre = document.getElementById('recordatorio').parentElement;
		if(tarea !== ''){
			padre.classList.remove('has-error'); // al cumplir la condicion borramos el msj de error
			let nuevaTarea = {
			tarea,
			completado: false
			};
			this.tareas.push(nuevaTarea); // agregamos la tarea
			this.cargarTareas(); // cargamos las tareas
		}
		else{
			padre.classList.add('has-error'); // si esta vacio mostramos un msj de error
		}		
	}

	// este evento se dispara cuando el usuario presione el boton agregar
	agregarTareaClick(){
		let recordatorio = document.getElementById('recordatorio');
		let tarea = recordatorio.value;
		if(tarea){
			this.agregarTarea(tarea);
			recordatorio.value = '';
		}
	}
}

let ListaTareas;

window.addEventListener('load', () =>{
	ListaTareas = new ListaTareas();
});