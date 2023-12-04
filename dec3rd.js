/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/
function findNaughtyStep(original, modified) {
  let originalArr = original.split("");
  let modifiedArr = modified.split("");
  let maxLength = Math.max(originalArr.length, modifiedArr.length);

  for (let i = 0; i < maxLength; i++) {
    if (originalArr[i] !== modifiedArr[i]) {
      return originalArr.length > modifiedArr.length
        ? originalArr[i]
        : modifiedArr[i];
    }
  }

  return "";
}
