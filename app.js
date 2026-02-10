// Italian Household Items Quiz Game
// A comprehensive educational tool for learning Italian household vocabulary

// Game state variables
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let questions = [];
let shuffledQuestions = [];
let gameDifficulty = "easy"; // easy, medium, hard
let userAnswers = []; // Track user answers for results
let soundEnabled = true; // Whether sound is enabled
let speechSynthesis = window.speechSynthesis;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const quitBtn = document.getElementById('quit-btn');
const restartBtn = document.getElementById('restart-btn');
const menuBtn = document.getElementById('menu-btn');
const reviewBtn = document.getElementById('review-btn');
const practiceBtn = document.getElementById('practice-btn');
const backToResults = document.getElementById('back-to-results');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const hintBtn = document.getElementById('hint-btn');
const hintModal = document.getElementById('hint-modal');
const closeHint = document.getElementById('close-hint');
const hintContent = document.getElementById('hint-content');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const finalScore = document.getElementById('final-score');
const finalTotal = document.getElementById('final-total');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const accuracy = document.getElementById('accuracy');
const resultMessage = document.getElementById('result-message');
const resultEmoji = document.getElementById('result-emoji');
const copyResultBtn = document.getElementById('copy-result');
const categoryBadge = document.getElementById('category-badge');
const itemIllustration = document.getElementById('item-illustration');
const speakBtn = document.getElementById('speak-btn');
const soundBtn = document.getElementById('sound-btn');
const categoryStats = document.getElementById('category-stats');
const vocabularyList = document.getElementById('vocabulary-list');
const mistakesList = document.getElementById('mistakes-list');

// Italian household items vocabulary dataset
// Each question includes a description in Italian, correct answer, and category
const questionDatabase = [
    // Kitchen items
    {
        id: 1,
        question_it: "Si usa per cucinare la pasta.",
        correct_it: "pentola",
        options_it: ["pentola", "forchetta", "tostapane", "frigorifero"],
        category: "kitchen",
        emoji: "🍳",
        hint: "Это используется для приготовления пасты. В русском это 'кастрюля' или 'кастрюлька'.",
        translation: "кастрюля"
    },
    {
        id: 2,
        question_it: "Si usa per tagliare il pane.",
        correct_it: "coltello",
        options_it: ["coltello", "cucchiaio", "piatto", "bicchiere"],
        category: "kitchen",
        emoji: "🔪",
        hint: "Это используется для нарезки хлеба. В русском это 'нож'.",
        translation: "нож"
    },
    {
        id: 3,
        question_it: "Si beve il caffè da questo.",
        correct_it: "tazzina",
        options_it: ["tazzina", "bicchiere", "tazza", "ciotola"],
        category: "kitchen",
        emoji: "☕",
        hint: "Из этого пьют кофе. В русском это 'чашка для кофе' или 'кофейная чашка'.",
        translation: "чашка для кофе"
    },
    {
        id: 4,
        question_it: "Elettrodomestico per conservare il cibo fresco.",
        correct_it: "frigorifero",
        options_it: ["frigorifero", "forno", "lavastoviglie", "tostapane"],
        category: "kitchen",
        emoji: "❄️",
        hint: "Бытовая техника для хранения свежих продуктов. В русском это 'холодильник'.",
        translation: "холодильник"
    },
    {
        id: 5,
        question_it: "Si usa per friggere le uova.",
        correct_it: "padella",
        options_it: ["padella", "pentola", "teglia", "casseruola"],
        category: "kitchen",
        emoji: "🍳",
        hint: "Это используется для жарки яиц. В русском это 'сковорода'.",
        translation: "сковорода"
    },
    
    // Living room items
    {
        id: 6,
        question_it: "Mobile per sedersi in salotto.",
        correct_it: "divano",
        options_it: ["divano", "sedia", "poltrona", "tavolo"],
        category: "living",
        emoji: "🛋️",
        hint: "Мебель для сидения в гостиной. В русском это 'диван' или 'софа'.",
        translation: "диван"
    },
    {
        id: 7,
        question_it: "Si guarda la televisione.",
        correct_it: "televisore",
        options_it: ["televisore", "computer", "telefono", "radio"],
        category: "living",
        emoji: "📺",
        hint: "На этом смотрят телевизор. В русском это 'телевизор'.",
        translation: "телевизор"
    },
    {
        id: 8,
        question_it: "Si appoggiano i libri su questo mobile.",
        correct_it: "libreria",
        options_it: ["libreria", "scrivania", "tavolino", "comodino"],
        category: "living",
        emoji: "📚",
        hint: "На этой мебели расставляют книги. В русском это 'книжный шкаф' или 'библиотека'.",
        translation: "книжный шкаф"
    },
    {
        id: 9,
        question_it: "Si accende per avere luce la sera.",
        correct_it: "lampada",
        options_it: ["lampada", "candela", "torcia", "abat-jour"],
        category: "living",
        emoji: "💡",
        hint: "Это включают, чтобы было светло вечером. В русском это 'лампа'.",
        translation: "лампа"
    },
    {
        id: 10,
        question_it: "Si appoggiano i piedi quando si è seduti.",
        correct_it: "poggiapiedi",
        options_it: ["poggiapiedi", "tappeto", "scaffale", "mensola"],
        category: "living",
        emoji: "🦶",
        hint: "На это ставят ноги, когда сидят. В русском это 'пуфик' или 'подставка для ног'.",
        translation: "подставка для ног"
    },
    
    // Bedroom items
    {
        id: 11,
        question_it: "Si dorme su questo.",
        correct_it: "letto",
        options_it: ["letto", "divano", "amaca", "brandina"],
        category: "bedroom",
        emoji: "🛏️",
        hint: "На этом спят. В русском это 'кровать'.",
        translation: "кровать"
    },
    {
        id: 12,
        question_it: "Mobile per riporre i vestiti.",
        correct_it: "armadio",
        options_it: ["armadio", "comò", "cassettone", "guardaroba"],
        category: "bedroom",
        emoji: "👗",
        hint: "Мебель для хранения одежды. В русском это 'шкаф' или 'гардероб'.",
        translation: "шкаф"
    },
    {
        id: 13,
        question_it: "Si appoggia accanto al letto.",
        correct_it: "comodino",
        options_it: ["comodino", "tavolino", "scrivania", "mensola"],
        category: "bedroom",
        emoji: "🛌",
        hint: "Ставится рядом с кроватью. В русском это 'прикроватная тумбочка'.",
        translation: "прикроватная тумбочка"
    },
    {
        id: 14,
        question_it: "Si sveglia al mattino con questo.",
        correct_it: "sveglia",
        options_it: ["sveglia", "orologio", "timer", "cronometro"],
        category: "bedroom",
        emoji: "⏰",
        hint: "Этим просыпаются утром. В русском это 'будильник'.",
        translation: "будильник"
    },
    {
        id: 15,
        question_it: "Si copre quando si ha freddo.",
        correct_it: "coperta",
        options_it: ["coperta", "cuscino", "lenzuolo", "trapunta"],
        category: "bedroom",
        emoji: "🛌",
        hint: "Этим укрываются, когда холодно. В русском это 'одеяло'.",
        translation: "одеяло"
    },
    
    // Bathroom items
    {
        id: 16,
        question_it: "Si fa la doccia qui.",
        correct_it: "doccia",
        options_it: ["doccia", "vasca", "lavandino", "water"],
        category: "bathroom",
        emoji: "🚿",
        hint: "Здесь принимают душ. В русском это 'душ'.",
        translation: "душ"
    },
    {
        id: 17,
        question_it: "Si lava il viso qui.",
        correct_it: "lavandino",
        options_it: ["lavandino", "doccia", "vasca", "bidet"],
        category: "bathroom",
        emoji: "🚰",
        hint: "Здесь умывают лицо. В русском это 'умывальник' или 'раковина'.",
        translation: "умывальник"
    },
    {
        id: 18,
        question_it: "Si asciuga il corpo dopo la doccia.",
        correct_it: "asciugamano",
        options_it: ["asciugamano", "tappeto", "accappatoio", "cencio"],
        category: "bathroom",
        emoji: "🧖",
        hint: "Этим вытирают тело после душа. В русском это 'полотенце'.",
        translation: "полотенце"
    },
    {
        id: 19,
        question_it: "Si guarda la propria immagine.",
        correct_it: "specchio",
        options_it: ["specchio", "finestra", "quadro", "foto"],
        category: "bathroom",
        emoji: "🪞",
        hint: "В это смотрят, чтобы увидеть своё отражение. В русском это 'зеркало'.",
        translation: "зеркало"
    },
    {
        id: 20,
        question_it: "Si fa il bucato con questa macchina.",
        correct_it: "lavatrice",
        options_it: ["lavatrice", "lavastoviglie", "asciugatrice", "frigorifero"],
        category: "bathroom",
        emoji: "🧺",
        hint: "В этой машине стирают бельё. В русском это 'стиральная машина'.",
        translation: "стиральная машина"
    },
    
    // Other household items
    {
        id: 21,
        question_it: "Si apre per entrare in casa.",
        correct_it: "porta",
        options_it: ["porta", "finestra", "cancello", "portone"],
        category: "other",
        emoji: "🚪",
        hint: "Это открывают, чтобы войти в дом. В русском это 'дверь'.",
        translation: "дверь"
    },
    {
        id: 22,
        question_it: "Si guarda fuori attraverso questo.",
        correct_it: "finestra",
        options_it: ["finestra", "porta", "specchio", "vetrata"],
        category: "other",
        emoji: "🪟",
        hint: "Через это смотрят на улицу. В русском это 'окно'.",
        translation: "окно"
    },
    {
        id: 23,
        question_it: "Si sale al piano di sopra.",
        correct_it: "scala",
        options_it: ["scala", "ascensore", "rampa", "scale"],
        category: "other",
        emoji: "📶",
        hint: "По этому поднимаются наверх. В русском это 'лестница'.",
        translation: "лестница"
    },
    {
        id: 24,
        question_it: "Si appoggia sul pavimento.",
        correct_it: "tappeto",
        options_it: ["tappeto", "moquette", "pavimento", "parquet"],
        category: "other",
        emoji: "🧶",
        hint: "Это кладут на пол. В русском это 'ковёр'.",
        translation: "ковёр"
    },
    {
        id: 25,
        question_it: "Si butta la spazzatura qui.",
        correct_it: "cestino",
        options_it: ["cestino", "secchio", "bidone", "contenitore"],
        category: "other",
        emoji: "🗑️",
        hint: "Сюда выбрасывают мусор. В русском это 'корзина для мусора'.",
        translation: "корзина для мусора"
    },
    {
        id: 26,
        question_it: "Si accende per riscaldare la stanza.",
        correct_it: "riscaldamento",
        options_it: ["riscaldamento", "condizionatore", "stufa", "termosifone"],
        category: "other",
        emoji: "🔥",
        hint: "Это включают, чтобы обогреть комнату. В русском это 'отопление'.",
        translation: "отопление"
    }
];

// Initialize the game
function initGame() {
    // Set up event listeners
    startBtn.addEventListener('click', startGame);
    nextBtn.addEventListener('click', nextQuestion);
    quitBtn.addEventListener('click', goToMenu);
    restartBtn.addEventListener('click', restartGame);
    menuBtn.addEventListener('click', goToMenu);
    reviewBtn.addEventListener('click', showReview);
    practiceBtn.addEventListener('click', practiceMistakes);
    backToResults.addEventListener('click', backToResultsScreen);
    hintBtn.addEventListener('click', showHint);
    closeHint.addEventListener('click', closeHintModal);
    copyResultBtn.addEventListener('click', copyResultToClipboard);
    speakBtn.addEventListener('click', speakCurrentWord);
    soundBtn.addEventListener('click', toggleSound);
    
    // Set up difficulty buttons
    difficultyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            difficultyButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Set game difficulty
            gameDifficulty = button.getAttribute('data-difficulty');
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === hintModal) {
            closeHintModal();
        }
    });
    
    // Initialize with easy difficulty
    document.querySelector('[data-difficulty="easy"]').classList.add('active');
    gameDifficulty = "easy";
    
    console.log("Italian Household Items Quiz initialized successfully!");
}

// Start the game
function startGame() {
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Prepare questions based on difficulty
    prepareQuestions();
    
    // Update UI
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = totalQuestions;
    finalTotal.textContent = totalQuestions;
    
    // Show game screen, hide others
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    resultScreen.classList.remove('active');
    reviewScreen.classList.remove('active');
    
    // Display first question
    displayQuestion();
}

// Prepare questions based on selected difficulty
function prepareQuestions() {
    // Create a copy of the question database
    let availableQuestions = [...questionDatabase];
    
    // Shuffle the questions
    availableQuestions = shuffleArray(availableQuestions);
    
    // Select number of questions based on difficulty
    if (gameDifficulty === "easy") {
        totalQuestions = 10;
    } else if (gameDifficulty === "medium") {
        totalQuestions = 15;
    } else {
        totalQuestions = 20;
    }
    
    // Take the first N questions
    shuffledQuestions = availableQuestions.slice(0, totalQuestions);
    
    console.log(`Game started with ${totalQuestions} questions (difficulty: ${gameDifficulty})`);
}

// Display the current question
function displayQuestion() {
    // Get current question
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question_it;
    
    // Update category badge
    updateCategoryBadge(question.category);
    
    // Update item illustration
    itemIllustration.innerHTML = question.emoji;
    
    // Clear options container
    optionsContainer.innerHTML = '';
    
    // Shuffle answer options
    const shuffledOptions = shuffleArray([...question.options_it]);
    
    // Create option buttons
    shuffledOptions.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.innerHTML = `
            <span class="option-number">${index + 1}</span>
            ${option}
        `;
        
        // Add event listener
        optionButton.addEventListener('click', () => selectAnswer(option, question.correct_it, optionButton, question));
        
        // Add to container
        optionsContainer.appendChild(optionButton);
    });
    
    // Reset feedback and next button
    feedback.style.display = 'none';
    feedback.className = 'feedback';
    nextBtn.disabled = true;
    
    // Update progress
    updateProgress();
}

// Update category badge based on question category
function updateCategoryBadge(category) {
    // Remove all existing category classes
    categoryBadge.className = 'category-badge';
    
    // Add base class and category-specific class
    categoryBadge.classList.add(`${category}-badge`);
    
    // Update icon and text
    let icon = 'fas fa-home';
    let text = 'Другое';
    
    switch(category) {
        case 'kitchen':
            icon = 'fas fa-utensils';
            text = 'Кухня';
            break;
        case 'living':
            icon = 'fas fa-couch';
            text = 'Гостиная';
            break;
        case 'bedroom':
            icon = 'fas fa-bed';
            text = 'Спальня';
            break;
        case 'bathroom':
            icon = 'fas fa-bath';
            text = 'Ванная';
            break;
    }
    
    categoryBadge.innerHTML = `<i class="${icon}"></i> ${text}`;
}

// Handle answer selection
function selectAnswer(selectedAnswer, correctAnswer, buttonElement, question) {
    // Disable all option buttons
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach(option => {
        option.disabled = true;
        
        // Highlight correct answer
        if (option.textContent.includes(correctAnswer)) {
            option.classList.add('correct');
        }
    });
    
    // Check if answer is correct
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Highlight selected answer
    if (isCorrect) {
        buttonElement.classList.add('correct');
        score++;
        scoreElement.textContent = score;
        
        // Show correct feedback
        feedback.innerHTML = `
            <div class="feedback-content">
                <i class="fas fa-check-circle"></i>
                <span>Правильно! "${correctAnswer}" — это ${question.translation}.</span>
            </div>
        `;
        feedback.className = 'feedback correct';
        
        // Speak the word if sound is enabled
        if (soundEnabled) {
            speakItalianWord(correctAnswer);
        }
    } else {
        buttonElement.classList.add('incorrect');
        
        // Show incorrect feedback
        feedback.innerHTML = `
            <div class="feedback-content">
                <i class="fas fa-times-circle"></i>
                <span>Неправильно. "${correctAnswer}" — это ${question.translation}. Ты выбрал "${selectedAnswer}".</span>
            </div>
        `;
        feedback.className = 'feedback incorrect';
        
        // Speak the correct word if sound is enabled
        if (soundEnabled) {
            speakItalianWord(correctAnswer);
        }
    }
    
    // Store user answer for results
    userAnswers.push({
        question: question.question_it,
        userAnswer: selectedAnswer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
        translation: question.translation,
        emoji: question.emoji,
        category: question.category
    });
    
    // Show feedback
    feedback.style.display = 'block';
    
    // Enable next button
    nextBtn.disabled = false;
    
    // Scroll feedback into view on mobile
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Speak an Italian word using Web Speech API
function speakItalianWord(word) {
    if (!soundEnabled || !speechSynthesis) return;
    
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Create speech utterance
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'it-IT';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Speak the word
    speechSynthesis.speak(utterance);
}

// Speak the current word
function speakCurrentWord() {
    if (!soundEnabled) return;
    
    const question = shuffledQuestions[currentQuestionIndex];
    if (question) {
        speakItalianWord(question.correct_it);
    }
}

// Toggle sound on/off
function toggleSound() {
    soundEnabled = !soundEnabled;
    
    if (soundEnabled) {
        soundBtn.classList.add('active');
        soundBtn.innerHTML = '<i class="fas fa-volume-up"></i> Звук';
    } else {
        soundBtn.classList.remove('active');
        soundBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Звук';
    }
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    
    // Check if game is over
    if (currentQuestionIndex >= shuffledQuestions.length) {
        endGame();
    } else {
        displayQuestion();
    }
}

// Update progress indicator
function updateProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `Вопрос ${currentQuestionIndex + 1} из ${shuffledQuestions.length}`;
}

// End the game and show results
function endGame() {
    // Calculate results
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const incorrectAnswers = userAnswers.length - correctAnswers;
    const accuracyPercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    
    // Update result screen
    finalScore.textContent = correctAnswers;
    correctCount.textContent = correctAnswers;
    incorrectCount.textContent = incorrectAnswers;
    accuracy.textContent = `${accuracyPercentage}%`;
    
    // Set result message and emoji based on performance
    let message = "";
    let emoji = "🎉";
    
    if (accuracyPercentage === 100) {
        message = "Идеально! Ты настоящий эксперт итальянского дома!";
        emoji = "🏆";
    } else if (accuracyPercentage >= 80) {
        message = "Отличный результат! Ты хорошо знаешь итальянские предметы обихода!";
        emoji = "⭐";
    } else if (accuracyPercentage >= 60) {
        message = "Хороший результат! Продолжай учить итальянские слова!";
        emoji = "👍";
    } else if (accuracyPercentage >= 40) {
        message = "Неплохо! Есть куда стремиться!";
        emoji = "💪";
    } else {
        message = "Попробуй ещё раз! Ты обязательно улучшишь результат!";
        emoji = "📚";
    }
    
    resultMessage.textContent = message;
    resultEmoji.textContent = emoji;
    
    // Update category statistics
    updateCategoryStats();
    
    // Update vocabulary list
    updateVocabularyList();
    
    // Show result screen, hide others
    gameScreen.classList.remove('active');
    resultScreen.classList.add('active');
}

// Update category statistics
function updateCategoryStats() {
    // Initialize category counters
    const categoryStatsData = {
        kitchen: { correct: 0, total: 0 },
        living: { correct: 0, total: 0 },
        bedroom: { correct: 0, total: 0 },
        bathroom: { correct: 0, total: 0 },
        other: { correct: 0, total: 0 }
    };
    
    // Count correct answers per category
    userAnswers.forEach(answer => {
        const category = answer.category;
        if (categoryStatsData[category]) {
            categoryStatsData[category].total++;
            if (answer.isCorrect) {
                categoryStatsData[category].correct++;
            }
        }
    });
    
    // Generate HTML for category stats
    let statsHTML = '';
    
    for (const [category, data] of Object.entries(categoryStatsData)) {
        if (data.total > 0) {
            const percentage = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            const categoryName = getCategoryName(category);
            const colorClass = `${category}-color`;
            
            statsHTML += `
                <div class="stat-bar">
                    <span class="stat-label">${categoryName}</span>
                    <div class="stat-bar-container">
                        <div class="stat-bar-fill ${category}-color" style="width: ${percentage}%"></div>
                    </div>
                    <span class="stat-value">${percentage}%</span>
                </div>
            `;
        }
    }
    
    categoryStats.innerHTML = statsHTML;
}

// Get category name in Russian
function getCategoryName(category) {
    switch(category) {
        case 'kitchen': return 'Кухня';
        case 'living': return 'Гостиная';
        case 'bedroom': return 'Спальня';
        case 'bathroom': return 'Ванная';
        case 'other': return 'Другое';
        default: return category;
    }
}

// Update vocabulary list with learned words
function updateVocabularyList() {
    // Get unique words from user answers
    const uniqueWords = [];
    const seenWords = new Set();
    
    userAnswers.forEach(answer => {
        if (!seenWords.has(answer.correctAnswer)) {
            seenWords.add(answer.correctAnswer);
            uniqueWords.push({
                italian: answer.correctAnswer,
                translation: answer.translation,
                emoji: answer.emoji
            });
        }
    });
    
    // Generate HTML for vocabulary list
    let vocabHTML = '';
    
    uniqueWords.forEach(word => {
        vocabHTML += `
            <div class="vocab-card">
                <div class="vocab-emoji">${word.emoji}</div>
                <div class="vocab-italian">${word.italian}</div>
                <div class="vocab-russian">${word.translation}</div>
            </div>
        `;
    });
    
    vocabularyList.innerHTML = vocabHTML;
}

// Show review screen with mistakes
function showReview() {
    // Get incorrect answers
    const mistakes = userAnswers.filter(answer => !answer.isCorrect);
    
    if (mistakes.length === 0) {
        alert("У тебя нет ошибок! Отличный результат!");
        return;
    }
    
    // Generate HTML for mistakes list
    let mistakesHTML = '';
    
    mistakes.forEach((mistake, index) => {
        mistakesHTML += `
            <div class="mistake-item">
                <div class="mistake-question">${mistake.question}</div>
                <div class="mistake-answer">
                    <span class="wrong-answer">Твой ответ: ${mistake.userAnswer}</span>
                    <span class="correct-answer">Правильно: ${mistake.correctAnswer} (${mistake.translation})</span>
                </div>
            </div>
        `;
    });
    
    mistakesList.innerHTML = mistakesHTML;
    
    // Show review screen, hide others
    resultScreen.classList.remove('active');
    reviewScreen.classList.add('active');
}

// Practice mistakes (restart with only incorrect answers)
function practiceMistakes() {
    // Get incorrect answers
    const mistakes = userAnswers.filter(answer => !answer.isCorrect);
    
    if (mistakes.length === 0) {
        alert("У тебя нет ошибок! Отличный результат!");
        return;
    }
    
    // Create new questions from mistakes
    const mistakeQuestions = mistakes.map(mistake => {
        // Find the original question in the database
        return questionDatabase.find(q => q.correct_it === mistake.correctAnswer && q.question_it === mistake.question);
    }).filter(q => q !== undefined);
    
    if (mistakeQuestions.length === 0) {
        alert("Не удалось создать тренировку. Попробуй снова.");
        return;
    }
    
    // Use these questions for practice
    shuffledQuestions = shuffleArray([...mistakeQuestions]);
    totalQuestions = shuffledQuestions.length;
    
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Update UI
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = totalQuestions;
    
    // Show game screen
    reviewScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    // Display first question
    displayQuestion();
}

// Go back to results screen
function backToResultsScreen() {
    reviewScreen.classList.remove('active');
    resultScreen.classList.add('active');
}

// Restart the game
function restartGame() {
    startGame();
}

// Go to main menu
function goToMenu() {
    startScreen.classList.add('active');
    gameScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    reviewScreen.classList.remove('active');
}

// Show hint for current question
function showHint() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    if (question && question.hint) {
        hintContent.innerHTML = `
            <p><strong>Вопрос:</strong> "${question.question_it}"</p>
            <p><strong>Подсказка:</strong> ${question.hint}</p>
            <p><strong>Перевод:</strong> "${question.correct_it}" — ${question.translation}</p>
            <p><strong>Совет:</strong> Постарайся понять описание, а не переводить слово в слово!</p>
        `;
        hintModal.classList.add('active');
    }
}

// Close hint modal
function closeHintModal() {
    hintModal.classList.remove('active');
}

// Copy result to clipboard
function copyResultToClipboard() {
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const accuracyPercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    
    const resultText = `Я сыграл(а) в игру "Cosa è cosa?" (Итальянские предметы обихода) и набрал(а) ${correctAnswers} из ${totalQuestions} очков (${accuracyPercentage}% точности)! Попробуй и ты: https://github.com/username/lingogames-italian-household-quiz`;
    
    navigator.clipboard.writeText(resultText)
        .then(() => {
            // Show temporary feedback
            const originalText = copyResultBtn.innerHTML;
            copyResultBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyResultBtn.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                copyResultBtn.innerHTML = originalText;
                copyResultBtn.style.backgroundColor = '';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy result: ', err);
        });
}

// Utility function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);
