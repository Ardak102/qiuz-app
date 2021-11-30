const quizData = [
    {
        question: 'Дата рождения Наруто?',
        a: '28 Ноября',
        b: '3 Октября',
        c: '10 Октября',
        d: '17 Августа',
        correct: 'c'
    },

    {
        question: 'Дата выхода первой серии Наруто?',
        a: '12.12.2002',
        b: '05.08.2003',
        c: '28.11.2002',
        d: '03.10.2003',
        correct: 'd'
    },

    {
        question: 'Как Саске пробудил свой Шаринган?',
        a: 'В сражении с Хаку',
        b: 'При погоне за Итачи, после убийства клана',
        c: 'Когда увидел мёртвых родителей',
        d: 'На тренировке',
        correct: 'b'
    },

    {
        question: 'Что делает техника Изанаги?',
        a: 'Воскрешает владельца',
        b: 'Изменяет судьбу',
        c: 'Управляет разумом жертвы',
        d: 'Истощает чакру жертвы',
        correct: 'b'
    },

    {
        question: 'Почему Курама решил помогать Наруто?',
        a: 'Чтобы спасти себя',
        b: 'После долгого времени решил довериться ему',
        c: 'Спасти своих братьев хвостатых',
        d: 'Потому что Наруто лучше чем Мадара',
        correct: 'd'
    },

    {
        question: 'Как зовут 4-х хвостого биджу?',
        a: 'Чоумей',
        b: 'Сон Гоку',
        c: 'Сайкен',
        d: 'Гьюки',
        correct: 'b'
    },

    {
        question: 'Кто придумал технику Шиден?',
        a: 'Саске',
        b: '4 Райкаге',
        c: 'Какаши',
        d: 'Боруто',
        correct: 'с'
    },

    {
        question: 'Мокутон в связке с какими элементами было создано?',
        a: 'Земля + Ветер',
        b: 'Ветер + Молния',
        c: 'Огонь + Вода',
        d: 'Вода + Земля',
        correct: 'd'
    },

    {
        question: 'Как называется решим отшельника?',
        a: 'Кендзюцу',
        b: 'Сендзюцу',
        c: 'Додзюцу',
        d: 'Тайдзюцу',
        correct: 'b'
    },

    {
        question: 'Как звали героиню деревни песка, владеющая элементом испепеления?',
        a: 'Пакура',
        b: 'Темари',
        c: 'Мей',
        d: 'Югито',
        correct: 'a'
    },

    {
        question: 'Как сарада пробудила шаринган?',
        a: 'При виде полумертвого Митсуки',
        b: 'Когда Сакуру похитил Шин',
        c: 'Когда шел навстречу к папе (Саске)',
        d: 'Когда в Боруто пробудился Момошики',
        correct: 'c'
    },

    {
        question: 'Для чего придумали Изанами?',
        a: 'Против Изанаги',
        b: 'Для победы Учих в войне',
        c: 'Была изобретена случайно',
        d: 'Для усиления Изанаги',
        correct: 'a'
    },

    {
        question: 'Кто убил Саске во втором сезоне?',
        a: 'Наруто',
        b: 'Орочимару',
        c: 'Хагоромо',
        d: 'Мадара',
        correct: 'd'
    },

    {
        question: 'Создатель техники Эдо-тенсей?',
        a: 'Орочимару',
        b: 'Хирузен',
        c: 'Тобирама',
        d: 'Кабуто',
        correct: 'c'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Ты ответил правильно на ${score + 1}/${quizData.length} вопросов</h2>
                
                <button onclick="location.reload()">Еще раз</button>
            `;
        }
    }
});