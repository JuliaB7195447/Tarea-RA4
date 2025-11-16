// ======================================================
//        OBTENER TIPOS ÚNICOS DEL ARRAY
// ======================================================

/*
 Devuelve un array con los tipos únicos existentes en "articulos".
 map() extrae solo el tipo de cada artículo.
 filter() elimina duplicados comparando índices.
*/
function obtenerTipos(articulos) {
    return articulos
        .map(a => a.tipo)       // solo los tipos
        .filter((t, i, self) => self.indexOf(t) === i); // únicos
}

/*
 Genera dinámicamente un <select> con los tipos disponibles.
 Se usa para evitar modificar el HTML si se añaden más artículos.
*/
function generarSelectTipos(idSelect) {
    let tipos = obtenerTipos(articulos);
    let html = `<select id="${idSelect}">`;

    tipos.forEach(t => {
        html += `<option value="${t}">${t}</option>`;
    });

    html += "</select>";
    return html;
}

// ======================================================
//            PANEL DINÁMICO DE OPCIONES
// ======================================================

const panel = document.getElementById("panelFunciones");

// Asignación de eventos a los botones del ejercicio 1
document.getElementById("btn1").onclick = () => mostrar(1);
document.getElementById("btn2").onclick = () => mostrar(2);
document.getElementById("btn3").onclick = () => mostrar(3);
document.getElementById("btn4").onclick = () => mostrar(4);
document.getElementById("btn5").onclick = () => mostrar(5);

/*
 Muestra el formulario correspondiente según el botón pulsado.
*/
function mostrar(num) {

    switch(num) {

        case 1:
            panel.innerHTML = `
                <h3>(1) Filtrar por tipo y precio máximo</h3>
                <p>Escribe una función que reciba como parámetro el array de artículos, un tipo de artículo (por ejemplo, "Electrónica") y un precio máximo. La función debe devolver un array con todos los artículos que pertenezcan a ese tipo y tengan un precio menor o igual al especificado.</p>
                <label>Tipo:</label> ${ generarSelectTipos("tipo1") } <br>
                <label>Precio máximo:</label><input id="precio1" type="number"><br>
                <button onclick="probar1()">Seleccionar</button>
                <pre id="resultado"></pre>`;
        break;

        case 2:
            panel.innerHTML = `
                <h3>(2) Normalizar descripciones</h3>
                <p>Escribe una función que reciba como parámetro el array de artículos y modifique las descripciones de los artículos para que todas las descripciones comiencen con mayúsculas y el resto de las letras estén en minúsculas. La función debe devolver el array modificado.</p> 
                <button onclick="probar2()">Aplicar</button>
                <pre id="resultado"></pre>`;
        break;

        case 3:
            panel.innerHTML = `
                <h3>(3) Buscar por descripción</h3>
                <p>Escribe una función que reciba como parámetro el array de artículos y una cadena. La función debe devolver un array con los artículos que tienen esa cadena en la descripción.</p>
                <label>Texto:</label><input id="cadena3" type="text"><br>
                <button onclick="probar3()">Buscar</button>
                <pre id="resultado"></pre>`;
        break;

        case 4:
            panel.innerHTML = `
                <h3>(4) Estadísticas por tipo</h3>
                <p>Escribe una función que recibe como parámetro el array y un tipo de artículo, y devuelve un objeto con dos atributos; cantidad y preciomedio. que contendrán la cantidad y el precio medio de los artículos de ese tipo.<br>
                        <br>
                    Ejemplo de parámetro: "Electrónica"<br>
                    Ejemplo de salida: { "cantidad": 8, "preciomedio": 113.74 }</p>
                <label>Tipo:</label> ${ generarSelectTipos("tipo4") } <br>
                <button onclick="probar4()">Calcular</button>
                <pre id="resultado"></pre>`;
        break;

        case 5:
            panel.innerHTML = `
                <h3>(5) Ordenar por precio</h3>
                <p>Escribe una función que reorganice el array de artículos según el precio, en orden ascendente o descendente (según un parámetro de entrada).</p>
                <label>Orden:</label>
                <select id="orden5">
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <button onclick="probar5()">Ordenar</button>
                <pre id="resultado"></pre>`;
        break;
    }
}

// ======================================================
//              FUNCIONES DEL EJERCICIO
// ======================================================

/*
 (1) Filtrar artículos por tipo y precio.
 filter() devuelve solo los que cumplan ambas condiciones.
*/
function filtrarPorTipoYPrecio(articulos, tipo, precioMax) {
    return articulos.filter(a => a.tipo === tipo && a.precio <= precioMax);
}


/*
 (2) Normalizar descripciones.
 map() devuelve un nuevo array con las descripciones corregidas.
*/
function normalizarDescripciones(articulos) {
    return articulos.map(a => {
        let desc = a.descripcion.toLowerCase();
        let nueva = desc.charAt(0).toUpperCase() + desc.slice(1);

        return { ...a, descripcion: nueva };
    });
}


/*
 (3) Buscar artículos que contengan un texto en la descripción.
*/
function buscarPorDescripcion(articulos, cadena) {
    cadena = cadena.toLowerCase();
    return articulos.filter(a =>
        a.descripcion.toLowerCase().includes(cadena)
    );
}


/*
 (4) Cantidad y precio medio usando filter() y reduce().
*/
function estadisticasPorTipo(articulos, tipo) {

    let filtrados = articulos.filter(a => a.tipo === tipo);

    let cantidad = filtrados.length;

    let suma = filtrados.reduce((acc, a) => acc + a.precio, 0);

    let preciomedio = cantidad > 0 ? suma / cantidad : 0;

    return { cantidad, preciomedio };
}


/*
 (5) Ordenar por precio (ascendente o descendente).
*/
function ordenarPorPrecio(articulos, orden) {
    return articulos.slice().sort((a, b) =>
        orden === "asc" ? a.precio - b.precio : b.precio - a.precio
    );
}

// ======================================================
//         PROBAR CADA FUNCIÓN (consola y pantalla)
// ======================================================

function probar1() {
    let tipo = document.getElementById("tipo1").value;
    let precio = Number(document.getElementById("precio1").value);

    let res = filtrarPorTipoYPrecio(articulos, tipo, precio);

    //Salida por consola
    console.log(`Función 1 → Filtrar por tipo y precio
        Tipo seleccionado: ${tipo}
        Precio máximo: ${precio}
        Resultado:
        `, res);

    alert("Función 1 ejecutada. Consulta la consola (F12).");

    //Salida adiccional por pantalla
    let txt = "";
    res.forEach(a => {
        txt += `${a.codigo} | ${a.descripcion} | ${a.precio}€\n`;
    });

    document.getElementById("resultado").textContent = txt || "Sin resultados";
}

function probar2() {
    let res = normalizarDescripciones(articulos);

    //Salida por consola
    console.log(`Función 2 → Normalizar descripciones
        Resultado:
        `, res);

    alert("Función 2 ejecutada. Consulta la consola (F12).");

    //Salida adiccional por pantalla
    let txt = "";
    res.forEach(a => {
        txt += `${a.descripcion}\n`;
    });

    document.getElementById("resultado").textContent = txt;
}

function probar3() {
    let cad = document.getElementById("cadena3").value;
    let res = buscarPorDescripcion(articulos, cad);

    //Salida por consola
    console.log(`Función 3 → Buscar por descripción
        Cadena buscada: "${cad}"
        Resultado:
        `, res);

    alert("Función 3 ejecutada. Consulta la consola (F12).");

    //Salida adiccional por pantalla
    let txt = "";
    res.forEach(a => {
        txt += `${a.codigo} | ${a.descripcion}\n`;
    });

    document.getElementById("resultado").textContent = txt || "Sin resultados";
}

function probar4() {
    let tipo = document.getElementById("tipo4").value;
    let res = estadisticasPorTipo(articulos, tipo);

    //Salida por consola
    console.log(`Función 4 → Estadísticas por tipo
        Tipo seleccionado: ${tipo}
        Resultado:
        `, res);

    alert("Función 4 ejecutada. Consulta la consola (F12).");

    //Salida adiccional por pantalla
    let txt = `Cantidad: ${res.cantidad}\nPrecio medio: ${res.preciomedio.toFixed(2)}`;

    document.getElementById("resultado").textContent = txt;
}

function probar5() {
    let orden = document.getElementById("orden5").value;
    let res = ordenarPorPrecio(articulos, orden);

    //Salida por consola
    console.log(`Función 5 → Orden: ${orden} 
        Resultado:`, res);

    alert("Función 5 ejecutada. Consulta la consola (F12).");

    //Salida adiccional por pantalla
    let txt = "";
    res.forEach(a => {
        txt += `${a.codigo} | ${a.descripcion} | ${a.precio}€\n`;
    });

    document.getElementById("resultado").textContent = txt;
}
