let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío."

function mensaje(){
    console.log("El boton fue clicado");
}

function preguntarCiudad(){
    ciudad = prompt(alert("Ingresa una ciudad de Brasil: "))
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function mensajeAlert(){
    alert("Yo amo JS");
}

function mensajeSuma(){
    primerNumero = parseInt(prompt(alert("Ingresa el primer número")));
    segundoNumero = parseInt(prompt(alert("Ingresa el segundo número")));
    suma = primerNumero+segundoNumero;
    alert(`La suma de los números ingresados es: ${suma}`);
}