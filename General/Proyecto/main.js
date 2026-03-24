// Objeto con el contenido de la Wiki
const contenidos = {
    "inicio": {
        titulo: "¡Bienvenido a Grounded Wiki!",
        texto: `Una wiki para la franquicia Grounded de Obsidian Entertainment. Encogido al tamaño de una hormiga, debes sobrevivir 
                al hermoso pero peligroso micromundo. ¡Progresa a través de misiones basadas en historias, explora el mundo del juego 
                intrincadamente detallado, busca recursos que salven vidas y defiéndete de una gran cantidad de criaturas impredecibles!`
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
                todas las herramientas fabricables del juego.`
    },
    "armas": {
        titulo: ""
    },
    "armadura":{
        titulo: "Armadura",
        texto: `Armadura se utiliza para defenderse de los diversos peligros presentes en el patio interior. Se pueden crear diferentes tipos de piezas 
            de armadura a partir de recursos como bellotas, incluidas algunas que proporcionan diversos efectos de estado como resistencia mejorada, fuerza 
            de arrastre o reducción de daños. Todos los conjuntos de armaduras de 3 piezas tienen una bonificación que se activa cuando el jugador usa el 
            conjunto completo. Al igual que las armas, todas las armaduras se pueden mejorar en el Estación de herrería heredar una defensa más fuerte y 
            durabilidad, así como la posibilidad de un efecto único si el jugador elige el camino Sleek.`
    }
};

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