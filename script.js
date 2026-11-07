
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

const questions = [
    {
        category: "FIRST IMPRESSIONS 👀",
        question: "If we met for the very first time today, what would your first impression of me be?",
        answers: ["Interesting guy. I'd like to know him 😂", "He looks like trouble. 😭", "I'd probably ignore him. 😂", "I'd give him a chance."]
    },
    {
        category: "THE APPROACH 😎",
        question: "If I approached you and tried to start a conversation, what would you do?",
        answers: ["I'd be friendly.", "I'd make him work for that conversation. 😂", "I'd pretend to be busy. 😭", "I'd actually enjoy talking to him."]
    },
    {
        category: "CURIOSITY 🤔",
        question: "If we had no history whatsoever, would you be curious to get to know me?",
        answers: ["Definitely!", "Depends on his behaviour. 😂", "Maybe, as a friend.", "Not really."]
    },
    {
        category: "CONVERSATION CHECK 😂",
        question: "Be honest, do you think we make good conversation?",
        answers: ["Surprisingly, yes. 😂", "Sometimes, when you're behaving.", "We have our moments.", "You need to improve your conversation skills. 😭"]
    },
    {
        category: "THE FRIENDSHIP QUESTION 🫣",
        question: "Can two people who once had something build a comfortable friendship?",
        answers: ["Absolutely!", "Yes, but it takes time.", "It's complicated.", "Sometimes distance is better."]
    },
    {
        category: "THE PAST 😂",
        question: "If someone mentioned what happened between us, would you rather laugh about it or avoid the conversation?",
        answers: ["Laugh about it. 😂", "Talk about it honestly.", "Depends on the situation.", "I'd rather leave it in the past."]
    },
    {
        category: "WHAT IF...? 👀",
        question: "Have you ever wondered what things would be like if things had gone differently?",
        answers: ["Yes, sometimes.", "Maybe once or twice.", "Not really.", "I'd rather not revisit that. 😅"]
    },
    {
        category: "UNFINISHED BUSINESS 📂",
        question: "Do you feel there's anything between us that we never properly talked about?",
        answers: ["Yes, actually.", "Maybe, I just don't know how to explain it.", "I think we've said enough.", "I feel everything is settled."]
    },
    {
        category: "THE BIG SUGGESTION 😏",
        question: "If I suggested we sit down and have a proper conversation, just the two of us, what would you say?",
        answers: ["I'd be interested. 😂", "I'd be nervous, but open to it.", "Maybe another time.", "I'd rather not."]
    },
    {
        category: "HONEST MOMENT ❤️",
        question: "Do you feel comfortable talking to me about what happened between us?",
        answers: ["Yes, I'm comfortable with that.", "Maybe, but slowly.", "I'm still unsure.", "I'd prefer not to."]
    },
    {
        category: "CLEARING THE AIR 🕊️",
        question: "Is there anything you think we should clear up before moving forward?",
        answers: ["Yes, there is.", "Perhaps, we can talk about it.", "I've already moved past it.", "I'd rather keep things simple."]
    },
    {
        category: "WHERE DO WE GO FROM HERE? 🤔",
        question: "What would you genuinely prefer our connection to become?",
        answers: ["Explore what happened between us.", "Build a genuine friendship.", "Take things slowly without defining anything.", "Keep some distance."]
    },
    {
        category: "ONE CONVERSATION ❤️",
        question: "If we talked openly about our past, would you actually want that conversation?",
        answers: ["Yes, I would.", "Maybe, just not right now.", "Only if we're both comfortable.", "I'd rather leave it behind."]
    },
    {
        category: "FRIENDSHIP WITHOUT ROMANCE 🌷",
        question: "If romance wasn't where things were heading, would you still want us to have a friendship?",
        answers: ["Yes, definitely.", "Yes, but with boundaries.", "I'm honestly not sure.", "Maybe it's better we move on separately."]
    },
    {
        category: "THE FINAL QUESTION 🥹",
        question: "What do you honestly want from me at this point?",
        answers: ["A chance to understand each other again.", "A genuine friendship.", "To see where things naturally go.", "Occasional conversations, nothing more.", "Honestly, I don't know yet."]
    }
];

let currentQuestion = 0;
let selectedAnswers = [];

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

const seriousReactions = [
    "Thank you for being honest. ❤️",
    "That's completely okay. 🕊️",
    "Your feelings matter too.",
    "No pressure. Take your time. ❤️",
    "An honest answer is always appreciated.",
    "Thank you for sharing that."
];

function startInvestigation() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    currentQuestion = 0;
    selectedAnswers = [];

    showQuestion();
}

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
                <button class="answer-option"
                    onclick="selectAnswer(${index})">
                    ${answer}
                </button>
            `).join("")}
        </div>

        <p id="reaction" style="margin-top: 20px;"></p>

        <button id="next-button"
            onclick="nextQuestion()"
            style="display: none; margin-top: 15px;">
            ${currentQuestion === questions.length - 1
                ? "Finish Investigation ❤️"
                : "Next Question ➜"}
        </button>
    `;
}

function selectAnswer(answerIndex) {
    const buttons = document.querySelectorAll(".answer-option");

    buttons.forEach(button => {
        button.disabled = true;
    });

    selectedAnswers[currentQuestion] =
        questions[currentQuestion].answers[answerIndex];

    let reaction;

    if (currentQuestion < 9) {
        reaction = funnyReactions[
            Math.floor(Math.random() * funnyReactions.length)
        ];
    } else {
        reaction = seriousReactions[currentQuestion - 9];
    }

    document.getElementById("reaction").textContent = reaction;
    document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showFinalMessage();
    }
}

function showFinalMessage() {
    document.getElementById("quiz-screen").innerHTML = `
        <h1>INVESTIGATION COMPLETE! 🎉</h1>

        <h2>Well, Glory... ❤️</h2>

        <p>You survived all 15 questions.
        Dennis would like to congratulate you. 😂</p>

        <p>But honestly, this investigation was never
        about finding the right answers.</p>

        <p>It was about understanding where we stand,
        whether there's room for an honest conversation,
        and what we both want moving forward.</p>

        <p>No pressure. No expectations.
        Just honesty. ❤️</p>

        <h2>Thank you for playing! 🌷</h2>

        <p style="color: #ffb6d5;">
            Case closed... or maybe just a new chapter? 👀
        </p>
    `;
}
