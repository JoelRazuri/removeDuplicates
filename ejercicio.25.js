/*
    Programa una función que dado un arreglo de elementos, elimine los duplicados, 
    pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

const removeDuplicates = (list = undefined) => {
    if (list === undefined) return console.warn("No ingresaste una lista");
    if (!(list instanceof Array)) return console.error("El valor que ingresaste no es una lista");
    if (list.length === 0) return console.error("La lista esta vacia");
    if (list.length === 1) return console.error("La lista debe tener al menos dos elementos");

    // return console.info({
    //     original: list,
    //     sinDuplicados: list.filter((value, index, self) => self.indexOf(value) === index)
    // });
    return console.info({
        original: list,
        sinDuplicados: [... new Set(list)]
    });
}

console.info("EJERCICIO 25");
removeDuplicates();
removeDuplicates(30);
removeDuplicates([]);
removeDuplicates([1]);
removeDuplicates([1, 2, 1, "x", true, 20, true]);