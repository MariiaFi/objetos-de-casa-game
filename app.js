// Base de datos de palabras con pistas en lugar de emojis
const vocabulary = [
    // Cocina
    { 
        id: 1, 
        category: 'cocina', 
        hint: "¿Qué aparato enfría los alimentos para conservarlos?", 
        additionalHint: "Se encuentra en la cocina y tiene una puerta grande. Suele ser blanco o de acero inoxidable.",
        es: 'nevera', 
        ru: 'холодильник' 
    },
    { 
        id: 2, 
        category: 'cocina', 
        hint: "¿Dónde se congelan los alimentos para conservarlos por más tiempo?", 
        additionalHint: "Parte de la nevera donde la temperatura es inferior a 0°C. Ahí se guarda el hielo.",
        es: 'congelador', 
        ru: 'морозилка' 
    },
    { 
        id: 3, 
        category: 'cocina', 
        hint: "¿En qué se hornean pasteles, pizzas y otros alimentos?", 
        additionalHint: "Aparato que genera calor para cocinar alimentos. A veces tiene una luz interior.",
        es: 'horno', 
        ru: 'духовка' 
    },
    { 
        id: 4, 
        category: 'cocina', 
        hint: "¿Qué aparato calienta la comida rápidamente usando ondas electromagnéticas?", 
        additionalHint: "Electrodoméstico pequeño que calienta alimentos en minutos. Tiene un plato giratorio.",
        es: 'microondas', 
        ru: 'микроволновка' 
    },
    { 
        id: 5, 
        category: 'cocina', 
        hint: "¿Dónde se cocinan los alimentos usando fuego o electricidad?", 
        additionalHint: "Tiene varias hornillas o placas calientes. Puede ser de gas o eléctrica.",
        es: 'cocina / fogón', 
        ru: 'плита' 
    },
    { 
        id: 6, 
        category: 'cocina', 
        hint: "¿Dónde se lavan los platos y utensilios de cocina?", 
        additionalHint: "Recipiente con desagüe, generalmente de acero inoxidable o cerámica.",
        es: 'fregadero', 
        ru: 'раковина' 
    },
    { 
        id: 7, 
        category: 'cocina', 
        hint: "¿Por dónde sale el agua en el fregadero o lavabo?", 
        additionalHint: "Dispositivo metálico que controla el flujo de agua. Puede ser fría o caliente.",
        es: 'grifo', 
        ru: 'кран' 
    },
    { 
        id: 8, 
        category: 'cocina', 
        hint: "¿Dónde se colocan los platos para comer?", 
        additionalHint: "Mueble con patas y una superficie plana. Puede ser de madera, vidrio o plástico.",
        es: 'mesa', 
        ru: 'стол' 
    },
    { 
        id: 9, 
        category: 'cocina', 
        hint: "¿En qué mueble te sientas para comer en la mesa?", 
        additionalHint: "Tiene cuatro patas y un respaldo. Suele acompañar a la mesa.",
        es: 'silla', 
        ru: 'стул' 
    },
    { 
        id: 10, 
        category: 'cocina', 
        hint: "¿Dónde se guardan los alimentos, platos y utensilios de cocina?", 
        additionalHint: "Mueble alto con puertas y estantes. Suele estar empotrado en la pared.",
        es: 'armario', 
        ru: 'шкаф (кухонный)' 
    },
    { 
        id: 11, 
        category: 'cocina', 
        hint: "¿Qué parte del mueble se desliza para guardar cubiertos y utensilios?", 
        additionalHint: "Compartimento que se abre tirando de él. Tiene un tirador o manija.",
        es: 'cajón', 
        ru: 'ящик' 
    },
    { 
        id: 12, 
        category: 'cocina', 
        hint: "¿En qué se fríen huevos, carne o verduras?", 
        additionalHint: "Utensilio de cocina con mango largo y superficie redonda. Suele ser antiadherente.",
        es: 'sartén', 
        ru: 'сковорода' 
    },
    { 
        id: 13, 
        category: 'cocina', 
        hint: "¿En qué se cocinan sopas, guisos y pasta?", 
        additionalHint: "Recipiente profundo con tapa y dos asas. Puede ser de acero, aluminio o barro.",
        es: 'olla', 
        ru: 'кастрюля' 
    },
    { 
        id: 14, 
        category: 'cocina', 
        hint: "¿Qué utensilio afilado se usa para cortar alimentos?", 
        additionalHint: "Tiene una hoja de metal y un mango. Se debe usar con cuidado.",
        es: 'cuchillo', 
        ru: 'нож' 
    },
    { 
        id: 15, 
        category: 'cocina', 
        hint: "¿Qué utensilio con dientes se usa para pinchar y llevar alimentos a la boca?", 
        additionalHint: "Tiene tres o cuatro puntas. Se usa junto con el cuchillo y la cuchara.",
        es: 'tenedor', 
        ru: 'вилка' 
    },
    { 
        id: 16, 
        category: 'cocina', 
        hint: "¿Qué utensilio cóncavo se usa para comer sopa o llevar alimentos líquidos?", 
        additionalHint: "Tiene una parte hueca redondeada y un mango. Puede ser de metal o plástico.",
        es: 'cuchara', 
        ru: 'ложка' 
    },
    { 
        id: 17, 
        category: 'cocina', 
        hint: "¿En qué se sirve la comida para comer?", 
        additionalHint: "Superficie circular ligeramente cóncava. Puede ser de cerámica, porcelana o plástico.",
        es: 'plato', 
        ru: 'тарелка' 
    },
    { 
        id: 18, 
        category: 'cocina', 
        hint: "¿En qué se sirven bebidas como agua o jugo?", 
        additionalHint: "Recipiente de vidrio o plástico sin asas. Suele ser cilíndrico y transparente.",
        es: 'vaso', 
        ru: 'стакан' 
    },
    { 
        id: 19, 
        category: 'cocina', 
        hint: "¿En qué se sirve café, té u otras bebidas calientes?", 
        additionalHint: "Recipiente con asa. Puede ser de cerámica, porcelana o vidrio.",
        es: 'taza', 
        ru: 'чашка' 
    },
    { 
        id: 20, 
        category: 'cocina', 
        hint: "¿Sobre qué superficie se cortan verduras, carne o pan?", 
        additionalHint: "Tabla de madera o plástico que protege la encimera. Se limpia después de cada uso.",
        es: 'tabla de cortar', 
        ru: 'разделочная доска' 
    },
    
    // Salón
    { 
        id: 21, 
        category: 'salon', 
        hint: "¿Dónde se sientan varias personas en el salón para ver la televisión o conversar?", 
        additionalHint: "Mueble grande y cómodo para sentarse. Suele tener cojines y espacio para varias personas.",
        es: 'sofá', 
        ru: 'диван' 
    },
    { 
        id: 22, 
        category: 'salon', 
        hint: "¿Qué mueble individual y cómodo para sentarse hay en el salón?", 
        additionalHint: "Similar al sofá pero para una sola persona. Suele ser más acolchado.",
        es: 'sillón', 
        ru: 'кресло' 
    },
    { 
        id: 23, 
        category: 'salon', 
        hint: "¿Qué mueble bajo está delante del sofá y sirve para poner libros o la televisión?", 
        additionalHint: "Mesa pequeña que se coloca en el centro de la sala. Suele tener estantes o cajones.",
        es: 'mesa de centro', 
        ru: 'журнальный столик' 
    },
    { 
        id: 24, 
        category: 'salon', 
        hint: "¿Dónde se colocan libros, fotos y objetos decorativos?", 
        additionalHint: "Mueble con varias repisas horizontales. Puede estar fijo a la pared o ser independiente.",
        es: 'estantería', 
        ru: 'стеллаж/полка' 
    },
    { 
        id: 25, 
        category: 'salon', 
        hint: "¿Qué aparato electrónico se ve en el salón para películas y programas?", 
        additionalHint: "Pantalla plana o curva que muestra imágenes y sonido. Puede ser LCD, LED o plasma.",
        es: 'televisor', 
        ru: 'телевизор' 
    },
    { 
        id: 26, 
        category: 'salon', 
        hint: "¿Con qué dispositivo se cambian los canales del televisor sin levantarse?", 
        additionalHint: "Pequeño aparato con botones que envía señales infrarrojas. Necesita pilas.",
        es: 'mando a distancia', 
        ru: 'пульт' 
    },
    { 
        id: 27, 
        category: 'salon', 
        hint: "¿Qué dispositivo da luz en el salón cuando está oscuro?", 
        additionalHint: "Puede ser de techo, de pie o de mesa. Usa bombillas LED o incandescentes.",
        es: 'lámpara', 
        ru: 'лампа' 
    },
    { 
        id: 28, 
        category: 'salon', 
        hint: "¿Qué cubre el suelo del salón para dar calidez y confort?", 
        additionalHint: "Tejido grueso que se extiende por el suelo. Puede tener diversos diseños y colores.",
        es: 'alfombra', 
        ru: 'ковёр' 
    },
    { 
        id: 29, 
        category: 'salon', 
        hint: "¿Qué tela cubre las ventanas para dar privacidad y controlar la luz?", 
        additionalHint: "Pueden ser de tela, persianas o estores. Se abren y cierran según la necesidad.",
        es: 'cortinas', 
        ru: 'шторы' 
    },
    { 
        id: 30, 
        category: 'salon', 
        hint: "¿Qué objeto blando y pequeño se coloca en el sofá para apoyar la espalda o la cabeza?", 
        additionalHint: "Relleno de plumas, espuma o fibra. Suele tener fundas intercambiables.",
        es: 'cojín', 
        ru: 'подушка (диванная)' 
    },
    { 
        id: 31, 
        category: 'salon', 
        hint: "¿Qué objeto decorativo con marco se cuelga en la pared?", 
        additionalHint: "Representación artística en lienzo o papel. Puede ser una pintura, fotografía o impresión.",
        es: 'cuadro', 
        ru: 'картина' 
    },
    { 
        id: 32, 
        category: 'salon', 
        hint: "¿Qué objeto muestra la hora y suele colgarse en la pared o ponerse sobre un mueble?", 
        additionalHint: "Puede ser analógico (con manecillas) o digital (con números). Funciona con pilas o electricidad.",
        es: 'reloj', 
        ru: 'часы' 
    },
    { 
        id: 33, 
        category: 'salon', 
        hint: "¿Qué ser vivo natural decora el salón y ayuda a purificar el aire?", 
        additionalHint: "Organismo verde que necesita luz y agua. Puede estar en maceta o jarrón.",
        es: 'planta', 
        ru: 'растение' 
    },
    
    // Dormitorio
    { 
        id: 34, 
        category: 'dormitorio', 
        hint: "¿Dónde se duerme por la noche?", 
        additionalHint: "Mueble con colchón, almohadas y sábanas. Suele tener cabecero y puede ser individual o doble.",
        es: 'cama', 
        ru: 'кровать' 
    },
    { 
        id: 35, 
        category: 'dormitorio', 
        hint: "¿Qué parte blanda y gruesa de la cama proporciona comodidad para dormir?", 
        additionalHint: "Colchón rectangular que se coloca sobre el somier. Puede ser de muelles, espuma o látex.",
        es: 'colchón', 
        ru: 'матрас' 
    },
    { 
        id: 36, 
        category: 'dormitorio', 
        hint: "¿Qué objeto blando se pone bajo la cabeza al dormir?", 
        additionalHint: "Relleno suave que soporta la cabeza y el cuello. Suele tener funda.",
        es: 'almohada', 
        ru: 'подушка' 
    },
    { 
        id: 37, 
        category: 'dormitorio', 
        hint: "¿Qué tela cálida se pone sobre la cama cuando hace frío?", 
        additionalHint: "Cubierta de lana, algodón o material sintético. Puede ser ligera o gruesa.",
        es: 'manta', 
        ru: 'плед/одеяло' 
    },
    { 
        id: 38, 
        category: 'dormitorio', 
        hint: "¿Qué telas de cama cubren el colchón y se cambian regularmente?", 
        additionalHint: "Conjunto de telas que incluyen sábana bajera y sábana encimera. Suelen ser de algodón.",
        es: 'sábanas', 
        ru: 'простыни' 
    },
    { 
        id: 39, 
        category: 'dormitorio', 
        hint: "¿Dónde se guarda la ropa en el dormitorio?", 
        additionalHint: "Mueble alto con puertas, perchas y estantes. Puede ser empotrado o independiente.",
        es: 'armario', 
        ru: 'шкаф' 
    },
    { 
        id: 40, 
        category: 'dormitorio', 
        hint: "¿En qué se cuelgan camisas, abrigos y pantalones?", 
        additionalHint: "Objeto de plástico, madera o metal con forma de gancho. Se coloca en el armario.",
        es: 'percha', 
        ru: 'вешалка' 
    },
    { 
        id: 41, 
        category: 'dormitorio', 
        hint: "¿Qué mueble pequeño está al lado de la cama para poner un libro o un vaso de agua?", 
        additionalHint: "Mesa baja con uno o varios cajones. Suele tener una lámpara encima.",
        es: 'mesita de noche', 
        ru: 'тумбочка' 
    },
    { 
        id: 42, 
        category: 'dormitorio', 
        hint: "¿Qué luz suave se enciende en la mesita de noche para leer o orientarse por la noche?", 
        additionalHint: "Lámpara pequeña con luz tenue. Puede tener interruptor táctil o de cadena.",
        es: 'lámpara de noche', 
        ru: 'ночник' 
    },
    { 
        id: 43, 
        category: 'dormitorio', 
        hint: "¿Qué objeto reflectante muestra tu imagen?", 
        additionalHint: "Superficie de vidrio con backing reflectante. Puede estar en la pared o sobre un mueble.",
        es: 'espejo', 
        ru: 'зеркало' 
    },
    
    // Baño
    { 
        id: 44, 
        category: 'bano', 
        hint: "¿Dónde te lavas de pie con agua que cae desde arriba?", 
        additionalHint: "Espacio con plato de ducha o mampara. Tiene un cabezal que distribuye el agua.",
        es: 'ducha', 
        ru: 'душ' 
    },
    { 
        id: 45, 
        category: 'bano', 
        hint: "¿Dónde te bañas sentado o acostado en agua?", 
        additionalHint: "Recipiente grande para llenar con agua. Suele ser de porcelana o acrílico.",
        es: 'bañera', 
        ru: 'ванна' 
    },
    { 
        id: 46, 
        category: 'bano', 
        hint: "¿Dónde te lavas las manos y la cara?", 
        additionalHint: "Recipiente con grifo(s). Suele tener espejo encima y espacio para productos de higiene.",
        es: 'lavabo', 
        ru: 'умывальник' 
    },
    { 
        id: 47, 
        category: 'bano', 
        hint: "¿Qué instalación sanitaria se usa para necesidades fisiológicas?", 
        additionalHint: "Aparato blanco con tapa y asiento. Tiene un mecanismo de descarga de agua.",
        es: 'inodoro', 
        ru: 'туалет' 
    },
    { 
        id: 48, 
        category: 'bano', 
        hint: "¿Con qué te secas después de ducharte o lavarte las manos?", 
        additionalHint: "Tela absorbente de algodón o microfibra. Suele colgarse en una toallero.",
        es: 'toalla', 
        ru: 'полотенце' 
    },
    { 
        id: 49, 
        category: 'bano', 
        hint: "¿Qué producto en rollo se usa para la higiene personal después de usar el inodoro?", 
        additionalHint: "Papel suave y absorbente que se coloca en un portarrollos. Es desechable.",
        es: 'papel higiénico', 
        ru: 'туалетная бумага' 
    },
    { 
        id: 50, 
        category: 'bano', 
        hint: "¿Qué producto sólido o líquido se usa para lavarse las manos?", 
        additionalHint: "Puede ser en pastilla, gel o líquido. Hace espuma al contacto con agua.",
        es: 'jabón', 
        ru: 'мыло' 
    },
    { 
        id: 51, 
        category: 'bano', 
        hint: "¿Qué producto líquido se usa para lavar el cabello?", 
        additionalHint: "Se aplica sobre el pelo mojado, se masajea y se enjuaga. Puede ser para diferentes tipos de cabello.",
        es: 'champú', 
        ru: 'шампунь' 
    },
    { 
        id: 52, 
        category: 'bano', 
        hint: "¿Con qué utensilio limpias tus dientes?", 
        additionalHint: "Tiene un mango y cerdas. Se usa con pasta de dientes dos o tres veces al día.",
        es: 'cepillo de dientes', 
        ru: 'зубная щётка' 
    },
    { 
        id: 53, 
        category: 'bano', 
        hint: "¿Qué crema se usa con el cepillo de dientes para limpiar los dientes?", 
        additionalHint: "Pasta con flúor que puede ser blanca o de colores. Deja una sensación de frescor.",
        es: 'pasta de dientes', 
        ru: 'зубная паста' 
    },
    
    // Limpieza / Utilidad
    { 
        id: 54, 
        category: 'limpieza', 
        hint: "¿Qué aparato eléctrico aspira el polvo del suelo?", 
        additionalHint: "Tiene un motor que genera succión y una bolsa o depósito para recoger la suciedad.",
        es: 'aspiradora', 
        ru: 'пылесос' 
    },
    { 
        id: 55, 
        category: 'limpieza', 
        hint: "¿Con qué se barre el suelo manualmente?", 
        additionalHint: "Utensilio con un mango largo y cerdas en un extremo. Recoge polvo y suciedad.",
        es: 'escoba', 
        ru: 'метла' 
    },
    { 
        id: 56, 
        category: 'limpieza', 
        hint: "¿Qué utensilio acompaña a la escoba para recoger la basura barrida?", 
        additionalHint: "Tiene un mango y una pala plana. Se usa junto con la escoba.",
        es: 'recogedor', 
        ru: 'совок' 
    },
    { 
        id: 57, 
        category: 'limpieza', 
        hint: "¿Con qué se friegan y secan los suelos?", 
        additionalHint: "Utensilio con un palo y una cabeza de tela o microfibra. Se usa con agua y detergente.",
        es: 'fregona', 
        ru: 'швабра' 
    },
    { 
        id: 58, 
        category: 'limpieza', 
        hint: "¿En qué se lleva el agua para fregar el suelo o se tira la basura?", 
        additionalHint: "Recipiente cilíndrico con asa. Puede ser de plástico o metal.",
        es: 'cubo', 
        ru: 'ведро' 
    },
    { 
        id: 59, 
        category: 'limpieza', 
        hint: "¿Qué producto químico se usa para lavar la ropa en la lavadora?", 
        additionalHint: "Puede ser líquido, en polvo o cápsulas. Elimina manchas y malos olores.",
        es: 'detergente', 
        ru: 'средство для стирки/моющее' 
    },
    { 
        id: 60, 
        category: 'limpieza', 
        hint: "¿Con qué objeto poroso se lava la vajilla?", 
        additionalHint: "Material amarillo que retiene agua y jabón. Tiene dos texturas: una suave y otra abrasiva.",
        es: 'esponja', 
        ru: 'губка' 
    },
    { 
        id: 61, 
        category: 'limpieza', 
        hint: "¿Con qué tela se limpian superficies como mesas o estantes?", 
        additionalHint: "Pedazo de tela vieja o de microfibra. Se humedece para atrapar el polvo.",
        es: 'trapo', 
        ru: 'тряпка' 
    },
    { 
        id: 62, 
        category: 'limpieza', 
        hint: "¿Qué electrodoméstico se usa para eliminar arrugas de la ropa?", 
        additionalHint: "Aparato con suela caliente y cable. Se desliza sobre la tela con vapor o en seco.",
        es: 'plancha', 
        ru: 'утюг' 
    },
    { 
        id: 63, 
        category: 'limpieza', 
        hint: "¿Sobre qué superficie se plancha la ropa?", 
        additionalHint: "Tabla plegable con superficie acolchada. Tiene ajuste de altura.",
        es: 'tabla de planchar', 
        ru: 'гладильная доска' 
    }
];

// Estado de la aplicación
const AppState = {
    currentMode: 'flashcards',
    currentDirection: 'es-ru',
    currentCategory: 'all',
    currentWordIndex: -1,
    previousWordIndex: -1,
    
    // Estadísticas
    stats: {
        totalPracticed: 0,
        totalCorrect: 0,
        totalIncorrect: 0,
        currentStreak: 0,
        bestStreak: 0,
        wordStats: {}, // {wordId: {correct: X, incorrect: Y}}
        practicedWords: new Set()
    },
    
    // Estado del quiz
    quiz: {
        currentQuestion: null,
        options: [],
        correctAnswerId: null,
        answered: false
    }
};

// Inicialización de localStorage
function initStorage() {
    if (!localStorage.getItem('objetosDeCasaStats')) {
        localStorage.setItem('objetosDeCasaStats', JSON.stringify(AppState.stats));
    } else {
        const savedStats = JSON.parse(localStorage.getItem('objetosDeCasaStats'));
        // Convertir practicedWords de array a Set si es necesario
        if (savedStats.practicedWords && Array.isArray(savedStats.practicedWords)) {
            savedStats.practicedWords = new Set(savedStats.practicedWords);
        }
        AppState.stats = savedStats;
    }
    
    // Cargar preferencias
    const savedMode = localStorage.getItem('objetosDeCasaMode');
    const savedDirection = localStorage.getItem('objetosDeCasaDirection');
    const savedCategory = localStorage.getItem('objetosDeCasaCategory');
    
    if (savedMode) AppState.currentMode = savedMode;
    if (savedDirection) AppState.currentDirection = savedDirection;
    if (savedCategory) AppState.currentCategory = savedCategory;
}

// Guardar estadísticas en localStorage
function saveStats() {
    // Convertir Set a array para almacenamiento
    const statsToSave = {
        ...AppState.stats,
        practicedWords: Array.from(AppState.stats.practicedWords)
    };
    localStorage.setItem('objetosDeCasaStats', JSON.stringify(statsToSave));
}

// Guardar preferencias
function savePreferences() {
    localStorage.setItem('objetosDeCasaMode', AppState.currentMode);
    localStorage.setItem('objetosDeCasaDirection', AppState.currentDirection);
    localStorage.setItem('objetosDeCasaCategory', AppState.currentCategory);
}

// Obtener vocabulario filtrado por categoría
function getFilteredVocabulary() {
    if (AppState.currentCategory === 'all') {
        return vocabulary;
    }
    return vocabulary.filter(word => word.category === AppState.currentCategory);
}

// Obtener una palabra aleatoria (evitando la anterior)
function getRandomWord() {
    const filteredVocab = getFilteredVocabulary();
    if (filteredVocab.length === 0) return null;
    
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * filteredVocab.length);
    } while (filteredVocab.length > 1 && newIndex === AppState.previousWordIndex);
    
    AppState.previousWordIndex = AppState.currentWordIndex;
    AppState.currentWordIndex = newIndex;
    
    return filteredVocab[newIndex];
}

// Mostrar tarjeta en modo flashcards
function showFlashcard() {
    const word = getRandomWord();
    
    // Ocultar pistas adicionales inicialmente
    document.getElementById('additional-hint').classList.add('hidden');
    document.getElementById('show-hint-btn').classList.remove('hidden');
    
    if (!word) {
        document.getElementById('question-hint').textContent = 'No hay palabras en esta categoría';
        document.getElementById('card-word').textContent = 'Selecciona otra categoría';
        document.getElementById('card-translation').textContent = '';
        document.getElementById('card-translation').classList.add('hidden');
        document.getElementById('show-translation-btn').classList.add('hidden');
        document.querySelector('.card-feedback').classList.add('hidden');
        return;
    }
    
    // Mostrar pista principal
    document.getElementById('question-hint').textContent = word.hint;
    
    if (AppState.currentDirection === 'es-ru') {
        document.getElementById('card-word').textContent = word.es;
        document.getElementById('card-translation').textContent = word.ru;
    } else {
        document.getElementById('card-word').textContent = word.ru;
        document.getElementById('card-translation').textContent = word.es;
    }
    
    // Guardar pista adicional para mostrarla después
    document.getElementById('additional-hint').textContent = word.additionalHint;
    
    document.getElementById('card-translation').classList.add('hidden');
    document.getElementById('show-translation-btn').classList.remove('hidden');
    document.querySelector('.card-feedback').classList.remove('hidden');
    
    updateProgress();
}

// Mostrar pista adicional
function showAdditionalHint() {
    document.getElementById('additional-hint').classList.remove('hidden');
    document.getElementById('show-hint-btn').classList.add('hidden');
}

// Actualizar barra de progreso
function updateProgress() {
    const filteredVocab = getFilteredVocabulary();
    const practicedCount = Array.from(AppState.stats.practicedWords).filter(id => {
        const word = vocabulary.find(w => w.id === id);
        return !word || filteredVocab.includes(word);
    }).length;
    
    const total = filteredVocab.length;
    const percentage = total > 0 ? Math.round((practicedCount / total) * 100) : 0;
    
    document.getElementById('progress-text').textContent = `${practicedCount}/${total}`;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

// Mostrar pregunta en modo quiz
function showQuizQuestion() {
    const word = getRandomWord();
    if (!word) {
        document.getElementById('quiz-question-hint').textContent = 'No hay palabras en esta categoría';
        document.getElementById('quiz-question').textContent = 'Selecciona otra categoría';
        document.getElementById('quiz-options').innerHTML = '';
        document.getElementById('quiz-feedback').classList.add('hidden');
        return;
    }
    
    AppState.quiz.currentQuestion = word;
    AppState.quiz.answered = false;
    AppState.quiz.correctAnswerId = word.id;
    
    // Mostrar pista
    document.getElementById('quiz-question-hint').textContent = word.hint;
    document.getElementById('quiz-question').textContent = '¿Cómo se llama esto?';
    
    // Generar opciones (1 correcta + 3 incorrectas)
    const filteredVocab = getFilteredVocabulary();
    const options = [word];
    
    // Seleccionar 3 palabras incorrectas de la misma categoría
    const otherWords = filteredVocab.filter(w => w.id !== word.id);
    for (let i = 0; i < 3 && i < otherWords.length; i++) {
        const randomIndex = Math.floor(Math.random() * otherWords.length);
        options.push(otherWords[randomIndex]);
        otherWords.splice(randomIndex, 1);
    }
    
    // Mezclar opciones
    options.sort(() => Math.random() - 0.5);
    AppState.quiz.options = options;
    
    // Mostrar opciones
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = AppState.currentDirection === 'es-ru' ? option.es : option.ru;
        button.dataset.wordId = option.id;
        button.addEventListener('click', () => checkQuizAnswer(option.id));
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('quiz-feedback').classList.add('hidden');
}

// Verificar respuesta en quiz
function checkQuizAnswer(selectedId) {
    if (AppState.quiz.answered) return;
    
    AppState.quiz.answered = true;
    const isCorrect = selectedId === AppState.quiz.correctAnswerId;
    
    // Actualizar estadísticas
    updateWordStats(AppState.quiz.currentQuestion.id, isCorrect);
    AppState.stats.totalPracticed++;
    
    if (isCorrect) {
        AppState.stats.totalCorrect++;
        AppState.stats.currentStreak++;
        if (AppState.stats.currentStreak > AppState.stats.bestStreak) {
            AppState.stats.bestStreak = AppState.stats.currentStreak;
        }
    } else {
        AppState.stats.totalIncorrect++;
        AppState.stats.currentStreak = 0;
    }
    
    // Marcar palabra como practicada
    AppState.stats.practicedWords.add(AppState.quiz.currentQuestion.id);
    
    // Mostrar retroalimentación
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.classList.add('disabled');
        if (parseInt(option.dataset.wordId) === AppState.quiz.correctAnswerId) {
            option.classList.add('correct');
        } else if (parseInt(option.dataset.wordId) === selectedId) {
            option.classList.add('incorrect');
        }
    });
    
    const feedbackText = isCorrect 
        ? `¡Correcto! "${AppState.quiz.currentQuestion.es}" significa "${AppState.quiz.currentQuestion.ru}"`
        : `Incorrecto. La respuesta correcta es: "${AppState.quiz.currentQuestion.es}" - "${AppState.quiz.currentQuestion.ru}"`;
    
    document.getElementById('feedback-text').textContent = feedbackText;
    document.getElementById('hint-explanation').textContent = AppState.quiz.currentQuestion.additionalHint;
    document.getElementById('quiz-feedback').classList.remove('hidden');
    
    // Actualizar estadísticas en pantalla
    updateQuizStats();
    saveStats();
}

// Actualizar estadísticas del quiz
function updateQuizStats() {
    const accuracy = AppState.stats.totalPracticed > 0 
        ? Math.round((AppState.stats.totalCorrect / AppState.stats.totalPracticed) * 100) 
        : 0;
    
    document.getElementById('correct-count').textContent = AppState.stats.totalCorrect;
    document.getElementById('current-streak').textContent = AppState.stats.currentStreak;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
}

// Actualizar estadísticas de una palabra
function updateWordStats(wordId, isCorrect) {
    if (!AppState.stats.wordStats[wordId]) {
        AppState.stats.wordStats[wordId] = { correct: 0, incorrect: 0 };
    }
    
    if (isCorrect) {
        AppState.stats.wordStats[wordId].correct++;
    } else {
        AppState.stats.wordStats[wordId].incorrect++;
    }
}

// Mostrar estadísticas
function showStats() {
    const totalWords = vocabulary.length;
    const practicedCount = AppState.stats.practicedWords.size;
    const accuracy = AppState.stats.totalPracticed > 0 
        ? Math.round((AppState.stats.totalCorrect / AppState.stats.totalPracticed) * 100) 
        : 0;
    
    document.getElementById('total-words').textContent = `${practicedCount}/${totalWords}`;
    document.getElementById('total-accuracy').textContent = `${accuracy}%`;
    document.getElementById('best-streak').textContent = AppState.stats.bestStreak;
    
    // Mostrar palabras difíciles
    const difficultWords = getDifficultWords();
    const difficultWordsList = document.getElementById('difficult-words-list');
    const emptyState = document.getElementById('difficult-words-empty');
    
    difficultWordsList.innerHTML = '';
    
    if (difficultWords.length === 0) {
        emptyState.classList.remove('hidden');
        difficultWordsList.classList.add('hidden');
    } else {
        emptyState.classList.add('hidden');
        difficultWordsList.classList.remove('hidden');
        
        difficultWords.slice(0, 10).forEach(word => {
            const stats = AppState.stats.wordStats[word.id] || { correct: 0, incorrect: 0 };
            const totalAttempts = stats.correct + stats.incorrect;
            const errorRate = totalAttempts > 0 ? Math.round((stats.incorrect / totalAttempts) * 100) : 0;
            
            const li = document.createElement('li');
            li.className = 'difficult-word-item';
            li.innerHTML = `
                <div class="difficult-word-text">
                    <strong>${word.es}</strong> - ${word.ru}<br>
                    <small style="color: #666;">${word.hint}</small>
                </div>
                <div class="difficult-word-stats">${errorRate}% error</div>
            `;
            difficultWordsList.appendChild(li);
        });
    }
}

// Obtener palabras difíciles (más errores)
function getDifficultWords() {
    const wordsWithStats = vocabulary.map(word => {
        const stats = AppState.stats.wordStats[word.id] || { correct: 0, incorrect: 0 };
        const totalAttempts = stats.correct + stats.incorrect;
        const errorRate = totalAttempts > 0 ? stats.incorrect / totalAttempts : 0;
        
        return {
            ...word,
            errorRate,
            totalAttempts
        };
    });
    
    // Filtrar palabras con al menos un intento y ordenar por tasa de error
    return wordsWithStats
        .filter(word => word.totalAttempts > 0)
        .sort((a, b) => b.errorRate - a.errorRate);
}

// Reiniciar estadísticas
function resetStats() {
    if (confirm('¿Estás seguro de que quieres reiniciar todas las estadísticas? Esta acción no se puede deshacer.')) {
        AppState.stats = {
            totalPracticed: 0,
            totalCorrect: 0,
            totalIncorrect: 0,
            currentStreak: 0,
            bestStreak: 0,
            wordStats: {},
            practicedWords: new Set()
        };
        
        saveStats();
        showStats();
        
        if (AppState.currentMode === 'quiz') {
            updateQuizStats();
        } else if (AppState.currentMode === 'flashcards') {
            updateProgress();
        }
        
        alert('Estadísticas reiniciadas correctamente.');
    }
}

// Exportar datos
function exportStats() {
    const data = {
        stats: AppState.stats,
        vocabulary: vocabulary,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'objetos-de-casa-stats.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Cambiar modo de juego
function switchMode(mode) {
    AppState.currentMode = mode;
    
    // Ocultar todos los modos
    document.querySelectorAll('.game-mode').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    
    // Mostrar modo actual
    document.getElementById(`${mode}-mode`).classList.remove('hidden');
    document.getElementById(`${mode}-mode`).classList.add('active');
    
    // Actualizar pestañas activas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === `${mode}-mode`) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar selector
    document.getElementById('mode').value = mode;
    
    // Cargar contenido según modo
    if (mode === 'flashcards') {
        showFlashcard();
    } else if (mode === 'quiz') {
        showQuizQuestion();
        updateQuizStats();
    } else if (mode === 'stats') {
        showStats();
    }
    
    savePreferences();
}

// Inicializar la aplicación
function initApp() {
    initStorage();
    
    // Configurar elementos UI
    document.getElementById('mode').value = AppState.currentMode;
    document.getElementById('direction').value = AppState.currentDirection;
    document.getElementById('category').value = AppState.currentCategory;
    
    // Configurar eventos
    document.getElementById('mode').addEventListener('change', (e) => {
        switchMode(e.target.value);
    });
    
    document.getElementById('direction').addEventListener('change', (e) => {
        AppState.currentDirection = e.target.value;
        savePreferences();
        
        if (AppState.currentMode === 'flashcards') {
            showFlashcard();
        } else if (AppState.currentMode === 'quiz') {
            showQuizQuestion();
        }
    });
    
    document.getElementById('category').addEventListener('change', (e) => {
        AppState.currentCategory = e.target.value;
        savePreferences();
        
        if (AppState.currentMode === 'flashcards') {
            showFlashcard();
        } else if (AppState.currentMode === 'quiz') {
            showQuizQuestion();
        } else if (AppState.currentMode === 'stats') {
            showStats();
        }
    });
    
    // Botones de flashcards
    document.getElementById('show-translation-btn').addEventListener('click', () => {
        document.getElementById('card-translation').classList.remove('hidden');
    });
    
    document.getElementById('show-hint-btn').addEventListener('click', showAdditionalHint);
    
    document.getElementById('know-btn').addEventListener('click', () => {
        const currentWord = getFilteredVocabulary()[AppState.currentWordIndex];
        if (currentWord) {
            updateWordStats(currentWord.id, true);
            AppState.stats.practicedWords.add(currentWord.id);
            AppState.stats.totalPracticed++;
            AppState.stats.totalCorrect++;
            AppState.stats.currentStreak++;
            
            if (AppState.stats.currentStreak > AppState.stats.bestStreak) {
                AppState.stats.bestStreak = AppState.stats.currentStreak;
            }
            
            saveStats();
            updateProgress();
        }
        showFlashcard();
    });
    
    document.getElementById('dont-know-btn').addEventListener('click', () => {
        const currentWord = getFilteredVocabulary()[AppState.currentWordIndex];
        if (currentWord) {
            updateWordStats(currentWord.id, false);
            AppState.stats.practicedWords.add(currentWord.id);
            AppState.stats.totalPracticed++;
            AppState.stats.totalIncorrect++;
            AppState.stats.currentStreak = 0;
            
            saveStats();
            updateProgress();
        }
        showFlashcard();
    });
    
    // Botones de quiz
    document.getElementById('next-quiz-btn').addEventListener('click', () => {
        showQuizQuestion();
    });
    
    // Botones de estadísticas
    document.getElementById('reset-stats-btn').addEventListener('click', resetStats);
    document.getElementById('export-stats-btn').addEventListener('click', exportStats);
    
    // Pestañas de navegación
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            if (tab === 'stats-mode') {
                switchMode('stats');
            } else if (tab === 'quiz-mode') {
                switchMode('quiz');
            } else {
                switchMode('flashcards');
            }
        });
    });
    
    // Inicializar primer modo
    switchMode(AppState.currentMode);
}

// Iniciar la aplicación cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', initApp);
