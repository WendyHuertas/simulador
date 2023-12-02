function inversion()  {
    const preCont = document.querySelector(".pre-simulation");
    const postCont = document.querySelector(".post-simulation");

    postCont.classList.remove("disabled");
    preCont.classList.add("disabled");

    const campoNombres = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;
    const nombresShow = document.getElementById("nombres-show");
    const emailShow = document.getElementById("email-show");

    nombresShow.innerText = campoNombres;
    emailShow.innerHTML = campoEmail;

    const invercion = document.getElementById("inversion").value;
    const tiempoSelect = document.getElementById("tiempo");
    const tiempoSeleccionado = tiempoSelect.options[tiempoSelect.selectedIndex].text;

    const interesShow = document.getElementById("interes-show");
    const tiempoShow = document.getElementById("tiempo-show");
    const gananciaShow = document.getElementById("ganancia-show");
    const totalShow = document.getElementById("total-show");

    let ganancia = 0;
    let gananciaTotal = 0;
    let porcentaje = 0;

    switch (tiempoSeleccionado) {
        case "1 Año":
            porcentaje = 0.8;
            break;
        case "2 Años":
            porcentaje = 1.3;
            break;
        case "3 Años":
            porcentaje = 1.7;
            break;
        default:
            porcentaje = 0;
    }

    ganancia = (invercion * porcentaje / 100) * parseInt(tiempoSeleccionado) * 12;
    gananciaTotal = parseInt(invercion) + parseInt(ganancia);

    interesShow.innerText = porcentaje + "%";
    tiempoShow.innerText = parseInt(tiempoSeleccionado) * 12 + " MESES";
    gananciaShow.innerText = ganancia;
    totalShow.innerText = gananciaTotal;
}
