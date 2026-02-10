document.addEventListener("DOMContentLoaded", () => {

  // ===== WELCOME =====
  const welcome = document.getElementById("welcome");
  const app = document.getElementById("app");
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", () => {
    welcome.classList.add("hidden");
    app.classList.remove("hidden");
    showFlashcard();
  });

  // ===== DATA =====
  const words = [
    { category:"cocina", es:"nevera", ru:"холодильник", hint:"¿Qué enfría la comida?", extra:"Es grande y blanco." },
    { category:"cocina", es:"sartén", ru:"сковорода", hint:"¿Dónde se fríe comida?", extra:"Tiene mango." },
    { category:"salon", es:"sofá", ru:"диван", hint:"¿Dónde te sientas?", extra:"Es blando." },
    { category:"bano", es:"ducha", ru:"душ", hint:"¿Dónde te lavas?", extra:"Tiene agua caliente." },
    { category:"limpieza", es:"aspiradora", ru:"пылесос", hint:"¿Qué aspira polvo?", extra:"Hace ruido." }
  ];

  const state = {
    mode: "flashcards",
    direction: "es-ru",
    category: "all",
    current: null
  };

  // ===== ELEMENTS =====
  const modeSelect = document.getElementById("mode");
  const directionSelect = document.getElementById("direction");
  const categorySelect = document.getElementById("category");

  const flashcardsView = document.getElementById("flashcards");
  const quizView = document.getElementById("quiz");

  const hintEl = document.getElementById("hint");
  const wordEl = document.getElementById("word");
  const translationEl = document.getElementById("translation");
  const extraHintEl = document.getElementById("extra-hint");

  const quizHintEl = document.getElementById("quiz-hint");
  const quizOptionsEl = document.getElementById("quiz-options");
  const quizFeedbackEl = document.getElementById("quiz-feedback");

  // Buttons
  const btnShowTranslation = document.getElementById("show-translation");
  const btnShowHint = document.getElementById("show-hint");
  const btnKnow = document.getElementById("know");
  const btnDontKnow = document.getElementById("dont-know");
  const btnNextQuestion = document.getElementById("next-question");

  // ===== HELPERS =====
  function filteredWords() {
    return state.category === "all"
      ? words
      : words.filter(w => w.category === state.category);
  }

  function randomWord() {
    const list = filteredWords();
    return list[Math.floor(Math.random() * list.length)];
  }

  // ===== FLASHCARDS =====
  function showFlashcard() {
    const w = randomWord();
    state.current = w;

    hintEl.textContent = w.hint;
    extraHintEl.textContent = w.extra;
    extraHintEl.classList.add("hidden");

    if (state.direction === "es-ru") {
      wordEl.textContent = w.es;
      translationEl.textContent = w.ru;
    } else {
      wordEl.textContent = w.ru;
      translationEl.textContent = w.es;
    }

    translationEl.classList.add("hidden");
  }

  // ===== QUIZ =====
  function showQuiz() {
    const w = randomWord();
    state.current = w;

    quizHintEl.textContent = w.hint;
    quizOptionsEl.innerHTML = "";
    quizFeedbackEl.classList.add("hidden");

    const options = filteredWords()
      .filter(x => x !== w)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .concat(w)
      .sort(() => Math.random() - 0.5);

    options.forEach(o => {
      const btn = document.createElement("button");
      btn.className = "btn";
      btn.textContent = state.direction === "es-ru" ? o.es : o.ru;

      btn.addEventListener("click", () => {
        quizFeedbackEl.textContent =
          o === w ? "Верно" : `Неверно. ${w.es} — ${w.ru}`;
        quizFeedbackEl.classList.remove("hidden");
      });

      quizOptionsEl.appendChild(btn);
    });
  }

  // ===== EVENTS =====
  btnShowTranslation.addEventListener("click", () => {
    translationEl.classList.toggle("hidden");
  });

  btnShowHint.addEventListener("click", () => {
    extraHintEl.classList.remove("hidden");
  });

  btnKnow.addEventListener("click", showFlashcard);
  btnDontKnow.addEventListener("click", showFlashcard);
  btnNextQuestion.addEventListener("click", showQuiz);

  modeSelect.addEventListener("change", e => {
    state.mode = e.target.value;
    flashcardsView.classList.toggle("hidden", state.mode !== "flashcards");
    quizView.classList.toggle("hidden", state.mode !== "quiz");
    state.mode === "flashcards" ? showFlashcard() : showQuiz();
  });

  directionSelect.addEventListener("change", e => {
    state.direction = e.target.value;
    state.mode === "flashcards" ? showFlashcard() : showQuiz();
  });

  categorySelect.addEventListener("change", e => {
    state.category = e.target.value;
    state.mode === "flashcards" ? showFlashcard() : showQuiz();
  });

  // ===== DEBUG (можно потом убрать) =====
  console.log("✅ app.js загружен, кнопка «Начать» работает");
});
