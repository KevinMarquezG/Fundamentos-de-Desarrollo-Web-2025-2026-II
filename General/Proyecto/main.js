// Objeto con el contenido de la Wiki
const contenidos = {
    "inicio": {
        titulo: "¡Bienvenido a Grounded Wiki!",
        texto: `Una wiki para la franquicia Grounded de Obsidian Entertainment. Encogido al tamaño de una hormiga, debes sobrevivir 
                al hermoso pero peligroso micromundo. ¡Progresa a través de misiones basadas en historias, explora el mundo del juego 
                intrincadamente detallado, busca recursos que salven vidas y defiéndete de una gran cantidad de criaturas impredecibles!`,
        mostrarTabla: true
    },
    "herramientas": {
        titulo: "Herramientas",
        texto: `La mayoría Herramientas Se puede utilizar dinámicamente tanto para fines de combate como de utilidad. Cada herramienta está 
                designada para una determinada subcategoría que determina la tipo de daño Es capaz de enfrentarse tanto a los enemigos como 
                al medio ambiente. Sin embargo, las herramientas bajo el luz, reparar, escudo, y misc Las categorías se utilizan únicamente 
                con fines de utilidad. Algunas armas, similares a armor, ven con seguridad efectos apegado a ellos. Otras herramientas cuerpo 
                a cuerpo de alto nivel tienen elementos inherentes aumentos. Todas estas variables combinadas afectan el cantidad de daño tratado 
                a criaturaspor el jugador. La mayoría de las herramientas también se pueden actualizar para incluir artificialmente estos aumentos, 
                así como un mejor daño y durabilidad en general.\n
                La mayoría de las herramientas cuerpo a cuerpo tienen una combinación de ataque de 3 golpes. Los primeros 2 golpes infligen el mismo 
                daño mientras que el último inflige un poco más de daño. (100% > 100% > 125%) Las dagas son la única arma que se diferencia de este 
                sistema combinado, ya que tienen un sistema combinado de 2 en lugar de 3, y siempre son el 100% del daño. Los arcos estándar tienen 
                una mecánica similar en la que los tiros completamente cargados causan más daño que los no cargados, aunque esto no se comparte con 
                ballestas como la Ballesta de cuervo que no se puede cobrar. La mayoría de las herramientas cuerpo a cuerpo se pueden utilizar para 
                bloquear ataques enemigos y los jugadores pueden cancelar sus propios ataques a mitad de la animación bloqueándolos. Esta página muestra 
                todas las herramientas fabricables del juego.`,
        mostrarTabla: false,
        mostrarTablaArmas: true
    },
    "armadura":{
        titulo: "Armadura",
        texto: `Armadura se utiliza para defenderse de los diversos peligros presentes en el patio interior. Se pueden crear diferentes tipos de piezas 
            de armadura a partir de recursos como bellotas, incluidas algunas que proporcionan diversos efectos de estado como resistencia mejorada, 
            fuerza de arrastre o reducción de daños. \n
            Todos los conjuntos de armaduras de 3 piezas tienen una bonificación que se activa cuando el jugador usa el 
            conjunto completo. Al igual que las armas, todas las armaduras se pueden mejorar en el Estación de herrería heredar una defensa más 
            fuerte y durabilidad, así como la posibilidad de un efecto único si el jugador elige el camino Sleek.`,
        mostrarTabla: false
    },
    "consumible":{
        titulo: "Consumible",
        texto: `Los consumibles son elementos especiales que el jugador puede usar para obtener ciertos aumentos temporales. Algunos sanan mientras que 
                otros dan algo único efectos. Los consumibles no deben confundirse con Comestibles.`,
        mostrarTabla: false
    },
    "criaturas":{
        titulo: "Criatura",
        texto: `Criaturas son los amigos y enemigos clave de la Patio trasero que lo pueblan en muchos diferentes entornos. Sirven como 
                amenaza y fuente clave de Recursos al jugador y puede ser explotado de muchas maneras. Las criaturas tienen una agresividad 
                variable: son criaturas pasivas que no dañan al jugador, criaturas neutrales que serán pasivas pero se defenderán si son atacadas 
                o perturbadas, y criaturas hostiles que atacarán al jugador en el acto. Además de esto, se pueden encontrar jefes por todo el patio, 
                lo que supone un desafío atrevido y gratificante para los jugadores. \n
                Las criaturas pueden dar un Tarjeta de criatura al pasar el cursor sobre ellos usando el modo PEEP.R, enumerando sus diversas debilidades 
                y resistencias, botín y algo de texto de sabor. Todas las criaturas excepto: Pulgones, Herbáceos, Mosquitos, Mosquitos carnosos, Barqueros 
                acuáticos, y Mosquitos infectados tienen debilidades y resistencias a los 4 elementos del juego y a los muchos Tipos de daños. Puede 
                encontrar información al respecto en páginas de criaturas independientes o en Fortalezas y debilidades de las criaturas página. Algunas 
                criaturas también pueden pacificarse como Mascotas, dando positivo buffs y siguiendo al jugador.`,
        mostrarTabla: false
    },
    "recursos":{
        titulo: "Recursos",
        texto: `Recursos Hay una variedad de artículos que se utilizan principalmente para hacer manualidades Conectado. La mayoría se llaman Recursos 
                Naturales y se pueden ver en el menú de elaboración cuando se descubren. La mayoría de los recursos requieren el uso de un herramienta 
                para recogerlos de sus nodo; principalmente hachas, dagas, martillos y palas. Y algunos necesitarán un nivel diferente de herramienta, 
                que va del nivel uno al 3. Casi todos los recursos tienen una rareza asociada y pueden serlo analizado para desbloquear ciertas recetas 
                de elaboración.`,
        mostrarTabla: false
    },
    "construccion":{
        titulo: "Construccion",
        texto: `La construccion es una característica clave en la que el jugador puede construir bases enormes, elaboradas o bonitas utilizando una 
                variedad de estructuras como pisos, paredes, techos y más. Algunas estructuras tienen un propósito más decorativo, mientras que otras 
                son más fuertes y pueden ser útiles para defenderse de los hostiles. Sin embargo, en su mayor parte, el jugador es libre de elegir qué 
                tipo de estructuras pueden ir a dónde y personalizarlas en consecuencia. Otras estructuras que no están en la categoría de Edificio Base 
                incluyen Almacenamiento y servicios públicos y Decor, que tienen sus propios propósitos separados del Edificio Base. Ver el Edificios 
                avanzados página para variantes más complejas de Edificios Base. Para ver el mecánico de construcción de bases Coziness, visite el 
                Coziness página. Las bases no siempre son las mismas.`,
        mostrarTabla: false
    },
    "datos":{
        titulo: "Datos",
        texto: `Elementos de datos abarca todos los elementos coleccionables no relacionados con el juego recogidos por el jugador en Conectado. Esto incluye notas, registros de 
                audio, elementos de misión e incluso el propio SCA.B. Esta página contiene tanto transcripciones como ubicaciones de todos los elementos de datos.`,
        mostrarTabla: false
    },
    "registro": {
        titulo: "Crear una Cuenta",
        texto: "Únete a la comunidad de Grounded Wiki para poder publicar, comentar y dar me gusta en nuestro foro.",
        mostrarFormRegistro: true
    }
};

function generarTablaInicio() {
    return `
    <table class="wiki-grid">
        <tr>
            <td><a href="#" data-seccion="herramientas"><img src="./imagenes/tablaInicio/Pebblet_Axe (1).webp"><span>Herramientas</span></a></td>
            <td><a href="#" data-seccion="armas"><img src="./imagenes/tablaInicio/Pebblet_Spear.webp"><span>Armas</span></a></td>
            <td><a href="#" data-seccion="armadura"><img src="./imagenes/tablaInicio/Clover_Hood.webp"><span>Armadura</span></a></td>
            <td><a href="#" data-seccion="consumible"><img src="./imagenes/tablaInicio/Fiber_Bandage.webp"><span>Consumibles</span></a></td>
            <td><a href="#" data-seccion="criaturas"><img src="./imagenes/tablaInicio/Creaturecard_Aphid.webp"><span>Criaturas</span></a></td>
        </tr>
        <tr>
            <td></td>
            <td><a href="#" data-seccion="recursos"><img src="./imagenes/tablaInicio/Pebblet.webp"><span>Resources</span></a></td>
            <td><a href="#" data-seccion="construccion"><img src="./imagenes/tablaInicio/Grass_Floor.webp"><span>Base Building</span></a></td>
            <td><a href="#" data-seccion="datos"><img src="./imagenes/tablaInicio/Audio_Log_3.webp"><span>Data Items</span></a></td>
            <td></td>
        </tr>
    </table>`;
}

function generarTablaArmas() {
    return `
    <table class="arma-table">
        <thead>
            <tr>
                <th rowspan="2">Icono</th>
                <th rowspan="2">Arma</th>
                <th colspan="3">Estadisticas</th>
                <th rowspan="2">Información</th>
                <th rowspan="2">Materiales</th>
                <th rowspan="2">Costo Reparación</th>
            </tr>
            <tr>
                <th>Daño</th>
                <th>Stun</th>
                <th>Velocidad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="./imagenes/tablaArmas/mazoMenta.webp" class="tabla-img-arma"></td>
                <td class="nombre-arma">Mazo de Menta</td>
                <td>100/100/125</td>
                <td>20</td>
                <td>Lento</td>
                <td class="info-text">"Un club gigante elaborado a partir de un 
                                        trozo de Mentas para el aliento Ice Caps. 
                                        Proporciona nuevos daños al golpe, pero 
                                        es inútil para romper"</td>
                <td>Recursos aquí</td>
                <td>Costo aquí</td>
            </tr>
            <tr>
                <td><img src="./imagenes/tablaArmas/garroteAranaMadre.webp" class="tabla-img-arma"></td>
                <td class="nombre-arma">Garrote de Araña Madre</td>
                <td>105/105/131</td>
                <td>20/15/25</td>
                <td>Lento</td>
                <td class="info-text">"Un garrote con púas construido para la violencia. 
                                        Diseñado a partir de varias partes de un madre cría 
                                        y otros recursos."</td>
                <td>Recursos aquí</td>
                <td>Costo aquí</td>
            </tr>
            <tr>
                <td><img src="./imagenes/tablaArmas/espadaHormigaLeon.webp" class="tabla-img-arma"></td>
                <td class="nombre-arma">Espada de Hormiga Leon</td>
                <td>83/83/104</td>
                <td>0</td>
                <td>Media</td>
                <td class="info-text">"Increíblemente grande y pesado. Utiliza múltiples pinzas 
                                        de hormiga león para formar muchos puntos peligrosos."</td>
                <td>Recursos aquí</td>
                <td>Costo aquí</td>
            </tr>
            <tr>
                <td><img src="./imagenes/tablaArmas/estrellaMananaSal.webp" class="tabla-img-arma"></td>
                <td class="nombre-arma">Estrella de la Mañana</td>
                <td>55/55/69</td>
                <td>16/08/20</td>
                <td>Media</td>
                <td class="info-text">"Una bola pesada de dolor cubierta de fragmentos de sal para 
                                        garantizar que todo lo que golpee sienta un dolor insoportable"</td>
                <td>Recursos aquí</td>
                <td>Costo aquí</td>
            </tr>
            <tr>
                <td><img src="./imagenes/tablaArmas/katanaPicante.webp" class="tabla-img-arma"></td>
                <td class="nombre-arma">Katana Picante</td>
                <td>85/85/106</td>
                <td>0</td>
                <td>Media</td>
                <td class="info-text">"Vea a los enemigos con una hoja finamente elaborada, martillada 
                                        en madera templada globos picantes y siempre caliente Trozos 
                                        de carbón EverChar"</td>
                <td>Recursos aquí</td>
                <td>Costo aquí</td>
            </tr>
        </tbody>
    </table>`;
}

// 2. Modificar la función principal para renderizar el formulario
function actualizarPagina(seccion) {
    const data = contenidos[seccion];
    if (data) {
        document.querySelector('.text-container h1').innerText = data.titulo;
        document.querySelector('.text-container p').innerText = data.texto;
        
        const contenedorDinamico = document.getElementById('dinamic-content');
        
        if (data.mostrarTabla) {
            contenedorDinamico.innerHTML = generarTablaInicio();
            asignarEventosLinks();
        } else if (data.mostrarTablaArmas) {
            contenedorDinamico.innerHTML = generarTablaArmas();
        } else if (data.mostrarFormRegistro) {
            contenedorDinamico.innerHTML = generarFormularioRegistro();
            activarValidacionRegistro(); // Activamos la validación en tiempo real
        } else if (data.mostrarFormRegistro) {
            contenedorDinamico.innerHTML = generarFormularioRegistro();
            activarValidacionRegistro(); 
            
            // ESCUCHAR EL ENVÍO DEL FORMULARIO
            const formulario = document.getElementById('form-registro');
            formulario.addEventListener('submit', function(e) {
                e.preventDefault(); // Evita que la página se recargue

                const formData = new FormData(formulario);
                const alerta = document.getElementById('registro-alerta');

                // Enviamos los datos a PHP de forma asíncrona
                fetch('registrar.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json()) // Esperamos una respuesta en formato JSON
                .then(data => {
                    if (data.status === 'error') {
                        alerta.innerText = data.message;
                        alerta.style.display = 'block'; // Mostramos el error (usuario o correo repetido)
                    } else if (data.status === 'success') {
                        // Registro exitoso
                        alerta.className = 'alerta-success'; // Cambias el estilo a verde si gustas
                        alerta.innerText = data.message;
                        alerta.style.display = 'block';
                        formulario.reset(); // Limpia los cuadros de texto
                        document.getElementById('btn-registrar-submit').disabled = true;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            });
        } else {
            contenedorDinamico.innerHTML = "";
        }
}
// 3. Función que genera el HTML del formulario
function generarFormularioRegistro() {
    return `
    <div class="form-container">
        <form id="form-registro" action="registrar.php" method="POST">
            <div class="input-group">
                <label for="reg-usuario">Usuario</label>
                <input type="text" id="reg-usuario" name="usuario" placeholder="Ej. AntHunter99" required>
            </div>
            <div class="input-group">
                <label for="reg-correo">Correo Electrónico</label>
                <input type="email" id="reg-correo" name="correo" placeholder="Ej. correo@dominio.com" required>
            </div>
            <div class="input-group">
                <label for="reg-password">Contraseña</label>
                <input type="password" id="reg-password" name="contrasena" placeholder="Mínimo 6 caracteres" required>
            </div>
            <div id="registro-alerta" class="alerta-error" style="display:none;"></div>
            <button type="submit" id="btn-registrar-submit" disabled>Registrarse</button>
        </form>
    </div>`;
}
// 4. Lógica para habilitar el botón si los campos están llenos
function activarValidacionRegistro() {
    const usuarioInput = document.getElementById('reg-usuario');
    const correoInput = document.getElementById('reg-correo');
    const passwordInput = document.getElementById('reg-password');
    const btnSubmit = document.getElementById('btn-registrar-submit');

    function validarCampos() {
        // Verifica que ninguno esté vacío y que el password tenga al menos 6 caracteres
        if (usuarioInput.value.trim() !== "" && 
            correoInput.value.trim() !== "" && 
            passwordInput.value.trim().length >= 6) {
            btnSubmit.disabled = false;
        } else {
            btnSubmit.disabled = true;
        }
    }

    // Escuchar cada vez que el usuario escribe en los inputs
    usuarioInput.addEventListener('input', validarCampos);
    correoInput.addEventListener('input', validarCampos);
    passwordInput.addEventListener('input', validarCampos);
}
// Separamos la asignación de eventos en una función para poder llamarla cuando la tabla se cree
function asignarEventosLinks() {
    document.querySelectorAll('a[data-seccion]').forEach(enlace => {
        enlace.onclick = (e) => {
            e.preventDefault();
            const sec = enlace.getAttribute('data-seccion');
            actualizarPagina(sec);
        };
    });
}
function asignarEventosLinks() {
    // Ahora busca CUALQUIER elemento (enlaces o botones) que tenga data-seccion
    document.querySelectorAll('[data-seccion]').forEach(elemento => {
        elemento.onclick = (e) => {
            e.preventDefault();
            const sec = elemento.getAttribute('data-seccion');
            actualizarPagina(sec);
        };
    });
}
}
// Iniciar eventos
asignarEventosLinks();

// Función para cambiar el contenido
document.querySelectorAll('.submenu a, .second-submenu a').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        const seccion = e.target.getAttribute('data-seccion');
        if(contenidos[seccion]) {
            document.querySelector('.text-container h1').innerText = contenidos[seccion].titulo;
            document.querySelector('.text-container p').innerText = contenidos[seccion].texto;
        }
    });
});