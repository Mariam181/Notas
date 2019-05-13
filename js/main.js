(function(){
	//Agregar nota
	let addForm = function() {
		document.getElementById("form").style.display = "block";
		let btnAdd = document.getElementById("add");
		btnAdd.disabled = true;
		document.getElementById("close").style.display = "block";
	}

	let addNote = document.getElementById("add");
	addNote.addEventListener("click", addForm);

	//Cerrar formulario
	let cerrar = function() {
		document.getElementById("form").style.display = "none";
		document.getElementById("close").style.display = "none";
		let btnAdd = document.getElementById("add");
		btnAdd.disabled = false;
	}

	let close = document.getElementById("close");
	close.addEventListener("click", cerrar);

	// Variables
	var lista = document.getElementById("lista"),
		notaInput = document.getElementById("notaInput"),
		btnNuevaNota = document.getElementById("btn-agregar");

	// Funciones
	var agregarNota = function(){
		var nota = notaInput.value,
			nuevaNota = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(nota);

		if (nota === "") {
			notaInput.setAttribute("placeholder", "Agrega una nota valida");
			notaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva nota (li)
		nuevaNota.appendChild(enlace);
		// Agregamos la nueva nota a la lista
		lista.appendChild(nuevaNota);

		notaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
		

	};
	var comprobarInput = function(){
		notaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu nota");
	};

	/*var eliminarNota = function(){
		this.parentNode.removeChild(this);
	};*/



	// Agregar Nota
	btnNuevaNota.addEventListener("click", agregarNota);

	// Comprobar Input
	notaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", agregarTexto);
	}

	//Crear texto
	var agregarTexto = function(){
		var textNote = document.getElementById("textNote");
			texto = textNote.value,
			nuevoTexto = document.createElement("p");
			contenidoTexto = document.createTextNode(texto);
			nuevoTexto.appendChild(nuevoTexto);
	}
}());