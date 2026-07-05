// ==========================================================================
// CONTROL DE ACCESO (PANTALLA DE ENTRADA)
// ==========================================================================
function ingresarAlSitio() {
    var bienvenido = document.getElementById("welcome-screen");
    var contenido = document.getElementById("main-content");

    // 1. Activamos el contenido de la página principal en segundo plano
    contenido.style.display = "block";

    // 2. Añadimos la clase CSS que arranca el desvanecimiento suave de la entrada
    bienvenido.classList.add("hidden");

    // 3. Después de que finaliza la transición (800ms), borramos la bienvenida del mapa
    setTimeout(function() {
        bienvenido.style.display = "none";
    }, 800);
}

// ==========================================================================
// SIMULADOR INTERACTIVO DE ECOLADRILLOS
// ==========================================================================
function calcularEcoladrillos() {
    // Obtenemos las botellas escritas por el estudiante
    var botellas = document.getElementById("inputBotellas").value;
    
    // Validación de seguridad para que no calculen números raros o vacíos
    if (botellas < 0 || botellas === "") {
        document.getElementById("resultadoSimulador").innerHTML = "Por favor ingresa un número válido de botellas.";
        return;
    }

    // Lógica: Se necesitan aprox. 30 botellas comprimidas para hacer 1 bloque sólido
    var botellasPorLadrillo = 30;
    var ladrillosCreados = (botellas / botellasPorLadrillo).toFixed(1);
    var co2Evitado = (botellas * 0.05).toFixed(2); // Estimación en kg de CO2

    // Inyectamos el resultado dinámico en la caja de respuesta
    document.getElementById("resultadoSimulador").innerHTML = 
        "Con " + botellas + " botellas puedes fabricar aprox. " + ladrillosCreados + " ecoladrillos para viviendas ecológicas en Veracruz y estás mitigando de forma indirecta " + co2Evitado + " kg de contaminación ambiental en tu región.";
}
