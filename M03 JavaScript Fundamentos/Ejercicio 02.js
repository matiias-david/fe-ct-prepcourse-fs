/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
} 
devolverString("Hola");

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultado = x + y;
   return resultado;
}
suma(1, 2)

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resultado = x - y;
   return resultado;
}
resta(1, 2)

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   resultado = x / y;
   return resultado;
}
divide(2, 2)

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   resultado = x * y;
   return resultado;
}
multiplica(1, 1)

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   resultado = x % y;
   return resultado;
} 
obtenerResto(2, 2);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
