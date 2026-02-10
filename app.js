// Base de datos de palabras
const vocabulary = [
    // Cocina
    { id: 1, category: 'cocina', emoji: '🧊', es: 'nevera', ru: 'холодильник' },
    { id: 2, category: 'cocina', emoji: '❄️', es: 'congelador', ru: 'морозилка' },
    { id: 3, category: 'cocina', emoji: '🔥', es: 'horno', ru: 'духовка' },
    { id: 4, category: 'cocina', emoji: '🍲', es: 'microondas', ru: 'микроволновка' },
    { id: 5, category: 'cocina', emoji: '👨‍🍳', es: 'cocina / fogón', ru: 'плита' },
    { id: 6, category: 'cocina', emoji: '💧', es: 'fregadero', ru: 'раковина' },
    { id: 7, category: 'cocina', emoji: '🚰', es: 'grifo', ru: 'кран' },
    { id: 8, category: 'cocina', emoji: '🪑', es: 'mesa', ru: 'стол' },
    { id: 9, category: 'cocina', emoji: '💺', es: 'silla', ru: 'стул' },
    { id: 10, category: 'cocina', emoji: '🗄️', es: 'armario', ru: 'шкаф (кухонный)' },
    { id: 11, category: 'cocina', emoji: '📦', es: 'cajón', ru: 'ящик' },
    { id: 12, category: 'cocina', emoji: '🍳', es: 'sartén', ru: 'сковорода' },
    { id: 13, category: 'cocina', emoji: '🥘', es: 'olla', ru: 'кастрюля' },
    { id: 14, category: 'cocina', emoji: '🔪', es: 'cuchillo', ru: 'нож' },
    { id: 15, category: 'cocina', emoji: '🍴', es: 'tenedor', ru: 'вилка' },
    { id: 16, category: 'cocina', emoji: '🥄', es: 'cuchara', ru: 'ложка' },
    { id: 17, category: 'cocina', emoji: '🍽️', es: 'plato', ru: 'тарелка' },
    { id: 18, category: 'cocina', emoji: '🥛', es: 'vaso', ru: 'стакан' },
    { id: 19, category: 'cocina', emoji: '☕', es: 'taza', ru: 'чашка' },
    { id: 20, category: 'cocina', emoji: '🥕', es: 'tabla de cortar', ru: 'разделочная доска' },
    
    // Salón
    { id: 21, category: 'salon', emoji: '🛋️', es: 'sofá', ru: 'диван' },
    { id: 22, category: 'salon', emoji: '🪑', es: 'sillón', ru: 'кресло' },
    { id: 23, category: 'salon', emoji: '🪵', es: 'mesa de centro', ru: 'журнальный столик' },
    { id: 24, category: 'salon', emoji: '📚', es: 'estantería', ru: 'стеллаж/полка' },
    { id: 25, category: 'salon', emoji: '📺', es: 'televisor', ru: 'телевизор' },
    { id: 26, category: 'salon', emoji: '🎮', es: 'mando a distancia', ru: 'пульт' },
    { id: 27, category: 'salon', emoji: '💡', es: 'lámpara', ru: 'лампа' },
    { id: 28, category: 'salon', emoji: '🧶', es: 'alfombra', ru: 'ковёр' },
    { id: 29, category: 'salon', emoji: '🪟', es: 'cortinas', ru: 'шторы' },
    { id: 30, category: 'salon', emoji: '🛏️', es: 'cojín', ru: 'подушка (диванная)' },
    { id: 31, category: 'salon', emoji: '🖼️', es: 'cuadro', ru: 'картина' },
    { id: 32, category: 'salon', emoji: '🕰️', es: 'reloj', ru: 'часы' },
    { id: 33, category: 'salon', emoji: '🌿', es: 'planta', ru: 'растение' },
    
    // Dormitorio
    { id: 34, category: 'dormitorio', emoji: '🛏️', es: 'cama', ru: 'кровать' },
    { id: 35, category: 'dormitorio', emoji: '🛌', es: 'colchón', ru: 'матрас' },
    { id: 36, category: 'dormitorio', emoji: '🛌', es: 'almohada', ru: 'подушка' },
    { id: 37, category: 'dormitorio', emoji: '🧣', es: 'manta', ru: 'плед/одеяло' },
    { id: 38, category: 'dormitorio', emoji: '🛌', es: 'sábanas', ru: 'простыни' },
    { id: 39, category: 'dormitorio', emoji: '🚪', es: 'armario', ru: 'шкаф' },
    { id: 40, category: 'dormitorio', emoji: '👔', es: 'percha', ru: 'вешалка' },
    { id: 41, category: 'dormitorio', emoji: '🛏️', es: 'mesita de noche', ru: 'тумбочка' },
    { id: 42, category: 'dormitorio', emoji: '💡', es: 'lámpara de noche', ru: 'ночник' },
    { id: 43, category: 'dormitorio', emoji: '🪞', es: 'espejo', ru: 'зеркало' },
    
    // Baño
    { id: 44, category: 'bano', emoji: '🚿', es: 'ducha', ru: 'душ' },
    { id: 45, category: 'bano', emoji: '🛁', es: 'bañera', ru: 'ванна' },
    { id: 46, category: 'bano', emoji: '🚰', es: 'lavabo', ru: 'умывальник' },
    { id: 47, category: 'bano', emoji: '🚽', es: 'inodoro', ru: 'туалет' },
    { id: 48, category: 'bano', emoji: '🧺', es: 'toalla', ru: 'полотенце' },
    { id: 49, category: 'bano', emoji: '🧻', es: 'papel higiénico', ru: 'туалетная бумага' },
    { id: 50, category: 'bano', emoji: '🧼', es: 'jabón', ru: 'мыло' },
    { id: 51, category: 'bano', emoji: '🧴', es: 'champú', ru: 'шампунь' },
    { id: 52, category: 'bano', emoji: '🪥', es: 'cepillo de dientes', ru: 'зубная щётка' },
    { id: 53, category: 'bano', emoji: '🦷', es: 'pasta de dientes', ru: 'зубная паста' },
    
    // Limpieza / Utilidad
    { id: 54, category: 'limpieza', emoji: '🧹', es: 'aspiradora', ru: 'пылесос' },
    { id: 55, category: 'limpieza', emoji: '🧹', es: 'escoba', ru: 'метла' },
    { id: 56, category: 'limpieza', emoji: '🧹', es: 'recogedor', ru: 'совок' },
    { id: 57, category: 'limpieza', emoji: '🧽', es: 'fregona', ru: 'швабра' },
    { id: 58, category: 'limpieza', emoji: '🪣', es: 'cubo', ru: 'ведро' },
    { id: 59, category: 'limpieza', emoji: '🧴', es: 'detergente', ru: 'средство для стирки/моющее' },
    { id: 60, category: 'limpieza', emoji: '🧽', es: 'esponja', ru: 'губка' },
    { id: 61, category: 'limpieza', emoji: '🧻', es: 'trapo', ru: 'тряпка' },
    { id: 62, category: 'limpieza', emoji: '🧺', es: 'plancha', ru: 'утюг' },
    { id: 63, category: 'limpieza', emoji: '👔', es: 'tabla de planchar', ru: 'гладильная доска' }
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
    if (!word) {
        document.getElementById('card-emoji').textContent = '🏠';
        document.getElementById('card-word').textContent = 'No hay palabras en esta categoría';
        document.getElementById('card-translation').textContent = '';
        document.getElementById('card-translation').classList.add('hidden');
        document.getElementById('show-translation-btn').classList.add('hidden');
        document.querySelector('.card-feedback').classList.add('hidden');
        return;
    }
    
    document.getElementById('card-emoji').textContent = word.emoji;
    
    if (AppState.currentDirection === 'es-ru') {
        document.getElementById('card-word').textContent = word.es;
        document.getElementById('card-translation').textContent = word.ru;
    } else {
        document.getElementById('card-word').textContent = word.ru;
        document.getElementById('card-translation').textContent = word.es;
    }
    
    document.getElementById('card-translation').classList.add('hidden');
    document.getElementById('show-translation-btn').classList.remove('hidden');
    document.querySelector('.card-feedback').classList.remove('hidden');
    
    updateProgress();
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
        document.getElementById('quiz-emoji').textContent = '🏠';
        document.getElementById('quiz-question').textContent = 'No hay palabras en esta categoría';
        document.getElementById('quiz-options').innerHTML = '';
        document.getElementById('quiz-feedback').classList.add('hidden');
        return;
    }
    
    AppState.quiz.currentQuestion = word;
    AppState.quiz.answered = false;
    AppState.quiz.correctAnswerId = word.id;
    
    document.getElementById('quiz-emoji').textContent = word.emoji;
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
        ? `¡Correcto! ${AppState.quiz.currentQuestion.es} significa "${AppState.quiz.currentQuestion.ru}"`
        : `Incorrecto. La respuesta correcta es: ${AppState.quiz.currentQuestion.es} - "${AppState.quiz.currentQuestion.ru}"`;
    
    document.getElementById('feedback-text').textContent = feedbackText;
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
                <div class="difficult-word-emoji">${word.emoji}</div>
                <div class="difficult-word-text">
                    <strong>${word.es}</strong> - ${word.ru}
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
