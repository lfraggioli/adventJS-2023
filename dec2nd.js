/*
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

*/

function manufacture(gifts, materials) {
  function canManufacture(gift, materials) {
    for (let char of gift) {
      if (!materials.includes(char)) {
        return false;
      }
    }
    return true;
  }
  return gifts.filter((gift) => canManufacture(gift, materials));
}
