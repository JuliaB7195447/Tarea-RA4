Tarea para DWEC04.

Enunciado.
EJERCICIO 1. El archivo script.js contiene un array de objetos, añade al archivo la declaración de las siguientes funciones y al finalizar envía a consola una llamada a cada una de ellas para comprobar su funcionamiento, es decir console.log(funcion1(array,..))


(1) Escribe una función que reciba como parámetro el array de artículos, un tipo de artículo (por ejemplo, "Electrónica") y un precio máximo. La función debe devolver un array con todos los artículos que pertenezcan a ese tipo y tengan un precio menor o igual al especificado.


(2) Escribe una función que reciba como parámetro el array de artículos y modifique las descripciones de los artículos para que todas las descripciones comiencen con mayúsculas y el resto de las letras estén en minúsculas. La función debe devolver el array modificado.


(3) Escribe una función que reciba como parámetro el array de artículos y una cadena. La función debe devolver un array con los artículos que tienen esa cadena en la descripción. 


(4) Escribe una función que recibe como parámetro el array y un tipo de artículo, y devuelve un objeto con dos atributos; cantidad y preciomedio. que contendrán la cantidad y el precio medio de los artículos de ese tipo.


Ejemplo de parámetro: "Electrónica"
Ejemplo de salida: { "cantidad": 8, "preciomedio": 113.74 }


(5) Escribe una función que reorganice el array de artículos según el precio, en orden ascendente o descendente (según un parámetro de entrada).

EJERCICIO 2. Define una clase que permita crear objetos de tipo banco con las siguientes características:
(6) Un atributo nombre que pasaremos como parámetro al crear el objetos.(0.25 pto)

El objeto permitirá gestionar cuentas (de 6 dígitos del 000001 al 599999) y el saldo de las cuentas, para lo que utilizaremos los siguientes métodos:
(7) Crear cuenta: Recibe como parámetros el código de cuenta y el saldo inicial (por defecto tomará el valor 0 si no se pasa el parámetro). 
(8) Actualizar cuenta: Recibe como parámetros el código de cuenta y el ingreso (o extracción en negativo) y actualiza el saldo de la cuenta. Mostrará error si la cuenta no existe. 
(9) Eliminar cuenta: Recibe como parámetro el código de cuenta y la elimina. Mostrará error si la cuenta no existe o si no tiene saldo 0, indicando cada caso. 
(10) Listar cuentas: Escribe en el documento el nombre del banco y la lista de cuentas con sus saldos de forma similar a la mostrada en la imagen siguiente. 
Realiza 3 llamadas al método para crear cuentas, y una llamada a cada uno de los otros métodos para demostrar su funcionamiento..
