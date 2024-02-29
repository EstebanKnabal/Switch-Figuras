var lado, base, altura, radio, opcion,resultado;
const PI = 3.1416;
opcion = parseInt (prompt("Que figura desea calcular? \n1. Cuadrado \n2. Triangulo \n3. Circulo"));

switch (opcion){
    case 1:
    lado = parseInt(prompt("Ingrese el lado del cuadrado"));
             resultado = lado * lado

                alert ("El area del cuadrado es " + resultado + " Centimetros cuadrados.");
        
        break;

    case 2:
        base = parseInt (prompt("Ingrese la base del triangulo"));
        altura = parseInt (prompt("Ingrese la altura del triangulo"));
            resultado = (base * altura) / 2;
                alert ("El area del triangulo es " + resultado + " Centimetros cuadrados.");

        break;

    
    case 3:
        radio = parseInt (prompt("Ingrese el radio del circulo"));
             resultado = (radio * radio * PI);
                alert ("El radio del circulo es " + resultado + " Centimetros cuadrados.");

        break;

    case 4:
        alert ("Opcion no valida");


    
}