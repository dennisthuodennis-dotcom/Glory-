
// =====================================
// GLORY UNDER INVESTIGATION ❤️
// =====================================

// 1. PASSWORD CHECKER

function checkPassword() {
    let answer = document.getElementById("password").value;

    answer = answer.toLowerCase().trim();

    if (answer === "february") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("welcome-screen").style.display = "block";
    } else {
        document.getElementById("message").innerHTML =
            "Wrong answer! Have you forgotten your investigator? 🤣";
    }
}


// 2. THE 15 QUESTIONS

const questions = [

    {
        question: "If I stopped texting you for three days, what would happen? 😂",
        options: [
            "I'd enjoy the peace 😂",
            "I'd check if you were kidnapped",
            "I'd notice, but never admit it",
            "I'd text you first"
        ]
    },

    {
        question: "Who is more dramatic between us?",
        options: [
            "Definitely you",
            "You, but I'll let you think it's me",
            "Both of us need professional help",
            "I'm the innocent one 😇"
        ]
    },

    {
        question: "If I became famous tomorrow, what would you tell people?",
        options: [
            "I knew him before the money 😂",
            "He's always been annoying",
            "I want my share!",
            "We were never that close 🤣"
        ]
    },

    {
        question: "What's my biggest weakness?",
        options: [
            "My mouth 😂",
            "My stubbornness",
            "My inability to leave you alone",
            "Confidence without evidence"
        ]
    },

    {
        question: "If we had a staring contest, who would win?",
        options: [
            "Me, obviously",
            "You'd blink because you're nervous",
            "We'd both start laughing",
            "Why are we even doing this? 😂"
        ]
    },

    {
        question: "If we got stranded on an island together, what would you do?",
        options: [
            "Make you find food",
            "Negotiate with the coconuts",
            "Argue until someone rescues us",
            "At least the entertainment is guaranteed"
        ]
    },

    {
        question: "What's more dangerous?",
        options: [
            "Your silence",
            "My imagination",
            "Our late-night conversations",
            "You pretending you're innocent"
        ]
    },

    {
        question: "If I sent you a romantic paragraph, what would you do?",
        options: [
            "Screenshot it and laugh 😂",
            "Read it twice secretly",
            "Reply with one emoji",
            "Ask if someone hacked my phone"
        ]
    },

    {
        question: "Who is more likely to miss the other but pretend otherwise?",
        options: [
            "You, obviously",
            "Definitely you!",
            "Both of us are guilty",
            "Nobody. We're professionals 🤣"
        ]
    },

    {
        question: "If I asked for a second chance at annoying you, what would you say?",
        options: [
            "Your subscription has expired",
            "Your application is under review",
            "Approved, unfortunately 😂",
            "Contact customer support"
        ]
    },

    {
        question: "What's one thing about me that should never change?",
        options: [
            "My humour",
            "My stubbornness",
            "My kindness",
            "Nothing, I'm still reviewing your application"
        ]
    },

    {
        question: "If our story were a movie, what would its title be?",
        options: [
            "The Unfinished Business",
            "Two Stubborn People",
            "A Comedy Without an Ending",
            "Please Don't Make a Sequel 😂"
        ]
    },

    // THE LAST THREE: SERIOUS QUESTIONS ❤️

    {
        serious: true,
        question: "When you think about our past, have you moved on emotionally?",
        options: [
            "I've made peace with everything",
            "Mostly, but some feelings remain",
            "I'm still figuring things out",
            "Honestly, I don't know"
        ]
    },

    {
        serious: true,
        question: "Do you still have room in your heart to love again, even someone from your past?",
        options: [
            "Yes, I'm open to it",
            "Possibly, but trust would need rebuilding",
            "I'd rather start a completely new chapter",
            "I'm not ready for love right now"
        ]
    },

    {
        serious: true,
        question: "If we were both completely honest, would you be open to exploring whether something still exists between us?",
        options: [
            "Yes ❤️",
            "Maybe, but slowly and without pressure",
            "I care about you, but only as a friend",
            "That chapter is closed"
        ]
    }

];


// 3. QUIZ VARIABLES

let currentQuestion = 0;


// 4. START THE INVESTIGATION

function startInvestigation() {

    document.getElementById("welcome-screen").style.display = "none";

    document.getElementById("quiz-screen").style.display = "block";

    currentQuestion = 0;

    showQuestion();
}


// 5. DISPLAY EACH QUESTION

function showQuestion() {

    const quiz = document.getElementById("question-placeholder");

    const q = questions[currentQuestion];

    let html = "";

    html += `<p>Question ${currentQuestion + 1} of 15</p>`;

    if (q.serious) {
        html += `<h2>❤️ TIME TO BE HONEST</h2>`;
    } else {
        html += `<h2>😂 THE FUN PART</h2>`;
    }

    html += `<h3>${q.question}</h3>`;

    html += `<div class="answers">`;

    q.options.forEach((option, index) => {

        html += `
            <button class="answer-option"
            onclick="selectAnswer(${index})">
                ${option}
            </button>
        `;

    });

    html += `</div>`;

    quiz.innerHTML = html;

// ==========================================
// GLORY'S INVESTIGATION ❤️
// 15 QUESTIONS — NO ESCAPING 😂
// ==========================================

// PASSWORD CHECK
function checkPassword() {
    const password = document.getElementById("password").value.trim().toLowerCase();
    const message = document.getElementById("message");

    if (password === "february") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("welcome-screen").style.display = "block";
    } else {
        message.textContent = "Wrong answer! 😂 Try again, detective.";
    }
}

// ==========================================
// THE 15 QUESTIONS
// ==========================================

const questions = [

    // FIRST 9: PLAYFUL QUESTIONS 😂

    {
        category: "FIRST IMPRESSIONS 👀",
        question: "If we met for the very first time today, what would your first impression of me be?",
        answers: [
            "Interesting guy. I'd like to know him 😂",
            "He looks like trouble. 😭",
            "I'd probably ignore him. 😂",
            "I'd give him a chance."
        ]
    },

    {
        category: "THE APPROACH 😎",
        question: "If I approached you and tried to start a conversation, what would you do?",
        answers: [
            "I'd be friendly.",
            "I'd make him work for that conversation. 😂",
            "I'd pretend to be busy. 😭",
            "I'd actually enjoy talking to him."
        ]
    },

    {
        category: "CURIOSITY 🤔",
        question: "If we had no history whatsoever, would you be curious to get to know me?",
        answers: [
            "Definitely!",
            "Depends on his behaviour. 😂",
            "Maybe, as a friend.",
            "Not really."
        ]
    },

    {
        category: "CONVERSATION CHECK 😂",
        question: "Be honest, do you think we make good conversation?",
        answers: [
            "Surprisingly, yes. 😂",
            "Sometimes, when you're behaving.",
            "We have our moments.",
            "You need to improve your conversation skills. 😭"
        ]
    },

    {
        category: "THE FRIENDSHIP QUESTION 🫣",
        question: "Can two people who once had something build a comfortable friendship?",
        answers: [
            "Absolutely!",
            "Yes, but it takes time.",
            "It's complicated.",
            "Sometimes distance is better."
        ]
    },

    {
        category: "THE PAST 😂",
        question: "If someone mentioned what happened between us, would you rather laugh about it or avoid the conversation?",
        answers: [
            "Laugh about it. 😂",
            "Talk about it honestly.",
            "Depends on the situation.",
            "I'd rather leave it in the past."
        ]
    },

    {
        category: "WHAT IF...? 👀",
        question: "Have you ever wondered what things would be like if things had gone differently?",
        answers: [
            "Yes, sometimes.",
            "Maybe once or twice.",
            "Not really.",
            "I'd rather not revisit that. 😅"
        ]
    },

    {
        category: "UNFINISHED BUSINESS 📂",
        question: "Do you feel there's anything between us that we never properly talked about?",
        answers: [
            "Yes, actually.",
            "Maybe, I just don't know how to explain it.",
            "I think we've said enough.",
            "I feel everything is settled."
        ]
    },

    {
        category: "THE BIG SUGGESTION 😏",
        question: "If I suggested we sit down and have a proper conversation, just the two of us, what would you say?",
        answers: [
            "I'd be interested. 😂",
            "I'd be nervous, but open to it.",
            "Maybe another time.",
            "I'd rather not."
        ]
    },

    // LAST 6: THE HONEST QUESTIONS ❤️

    {
        category: "HONEST MOMENT ❤️",
        question: "Do you feel comfortable talking to me about what happened between us?",
        answers: [
            "Yes, I'm comfortable with that.",
            "Maybe, but slowly.",
            "I'm still unsure.",
            "I'd prefer not to."
        ]
    },

    {
        category: "CLEARING THE AIR 🕊️",
        question: "Is there anything you think we should clear up before moving forward?",
        answers: [
            "Yes, there is.",
            "Perhaps, we can talk about it.",
            "I've already moved past it.",
            "I'd rather keep things simple."
        ]
    },

    {
        category: "WHERE DO WE GO FROM HERE? 🤔",
        question: "What would you genuinely prefer our connection to become?",
        answers: [
            "Explore what happened between us.",
            "Build a genuine friendship.",
            "Take things slowly without defining anything.",
            "Keep some distance."
        ]
    },

    {
        category: "ONE CONVERSATION ❤️",
        question: "If we talked openly about our past, would you actually want that conversation?",
        answers: [
            "Yes, I would.",
            "Maybe, just not right now.",
            "Only if we're both comfortable.",
            "I'd rather leave it behind."
        ]
    },

    {
        category: "FRIENDSHIP WITHOUT ROMANCE 🌷",
        question: "If romance wasn't where things were heading, would you still want us to have a friendship?",
        answers: [
            "Yes, definitely.",
            "Yes, but with boundaries.",
            "I'm honestly not sure.",
            "Maybe it's better we move on separately."
        ]
    },

    {
        category: "THE FINAL QUESTION 🥹",
        question: "What do you honestly want from me at this point?",
        answers: [
            "A chance to understand each other again.",
            "A genuine friendship.",
            "To see where things naturally go.",
            "Occasional conversations, nothing more.",
            "Honestly, I don't know yet."
        ]
    }
];

// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;
let selectedAnswers = [];

// Funny reactions for the first 9 questions
const funnyReactions = [
    "Interesting answer, detective! 😂",
    "Noted! The investigation continues. 🕵️",
    "Hmmmm... that's something. 👀",
    "You didn't hesitate with that one! 😭",
    "Okay, I wasn't expecting that! 😂",
    "Your honesty is being recorded. 📂",
    "Dennis would like to know more. 😂",
    "Well, well, well... interesting! 👀",
    "Let's keep going. No pressure! 😎"
];

// Reactions for the final 6 questions
const seriousReactions = [
    "Thank you for being honest. ❤️",
    "That's completely okay. 🕊️",
    "Your feelings matter too.",
    "No pressure. Take your time. ❤️",
    "An honest answer is always appreciated.",
    "Thank you for sharing that."
];

// ==========================================
// START THE INVESTIGATION
// ==========================================

function startInvestigation() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    // Replace the original paragraph with a proper quiz container
    const oldPlaceholder = document.getElementById("question-placeholder");

    oldPlaceholder.outerHTML = '<div id="question-placeholder"></div>';

    currentQuestion = 0;
    selectedAnswers = [];

    showQuestion();
}

// ==========================================
// DISPLAY EACH QUESTION
// ==========================================

function showQuestion() {
    const questionArea = document.getElementById("question-placeholder");
    const question = questions[currentQuestion];

    questionArea.innerHTML = `
        <p>Question ${currentQuestion + 1} of ${questions.length}</p>

        <p style="color: #ffb6d5; font-weight: bold;">
            ${question.category}
        </p>

        <h2 style="margin-bottom: 25px;">
            ${question.question}
        </h2>

        <div class="answers">
            ${question.answers.map((answer, index) => `
                <button
                    class="answer-option"
                    onclick="selectAnswer(${index})">
                    ${answer}
                </button>
            `).join("")}
        </div>

        <p id="reaction" style="margin-top: 20px;"></p>

        <button
            id="next-button"
            onclick="nextQuestion()"
            style="display: none; margin-top: 15px;">
            ${currentQuestion === questions.length - 1
                ? "Finish Investigation ❤️"
                : "Next Question ➜"}
        </button>
    `;
}

// ==========================================
// WHEN GLORY SELECTS AN ANSWER
// ==========================================

function selectAnswer(answerIndex) {
    const buttons = document.querySelectorAll(".answer-option");

    // Prevent selecting multiple answers
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Save the selected answer
    selectedAnswers[currentQuestion] =
        questions[currentQuestion].answers[answerIndex];

    // Display a reaction
    let reaction;

    if (currentQuestion < 9) {
        reaction = funnyReactions[
            Math.floor(Math.random() * funnyReactions.length)
        ];
    } else {
        reaction = seriousReactions[currentQuestion - 9];
    }

    document.getElementById("reaction").textContent = reaction;

    // Show the next button
    document.getElementById("next-button").style.display = "inline-block";
}

// ==========================================
// MOVE TO THE NEXT QUESTION
// ==========================================

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showFinalMessage();
    }
}

// ==========================================
// FINAL SCREEN
// ==========================================

function showFinalMessage() {
    const quizScreen = document.getElementById("quiz-screen");

    quizScreen.innerHTML = `
        <h1>INVESTIGATION COMPLETE! 🎉</h1>

        <h2>Well, Glory... ❤️</h2>

        <p>
            You survived all 15 questions.
            Dennis would like to congratulate you. 😂
        </p>

        <p>
            But honestly, this investigation was never
            about finding the right answers.
        </p>

        <p>
            It was about understanding where we stand,
            whether there's room for an honest conversation,
            and what we both want moving forward.
        </p>

        <p>
            No pressure. No expectations.
            Just honesty. ❤️
        </p>

        <h2>Thank you for playing! 🌷</h2>

        <p style="color: #ffb6d5;">
            Case closed... or maybe just a new chapter? 👀
        </p>
    `;
}

