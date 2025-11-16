// =============================================
//                 CLASE BANCO
// =============================================

class Banco {

    // (6) Nombre del banco
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = {};   // Objeto para guardar cuentas y sus saldos
    }

    // Validación del código de cuenta
    validarCodigo(codigo) {

        // Debe ser string
        if (typeof codigo !== "string") return false;

        // Exactamente 6 dígitos numéricos
        if (!/^\d{6}$/.test(codigo)) return false;

        // Convertimos a número (para comprobar rango)
        let num = Number(codigo);

        // Entre 000001 y 599999
        return num >= 1 && num <= 599999;
    }

    // (7) Crear cuenta
    crearCuenta(codigo, saldo = 0) {

        if (!this.validarCodigo(codigo)) {
            console.error(`Error: El código ${codigo} no es válido. Debe ser un número de 6 dígitos entre 000001 y 599999.`);
            return;
        }

        if (codigo in this.cuentas) {
            console.error(`Error: La cuenta ${codigo} ya existe.`);
            return;
        }

        this.cuentas[codigo] = saldo;
        console.log(`Cuenta ${codigo} creada con saldo ${saldo} €`);
    }

    // (8) Actualizar cuenta (ingreso o retirada)
    actualizarCuenta(codigo, cantidad) {

        if (!(codigo in this.cuentas)) {
            console.error(`Error: La cuenta ${codigo} no existe.`);
            return;
        }

        this.cuentas[codigo] += cantidad;
        console.log(`Cuenta ${codigo} actualizada. Movimiento: ${cantidad} €. Nuevo saldo: ${this.cuentas[codigo]} €`);
    }

    // (9) Eliminar cuenta
    eliminarCuenta(codigo) {

        if (!(codigo in this.cuentas)) {
            console.error(`Error: La cuenta ${codigo} no existe.`);
            return;
        }

        if (this.cuentas[codigo] !== 0) {
            console.error(`Error: La cuenta ${codigo} tiene saldo ${this.cuentas[codigo]} €. Solo se pueden eliminar cuentas con saldo 0.`);
            return;
        }

        delete this.cuentas[codigo];
        console.log(`Cuenta ${codigo} eliminada correctamente.`);
    }

    // (10) Listar cuentas en el documento
    listarCuentas() {
        let salida = `<h1>${this.nombre}</h1><hr>`;

        for (let codigo of Object.keys(this.cuentas)) {
            salida += `<p><strong>${codigo}</strong> - ${this.cuentas[codigo]} €</p>`;
        }

        document.getElementById("resultado2").innerHTML = salida;

        console.log("Listado de cuentas:", this.cuentas);
    }
}

// =============================================
//         DEMOSTRACIÓN EN NAVEGADOR
// =============================================

window.onload = () => {

    const banco = new Banco("BancoJulia");

    // Crear 3 cuentas
    banco.crearCuenta("111111", 55);
    banco.crearCuenta("222222", 0);        
    banco.crearCuenta("333333", 66);

    // Actualizar una cuenta
    banco.actualizarCuenta("111111", 20);

    // Eliminar SOLO la 33333 (fallará porque tiene saldo)
    banco.eliminarCuenta("333333");
    //banco.eliminarCuenta("222222");  // Esta sí se eliminará

    // Listado final
    banco.listarCuentas();
};
