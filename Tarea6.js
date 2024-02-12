document.addEventListener("DOMContentLoaded", function () {
    const inputsJuana = document.querySelectorAll(".juana-input");
    const inputsPedro = document.querySelectorAll(".pedro-input");
    const totalsJuana = document.querySelectorAll(".totalJuana");
    const totalsPedro = document.querySelectorAll(".totalPedro");

    function calcularTotalJuana(input, totalSpan) {
        const precio = parseInt(input.parentElement.previousElementSibling.textContent);
        const cantidad = parseInt(input.value) || 0;
        totalSpan.textContent = precio * cantidad + "$";
    }

    function calcularTotalPedro(input, totalSpan) {
        const precio = parseInt(input.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        const cantidad = parseInt(input.value) || 0;
        totalSpan.textContent = precio * cantidad + "$";
    }

    inputsJuana.forEach((input, index) => {
        input.addEventListener("input", function () {
            calcularTotalJuana(input, totalsJuana[index]);
        });
    });

    inputsPedro.forEach((input, index) => {
        input.addEventListener("input", function () {
            calcularTotalPedro(input, totalsPedro[index]);
        });
    });
});

function calcularBotonGanador() {
    const juanaInputs = document.querySelectorAll('.juana-input');
    const pedroInputs = document.querySelectorAll('.pedro-input');
    let totalJuana = 0;
    let totalPedro = 0;

    // Calcular la suma de productos vendidos por Juana
    juanaInputs.forEach(input => {
        const cantidad = parseInt(input.value);
        if (!isNaN(cantidad)) {
            totalJuana += cantidad;
        }
    });

    // Calcular la suma de productos vendidos por Pedro
    pedroInputs.forEach(input => {
        const cantidad = parseInt(input.value);
        if (!isNaN(cantidad)) {
            totalPedro += cantidad;
        }
    });

    // Mostrar el total de productos vendidos por Juana y Pedro
    const totalJuanaElement = document.querySelector('.SumatotalJuana');
    const totalPedroElement = document.querySelector('.SumatotalPedro');
    totalJuanaElement.textContent = totalJuana;
    totalPedroElement.textContent = totalPedro;

    if (totalJuana > totalPedro) {
        alert("Juana es la Empleada del mes")
    } else {
        if (totalJuana === totalPedro) {
            alert("Es un Empate")
        } else {
            alert("Pedro es el empleado del mes")
        }
    }
}

function CalcularBotonGanancias() {
        const juanaSpan = document.querySelectorAll('.totalJuana');
        const pedroSpan = document.querySelectorAll('.totalPedro');
        let totalJuanaG = 0;
        let totalPedroG = 0;
    
        // Calcular la suma de productos vendidos por Juana
        juanaSpan.forEach(span => {
            const cantidad = parseInt(input.value);
            if (!isNaN(cantidad)) {
                totalJuanaG += cantidad;
            }
        });
    
        // Calcular la suma de productos vendidos por Pedro
        pedroSpan.forEach(input => {
            const cantidad = parseInt(input.value);
            if (!isNaN(cantidad)) {
                totalPedro += cantidad;
            }
        });
    
        // Mostrar el total de productos vendidos por Juana y Pedro
        const totalJuanaElement = document.querySelector('.totalJuanaG');
        const totalPedroElement = document.querySelector('.totalPedroG');
        totalJuanaElement.textContent = totalJuanaG;
        totalPedroElement.textContent = totalPedroG;

}
function calcularBotonGanancias() {
    const totalJuanaGElement = document.querySelector('.totalJuanaG');
    const totalPedroGElement = document.querySelector('.totalPedroG');
    const totalsJuana = document.querySelectorAll(".totalJuana");
    const totalsPedro = document.querySelectorAll(".totalPedro");
    let totalGananciasJuana = 0;
    let totalGananciasPedro = 0;

    // Calcular la suma total de las ganancias de Juana
    totalsJuana.forEach(totalSpan => {
        const ganancia = parseInt(totalSpan.textContent.replace("$", ""));
        if (!isNaN(ganancia)) {
            totalGananciasJuana += ganancia;
        }
    });

    // Calcular la suma total de las ganancias de Pedro
    totalsPedro.forEach(totalSpan => {
        const ganancia = parseInt(totalSpan.textContent.replace("$", ""));
        if (!isNaN(ganancia)) {
            totalGananciasPedro += ganancia;
        }
    });

    // Mostrar la suma total de las ganancias de Juana y Pedro
    totalJuanaGElement.textContent = totalGananciasJuana + "$";
    totalPedroGElement.textContent = totalGananciasPedro + "$";
}





