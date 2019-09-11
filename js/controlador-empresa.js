// variables globales
var datosFormularioEmpresa = new FormData();
var verificarEmpresa = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];


// llenando el input de los paises
(() => {
    var paises = ["Afganistán", "Akrotiri", "Albania", "Alemania", "Andorra", "Angola", "Anguila", "Antártida", "Antigua y Barbuda", "Antillas Neerlandesas", "Arabia Saudí", "Arctic Ocean", "Argelia", "Argentina", "Armenia", "Aruba", "Ashmore andCartier Islands", "Atlantic Ocean", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bahráin", "Bangladesh", "Barbados", "Bélgica", "Belice", "Benín", "Bermudas", "Bielorrusia", "Birmania Myanmar", "Bolivia", "Bosnia y Hercegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Chad", "Chile", "China", "Chipre", "Clipperton Island", "Colombia", "Comoras", "Congo", "Coral Sea Islands", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dhekelia", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "El Vaticano", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Gaza Strip", "Georgia", "Ghana", "Gibraltar", "Granada", "Grecia", "Groenlandia", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Ecuatorial", "Guinea-Bissau", "Guyana", "Haití", "Honduras", "Hong Kong", "Hungría", "India", "Indian Ocean", "Indonesia", "Irán", "Iraq", "Irlanda", "Isla Bouvet", "Isla Christmas", "Isla Norfolk", "Islandia", "Islas Caimán", "Islas Cocos", "Islas Cook", "Islas Feroe", "Islas Georgia del Sur y Sandwich del Sur", "Islas Heard y McDonald", "Islas Malvinas", "Islas Marianas del Norte", "IslasMarshall", "Islas Pitcairn", "Islas Salomón", "Islas Turcas y Caicos", "Islas Vírgenes Americanas", "Islas Vírgenes Británicas", "Israel", "Italia", "Jamaica", "Jan Mayen", "Japón", "Jersey", "Jordania", "Kazajistán", "Kenia", "Kirguizistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macao", "Macedonia", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Man, Isle of", "Marruecos", "Mauricio", "Mauritania", "Mayotte", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montserrat", "Mozambique", "Namibia", "Nauru", "Navassa Island", "Nepal", "Nicaragua", "Níger", "Nigeria", "Niue", "Noruega", "Nueva Caledonia", "Nueva Zelanda", "Omán", "Pacific Ocean", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa-Nueva Guinea", "Paracel Islands", "Paraguay", "Perú", "Polinesia Francesa", "Polonia", "Portugal", "Puerto Rico", "Qatar", "Reino Unido", "República Centroafricana", "República Checa", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia", "Sáhara Occidental", "Samoa", "Samoa Americana", "San Cristóbal y Nieves", "San Marino", "San Pedro y Miquelón", "San Vicente y las Granadinas", "Santa Helena", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Southern Ocean", "Spratly Islands", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Suecia", "Suiza", "Surinam", "Svalbard y Jan Mayen", "Tailandia", "Taiwán", "Tanzania", "Tayikistán", "TerritorioBritánicodel Océano Indico", "Territorios Australes Franceses", "Timor Oriental", "Togo", "Tokelau", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Unión Europea", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Wake Island", "Wallis y Futuna", "West Bank", "World", "Yemen", "Yibuti", "Zambia", "Zimbabue"];
    for (let i = 0; i < paises.length; i++) {
        $('#paisEmpresa').append(`
         <option value="${paises[i]}">${paises[i]}</option>`);
    }

})();

// VALIDACIONES EN LINEA
//validando el nombre de la empresa
document.getElementById('nombreEmpresa').addEventListener('input', function() {
    campo = event.target;
    //console.log("desdenombreUusuario");
    if (campo.value.length == 0 || /^\s+$/.test(campo.value) || /[a-zA-Z]((\.|_|-)?[a-zA-Z0-9]+){3}/.test(campo.value) == false) {
        $('#listo-nombreEmpresa').addClass('ds-color');
        $('#no-listo-nombreEmpresa').removeClass('ds-color');
        verificarEmpresa[0] = false;
    } else {
        $('#no-listo-nombreEmpresa').addClass('ds-color');
        $('#listo-nombreEmpresa').removeClass('ds-color');
        verificarEmpresa[0] = true;
        let nombreEmpresa = $('#nombreEmpresa').val();
        datosFormularioEmpresa.append('nombreEmpresa', nombreEmpresa);
    }

});

// validando el correoEmpresa
document.getElementById('correoEmpresa').addEventListener('input', function() {
    campo = event.target;
    let exp = /[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|aero|asia|arpa|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)/;
    if (exp.test(campo.value) || /^\s+$/.test(campo.value)) {
        $('#listo-correoEmpresa').removeClass('ds-color');
        $('#no-listo-correoEmpresa').addClass('ds-color');
        verificarEmpresa[1] = true;
        let correoEmpresa = $('#correoEmpresa').val();
        datosFormularioEmpresa.append('correoEmpresa', correoEmpresa);
    } else {
        $('#no-listo-correoEmpresa').removeClass('ds-color');
        $('#listo-correoEmpresa').addClass('ds-color');
        verificarEmpresa[1] = false;
    }

});
// validar campo idEmpresa
document.getElementById('idEmpresa').addEventListener('input', function() {
    campo = event.target;
    if (campo.value.length == 0 || /^\s+$/.test(campo.value) || campo.value.length < 4 || campo.value.length > 40) {
        $('#listo-idEmpresa').addClass('ds-color');
        $('#no-listo-idEmpresa').removeClass('ds-color');
        verificarEmpresa[2] = false;
    } else {
        $('#no-listo-idEmpresa').addClass('ds-color');
        $('#listo-idEmpresa').removeClass('ds-color');
        verificarEmpresa[2] = true;
        let idEmpresa = $('#idEmpresa').val();
        datosFormularioEmpresa.append('idEmpresa', idEmpresa);
    }

});

// validar campo telefonoEmpresa
document.getElementById('telefonoEmpresa').addEventListener('input', function() {
    campo = event.target;
    let exp = /0{0,2}([\+]?[\d]{1,3} ?)?([\(]([\d]{2,3})[)] ?)?[0-9][0-9 \-]{6,}( ?([xX]|([eE]xt[\.]?)) ?([\d]{1,5}))?/;
    if (exp.test(campo.value)) {
        $('#no-listo-telefonoEmpresa').addClass('ds-color');
        $('#listo-telefonoEmpresa').removeClass('ds-color');
        verificarEmpresa[3] = true;
        let telefonoEmpresa = $('#telefonoEmpresa').val();
        datosFormularioEmpresa.append('telefonoEmpresa', telefonoEmpresa);

    } else {
        $('#listo-telefonoEmpresa').addClass('ds-color');
        $('#no-listo-telefonoEmpresa').removeClass('ds-color');
        verificarEmpresa[3] = false;
    }

});

// validar campo paginaWebEmpresa
document.getElementById('paginaWebEmpresa').addEventListener('input', function() {
    campo = event.target;
    var reg = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
    if (reg.test(campo.value)) {
        $('#no-listo-paginaWebEmpresa').addClass('ds-color');
        $('#listo-paginaWebEmpresa').removeClass('ds-color'); //*
        verificarEmpresa[4] = true;
        let paginaWebEmpresa = $('#paginaWebEmpresa').val();
        datosFormularioEmpresa.append('paginaWebEmpresa', paginaWebEmpresa);
    } else {
        $('#listo-paginaWebEmpresa').addClass('ds-color');
        $('#no-listo-paginaWebEmpresa').removeClass('ds-color');
        verificarEmpresa[4] = false;
    }

});

// validar campo faceEmpresa
document.getElementById('faceEmpresa').addEventListener('input', function() {
    campo = event.target;
    var reg = new RegExp("(?:http://)?(?:www.)?facebook.com/(?:(?:w)*#!/)?(?:pages/)?(?:[w-]*/)*([w-]*)[a-zA-Z_]");
    if (reg.test(campo.value) == false || campo.value.length == 0) {
        $('#listo-faceEmpresa').addClass('ds-color');
        $('#no-listo-faceEmpresa').removeClass('ds-color'); //*
        verificarEmpresa[5] = false;
    } else {
        $('#no-listo-faceEmpresa').addClass('ds-color');
        $('#listo-faceEmpresa').removeClass('ds-color'); //*
        verificarEmpresa[5] = true;
        let faceEmpresa = $('#faceEmpresa').val();
        datosFormularioEmpresa.append('faceEmpresa', faceEmpresa);
    }

});

// validar campo twitEmpresa
document.getElementById('twitEmpresa').addEventListener('input', function() {
    campo = event.target;
    var reg = /@([A-Za-z0-9_]{1,15})/;
    if (reg.test(campo.value) == false || campo.value.length == 0) {
        $('#listo-twitEmpresa').addClass('ds-color');
        $('#no-listo-twitEmpresa').removeClass('ds-color'); //*
        verificarEmpresa[6] = false;
    } else {
        $('#no-listo-twitEmpresa').addClass('ds-color');
        $('#listo-twitEmpresa').removeClass('ds-color'); //*
        verificarEmpresa[6] = true;
        let twitEmpresa = $('#twitEmpresa').val();
        datosFormularioEmpresa.append('twitEmpresa', twitEmpresa);
    }

});
// validar campo contraseñaEmpresa'
document.getElementById('contrasenaEmpresa').addEventListener('input', function() {
    campo = event.target;
    var ayuda = false;
    if (campo.value.indexOf(" ") != -1) {
        ayuda = true;
    } else {
        ayuda = false;
    }
    if (ayuda == true || (campo.value.length == 0 || /^\s+$/.test(campo.value)) || (campo.value.length < 4 || campo.value.length > 40)) {
        $('#listo-contrasenaEmpresa').addClass('ds-color');
        $('#no-listo-contrasenaEmpresa').removeClass('ds-color');
        verificarEmpresa[7] = false;
    } else {
        $('#no-listo-contrasenaEmpresa').addClass('ds-color');
        $('#listo-contrasenaEmpresa').removeClass('ds-color');
        verificarEmpresa[7] = true;
        let contrasenaEmpresa = $('#contrasenaEmpresa').val();
        datosFormularioEmpresa.append('contrasenaEmpresa', contrasenaEmpresa);
    }

});

// button mostrar/ocultar contraseña del regidtro de Empresa
function mostrarContrasenaRegistroEmpresa() {
    var contrasena = document.getElementById('contrasenaEmpresa');
    if (contrasena.type == "password") {
        contrasena.type = "text";
        $('#emoji-form-registro-empresa-contrasena').replaceWith(` <i id="emoji-form-registro-empresa-contrasena" onclick="mostrarContrasenaRegistroEmpresa()" class="fas fa-eye-slash emoji-form-registro-usuario"></i>`);
    } else {
        contrasena.type = "password";
        $('#emoji-form-registro-empresa-contrasena').replaceWith(` <i id="emoji-form-registro-empresa-contrasena" onclick="mostrarContrasenaRegistroEmpresa()" class="fas fa-eye emoji-form-registro-usuario"></i>`);
    }
}

// validando campos longitudEmpresa y latitudEmpresa
//seleccionando la ubicación
function seleccionarLgLt() {
    mapaLongLat(); //llamando a la función que localizará el mapa
}
//Funcion principal
mapaLongLat = function() {
    //usamos la API para geolocalizar el usuario
    navigator.geolocation.getCurrentPosition(
        function(position) {
            coords = {
                lng: position.coords.longitude,
                lat: position.coords.latitude
            };
            document.getElementById("latitudEmpresaModal").value = coords.lat;
            document.getElementById('longitudEmpresaModal').value = coords.lng;
            document.getElementById("latitudEmpresa").value = coords.lat;
            document.getElementById("longitudEmpresa").value = coords.lng;
            setMapa(coords); //pasamos las coordenadas al metodo para crear el mapa
        },
        function(error) { console.log(error); });

}

function setMapa(coords) {
    //Se crea una nueva instancia del objeto mapa
    var map = new google.maps.Map(document.getElementById('maps'), {
        zoom: 15,
        center: new google.maps.LatLng(coords.lat, coords.lng),
    });

    //Creamos el marcador en el mapa con sus propiedades
    //para nuestro obetivo tenemos que poner el atributo draggable en true
    //position pondremos las mismas coordenas que obtuvimos en la geolocalización
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(coords.lat, coords.lng),
    });

    //agregamos un evento al marcador junto con la funcion callback al igual que el evento dragend que indica
    //cuando el usuario a soltado el marcador
    marker.addListener('click', toggleBounce);
    marker.addListener('dragend', function(event) {
        //escribimos las coordenadas de la posicion actual del marcador dentro del input #coords
        document.getElementById("latitudEmpresa").value = this.getPosition().lat();
        document.getElementById("latitudEmpresaModal").value = this.getPosition().lat();
        document.getElementById('longitudEmpresa').value = this.getPosition().lng();
        document.getElementById('longitudEmpresaModal').value = this.getPosition().lng();
    });
}

//callback al hacer clic en el marcador lo que hace es quitar y poner la animacion BOUNCE
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function validarLL() {
    let campoLong = document.getElementById('longitudEmpresa').value;
    if (campoLong.length == 0 || /^\s+$/.test(campoLong)) {
        $('#listo-longitudEmpresa').addClass('ds-color');
        $('#no-listo-longitudEmpresa').removeClass('ds-color'); //*
        verificarEmpresa[8] = false;
    } else {
        $('#no-listo-longitudEmpresa').addClass('ds-color');
        $('#listo-longitudEmpresa').removeClass('ds-color'); //*
        verificarEmpresa[8] = true;
        let longitudEmpresa = $('#longitudEmpresa').val();
        datosFormularioEmpresa.append('longitudEmpresa', longitudEmpresa);
    }

    let campoLat = document.getElementById('latitudEmpresa').value;
    // validando latitudEmpresa
    if (campoLat.length == 0 || /^\s+$/.test(campoLat)) {
        $('#listo-latitudEmpresa').addClass('ds-color');
        $('#no-listo-latitudEmpresa').removeClass('ds-color'); //*
        verificarEmpresa[9] = false;
    } else {
        $('#no-listo-latitudEmpresa').addClass('ds-color');
        $('#listo-latitudEmpresa').removeClass('ds-color'); //*
        verificarEmpresa[9] = true;
        let latitudEmpresa = $('#latitudEmpresa').val();
        datosFormularioEmpresa.append('latitudEmpresa', latitudEmpresa);
    }
}


//  validando campo paisEmpresa
var sele = document.getElementById('paisEmpresa');
sele.addEventListener('change', function() {
    var selecOption = this.options[sele.selectedIndex];
    if (selecOption.value.length == 0 || /^\s+$/.test(selecOption.value)) {
        $('#listo-paisEmpresa').addClass('ds-color');
        $('#no-listo-paisEmpresa').removeClass('ds-color');
        verificarEmpresa[10] = false;
    } else {
        $('#no-listo-paisEmpresa').addClass('ds-color');
        $('#listo-paisEmpresa').removeClass('ds-color');
        verificarEmpresa[10] = true;
        let paisEmpresa = $('#paisEmpresa').val();
        datosFormularioEmpresa.append('paisEmpresa', paisEmpresa);
    }
});


// validar campo fundacionEmpresa
document.getElementById('fundacionEmpresa').addEventListener('input', function() {
    campo = event.target;
    if (campo.value.length == 0 || /^\s+$/.test(campo.value)) {
        $('#listo-fundacionEmpresa').addClass('ds-color');
        $('#no-listo-fundacionEmpresa').removeClass('ds-color');
        verificarEmpresa[11] = false;
    } else {
        $('#no-listo-fundacionEmpresa').addClass('ds-color');
        $('#listo-fundacionEmpresa').removeClass('ds-color');
        verificarEmpresa[11] = true;
        let fundacionEmpresa = $('#fundacionEmpresa').val();
        datosFormularioEmpresa.append('fundacionEmpresa', fundacionEmpresa);
    }

});
// validar campo bannerEmpresa
function validarMostrarInputDeBanner() {
    var archivoInput = document.getElementById('bannerEmpresa');
    var archivoRuta = archivoInput.value;
    var extPermitidas = /(.png|.PNG|.jpg|.jpg|.JPEG|.jpeg)$/i;
    if (!extPermitidas.exec(archivoRuta)) {
        alert('Asegurese de haber seleccionado una BANNER')
        archivoInput.value = '';
        $('#listo-bannerEmpresa').addClass('ds-color');
        $('#no-listo-bannerEmpresa').removeClass('ds-color');
        verificarEmpresa[12] = false;
        return false;
    } else {
        if (archivoInput.files && archivoInput.files[0]) {
            $('#visor-banner').removeClass('ds-img')
            var visor = new FileReader();
            visor.onload = function(e) {
                document.getElementById('visor-banner').innerHTML =
                    '<embed src="' + e.target.result + '" width="100%" height="100%" />';
            };
            visor.readAsDataURL(archivoInput.files[0]);
            $('#no-listo-bannerEmpresa').addClass('ds-color');
            $('#listo-bannerEmpresa').removeClass('ds-color');
            verificarEmpresa[12] = true;
            var bannerEmpresa = $('#bannerEmpresa')[0].files[0];
            datosFormularioEmpresa.append('bannerEmpresa', bannerEmpresa);

        }
    }
}



// validar campo logoEmpresa
function validarMostrarInputDeLogo() {
    var archivoInput = document.getElementById('logoEmpresa');
    var archivoRuta = archivoInput.value;
    var extPermitidas = /(.png|.PNG|.jpg|.jpg|.JPEG|.jpeg)$/i;
    if (!extPermitidas.exec(archivoRuta)) {
        alert('Asegurese de haber seleccionado un LOGO')
        archivoInput.value = '';
        $('#listo-logoEmpresa').addClass('ds-color');
        $('#no-listo-logoEmpresa').removeClass('ds-color');
        verificarEmpresa[13] = false;
        return false;
    } else {
        if (archivoInput.files && archivoInput.files[0]) {
            // $('#visor-logo').removeClass('ds-img');
            var visor = new FileReader();
            visor.onload = function(e) {
                $('#visor-logo').removeClass('ds-img')
                document.getElementById('visor-logo').innerHTML =
                    '<embed src="' + e.target.result + '" width="100%" height="100%" />';
            };
            visor.readAsDataURL(archivoInput.files[0]);
            $('#no-listo-logoEmpresa').addClass('ds-color');
            $('#listo-logoEmpresa').removeClass('ds-color');
            verificarEmpresa[12] = true;
            var logoEmpresa = $('#logoEmpresa')[0].files[0];
            datosFormularioEmpresa.append('logoEmpresa', logoEmpresa);
        }
    }
}

function validarTeclaEspacio(e) {
    return (e.which == 32) ? false : true;
}

$('#enviar').on('click', function() {
    // VALIDANDO ANTES DE ENVIAR LOS DATOS
    // validacion antes de enviar el nombreEmpresa
    if (verificarEmpresa[0]) {
        let nombreEmpresa = $('#nombreEmpresa').val();
        datosFormularioEmpresa.append('nombreEmpresa', nombreEmpresa);
        $('#no-listo-nombreEmpresa').addClass('ds-color');
        $('#listo-nombreEmpresa').removeClass('ds-color');
    } else {
        $('#nombreEmpresa').focus();
        $('#listo-nombreEmpresa').addClass('ds-color');
        $('#no-listo-nombreEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el correoEmpresa
    if (verificarEmpresa[1]) {
        let correoEmpresa = $('#correoEmpresa').val();
        datosFormularioEmpresa.append('correoEmpresa', correoEmpresa);
        $('#no-listo-correoEmpresa').addClass('ds-color');
        $('#listo-correoEmpresa').removeClass('ds-color');
    } else {
        $('#correoEmpresa').focus();
        $('#listo-correoEmpresa').addClass('ds-color');
        $('#no-listo-correoEmpresa').removeClass('ds-color');
    }

    // validacion antes de enviar el idEmpresa
    if (verificarEmpresa[2]) {
        let idEmpresa = $('#idEmpresa').val();
        datosFormularioEmpresa.append('idEmpresa', idEmpresa);
        $('#no-listo-idEmpresa').addClass('ds-color');
        $('#listo-idEmpresa').removeClass('ds-color');
    } else {
        $('#idEmpresa').focus();
        $('#listo-idEmpresa').addClass('ds-color');
        $('#no-listo-idEmpresa').removeClass('ds-color');
    }

    // validacion antes de enviar el telefonoEmpresa
    if (verificarEmpresa[3]) {
        let telefonoEmpresa = $('#telefonoEmpresa').val();
        datosFormularioEmpresa.append('telefonoEmpresa', telefonoEmpresa);
        $('#no-listo-telefonoEmpresa').addClass('ds-color');
        $('#listo-telefonoEmpresa').removeClass('ds-color');
    } else {
        $('#telefonoEmpresa').focus();
        $('#listo-telefonoEmpresa').addClass('ds-color');
        $('#no-listo-telefonoEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el paginaWebEmpresa
    if (verificarEmpresa[4]) {
        let paginaWebEmpresa = $('#paginaWebEmpresa').val();
        datosFormularioEmpresa.append('paginaWebEmpresa', paginaWebEmpresa);
        $('#no-listo-paginaWebEmpresa').addClass('ds-color');
        $('#listo-paginaWebEmpresa').removeClass('ds-color');
    } else {
        $('#paginaWebEmpresa').focus();
        $('#listo-paginaWebEmpresa').addClass('ds-color');
        $('#no-listo-paginaWebEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el faceEmpresa
    if (verificarEmpresa[5]) {
        let faceEmpresa = $('#faceEmpresa').val();
        datosFormularioEmpresa.append('faceEmpresa', faceEmpresa);
        $('#no-listo-faceEmpresa').addClass('ds-color');
        $('#listo-faceEmpresa').removeClass('ds-color');
    } else {
        $('#faceEmpresa').focus();
        $('#listo-faceEmpresa').addClass('ds-color');
        $('#no-listo-faceEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el twitEmpresa
    if (verificarEmpresa[6]) {
        let twitEmpresa = $('#twitEmpresa').val();
        datosFormularioEmpresa.append('twitEmpresa', twitEmpresa);
        $('#no-listo-twitEmpresa').addClass('ds-color');
        $('#listo-twitEmpresa').removeClass('ds-color');
    } else {
        $('#twitEmpresa').focus();
        $('#listo-twitEmpresa').addClass('ds-color');
        $('#no-listo-twitEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el contrasenaEmpresa
    if (verificarEmpresa[7]) {
        let contrasenaEmpresa = $('#contrasenaEmpresa').val();
        datosFormularioEmpresa.append('contrasenaEmpresa', contrasenaEmpresa);
        $('#no-listo-contrasenaEmpresa').addClass('ds-color');
        $('#listo-contrasenaEmpresa').removeClass('ds-color');
    } else {
        $('#contrasenaEmpresa').focus();
        $('#listo-contrasenaEmpresa').addClass('ds-color');
        $('#no-listo-contrasenaEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el longitudEmpresa
    if (verificarEmpresa[8]) {
        let longitudEmpresa = $('#longitudEmpresa').val();
        datosFormularioEmpresa.append('longitudEmpresa', longitudEmpresa);
        $('#no-listo-longitudEmpresa').addClass('ds-color');
        $('#listo-longitudEmpresa').removeClass('ds-color');
    } else {
        $('#longitudEmpresa').focus();
        $('#listo-longitudEmpresa').addClass('ds-color');
        $('#no-listo-longitudEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el latitudEmpresa
    if (verificarEmpresa[9]) {
        let latitudEmpresa = $('#latitudEmpresa').val();
        datosFormularioEmpresa.append('latitudEmpresa', latitudEmpresa);
        $('#no-listo-latitudEmpresa').addClass('ds-color');
        $('#listo-latitudEmpresa').removeClass('ds-color');
    } else {
        $('#latitudEmpresa').focus();
        $('#listo-latitudEmpresa').addClass('ds-color');
        $('#no-listo-latitudEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el paisEmpresa
    if (verificarEmpresa[10]) {
        let paisEmpresa = $('#paisEmpresa').val();
        datosFormularioEmpresa.append('paisEmpresa', paisEmpresa);
        $('#no-listo-paisEmpresa').addClass('ds-color');
        $('#listo-paisEmpresa').removeClass('ds-color');
    } else {
        $('#paisEmpresa').focus();
        $('#listo-paisEmpresa').addClass('ds-color');
        $('#no-listo-paisEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el fundacionEmpresa
    if (verificarEmpresa[11]) {
        let fundacionEmpresa = $('#fundacionEmpresa').val();
        datosFormularioEmpresa.append('fundacionEmpresa', fundacionEmpresa);
        $('#no-listo-fundacionEmpresa').addClass('ds-color');
        $('#listo-fundacionEmpresa').removeClass('ds-color');
    } else {
        $('#fundacionEmpresa').focus();
        $('#listo-fundacionEmpresa').addClass('ds-color');
        $('#no-listo-fundacionEmpresa').removeClass('ds-color');
    }
    // validacion antes de enviar el bannerEmpresa
    validarMostrarInputDeBanner();

    // validacion antes de enviar el logoEmpresa
    validarMostrarInputDeLogo();

    $.ajax({
        url: 'php/indexEmpresas.php',
        type: 'post',
        data: datosFormularioEmpresa,
        contentType: false,
        processData: false,
        success: function(response) {
            var datos = JSON.parse(response);
            //console.log(datos.datos);
            if (datos.datos === "false") {
                alert('Completa todos los campos por favor!!');
            } else {
                console.log(datos);
            }
        }
    });
    return false;

});