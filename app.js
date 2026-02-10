// ===== DATA =====
const vocabulary = [
  { id:1, category:'cocina', hint:'¿Qué enfría la comida?', additionalHint:'Es grande y blanco.', es:'nevera', ru:'холодильник' },
  { id:2, category:'cocina', hint:'¿Dónde se fríe comida?', additionalHint:'Tiene mango.', es:'sartén', ru:'сковорода' },
  { id:3, category:'salon', hint:'¿Dónde te sientas?', additionalHint:'Es blando.', es:'sofá', ru:'диван' },
  { id:4, category:'bano', hint:'¿Dónde te duchas?', additionalHint:'Tiene agua caliente.', es:'ducha', ru:'душ' },
  { id:5, category:'limpieza', hint:'¿Qué aspira polvo?', additionalHint:'Hace ruido.', es:'aspiradora', ru:'пылесос' }
];

// ===== STATE =====
const state = {
  mode: 'flashcards',
  direction: 'es-ru',
  category: 'all',
  currentWord: null
};

// ===== HELPERS =====
function filteredWords() {
  return state.category === 'all'
    ? vocabulary
    : vocabulary.filter(w => w.category === state.category);
}

function randomWord() {
  const list = filteredWords();
  return list[Math.floor(Math.random() * list.length)];
}

// ===== FLASHCARDS =====
function showFlashcard() {
  const word = randomWord();
  state.currentWord = word;

  questionHint.textContent = word.hint;
  additionalHint.textContent = word.additionalHint;
  additionalHint.classList.add('hidden');

  if (state.direction === 'es-ru') {
    cardWord.textContent = word.es;
    cardTranslation.textContent = word.ru;
  } else {
    cardWord.textContent = word.ru;
    cardTranslation.textContent = word.es;
  }

  cardTranslation.classList.add('hidden');
}

// ===== QUIZ =====
function showQuiz() {
  const word = randomWord();
  state.currentWord = word;

  quizQuestionHint.textContent = word.hint;
  quizOptions.innerHTML = '';

  const options = [...filteredWords()]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .concat(word)
    .sort(() => Math.random() - 0.5);

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = state.direction === 'es-ru' ? opt.es : opt.ru;
    btn.onclick = () => checkAnswer(opt.id === word.id);
    quizOptions.appendChild(btn);
  });

  quizFeedback.classList.add('hidden');
}

function checkAnswer(correct) {
  quizFeedback.textContent = correct
    ? 'Верно ✅'
    : `Неверно ❌ Правильно: ${state.currentWord.es} — ${state.currentWord.ru}`;
  quizFeedback.classList.remove('hidden');
}

// ===== UI =====
const modeSelect = document.getElementById('mode');
const directionSelect = document.getElementById('direction');
const categorySelect = document.getElementById('category');

const flashcardsView = document.getElementById('flashcards');
const quizView = document.getElementById('quiz');

const questionHint = document.getElementById('question-hint');
const additionalHint = document.getElementById('additional-hint');
const cardWord = document.getElementById('card-word');
const cardTranslation = document.getElementById('card-translation');

const quizQuestionHint = document.getElementById('quiz-question-hint');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');

// Buttons
document.getElementById('show-translation-btn').onclick = () =>
  cardTranslation.classList.toggle('hidden');

document.getElementById('show-hint-btn').onclick = () =>
  additionalHint.classList.remove('hidden');

document.getElementById('know-btn').onclick = showFlashcard;
document.getElementById('dont-know-btn').onclick = showFlashcard;
document.getElementById('next-quiz-btn').onclick = showQuiz;

// Selectors
modeSelect.onchange = () => {
  state.mode = modeSelect.value;
  flashcardsView.classList.toggle('hidden', state.mode !== 'flashcards');
  quizView.classList.toggle('hidden', state.mode !== 'quiz');
  state.mode === 'flashcards' ? showFlashcard() : showQuiz();
};

directionSelect.onchange = () => {
  state.direction = directionSelect.value;
  state.mode === 'flashcards' ? showFlashcard() : showQuiz();
};

categorySelect.onchange = () => {
  state.category = categorySelect.value;
  state.mode === 'flashcards' ? showFlashcard() : showQuiz();
};

// INIT
showFlashcard();
