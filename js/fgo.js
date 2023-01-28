//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        
        question: "How many classes are there in FGO?",
        optionA: "14",
        optionB: "8",
        optionC: "7",
        optionD: "13",
        correctOption: "optionD"
    },

    {
        question: "How many saint quartz for one roll?",
        optionA: "100",
        optionB: "3",
        optionC: "40",
        optionD: "5",
        correctOption: "optionB"
    },

    {
        question: "Who is a servant featured in E Pluribus Unum singularity?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "George Washington",
        optionD: "Thomas Edison",
        correctOption: "optionD"
    },

    {
        question: "Who is a servant in berserker class?",
        optionA: "Emiya Alter",
        optionB: "Nitocris Alter",
        optionC: "Cú Chulainn Alter",
        optionD: "Okita Soji Alter",
        correctOption: "optionC"
    },

    {
        question: "Which Servant is from Lostbelt 1?",
        optionA: "Artoria/Altria",
        optionB: "Ozymandias",
        optionC: "Qin Shi Huang",
        optionD: "Anastasia",
        correctOption: "optionD"
    },

    {
        question: "What is the name of Gilgamesh(Caster)'s Noble Phantasm",
        optionA: "Melammu Dingir",
        optionB: "Enuma Elish",
        optionC: "Gate of Babylon",
        optionD: "Gáe Bolg",
        correctOption: "optionA"
    },

    {
        question: "I am the bone of my sword Steel is my body and fire is my blood I have created over a thousand blades Unknown to Death, Nor known to Life. Have withstood pain to create many weapons Yet, those hands will never hold anything So as I pray, _______",
        optionA: "Enuma Elish.",
        optionB: "Excalibur.",
        optionC: "Unlimited Blade Works.",
        optionD: "Bright Ehangwen.",
        correctOption: "optionC"
    },

    {
        question: "Who is the Valentine's Day servant for this year on FGO NA?",
        optionA: "Caren C Hortensia",
        optionB: "Manannan mac Lir (Bazett)",
        optionC: "Grigori Rasputin",
        optionD: "Senji Muramasa",
        correctOption: "optionA"
    },

    {
        question: "Who is a Summer Servant?",
        optionA: "Kiyohime (Berserker)",
        optionB: "Nero Claudius (Saber)",
        optionC: "Jeanne d'Arc (Ruler)",
        optionD: "Martha (Ruler)",
        correctOption: "optionD"
    },

    {
        question: "Who is the Grand Lancer?",
        optionA: "Merlin",
        optionB: "Super Orion",
        optionC: "Fionn mac Cumhaill",
        optionD: "Romulus-Quirinus",
        correctOption: "optionD"
    },

    {
        question: "Where is the world tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },

    {
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },

    {
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "What is the Noble Phantasm Type for Twin Arm - Big Crunch",
        optionA: "Barrier",
        optionB: "Anti-Unit",
        optionC: "Anti-Army",
        optionD: "Anti-Summer",
        correctOption: "optionC"
    },

    {
        question: "What does Revelation A do?",
        optionA: "Gains critical stars every turn for 3 turns.",
        optionB: "Reduces one enemy Servant's NP damage for 1 turn.",
        optionC: "Grants party Invincibility for 1 turn.",
        optionD: "Increases party's defense for 3 turns",
        correctOption: "optionA"
    },

    {
        question: "What does Eye of the Mind (False) B do?",
        optionA: "Grants self Guts status for 1 time, 5 turns.",
        optionB: "Increases own attack for 3 turns. Increases own mental debuff resistance for 3 turns.",
        optionC: "Grants self Evasion for 1 turn. Increases own critical damage for 3 turns.",
        optionD: "Grants self Guts status for 1 time, 5 turns. (Stackable with other Guts.)",
        correctOption: "optionC"
    },

    {
        question: "What does Protection from Arrows B do?",
        optionA: "Ignores Evasion for 1 turn. (Activates first) Deals damage to one enemy.",
        optionB: "Removes own debuffs. Recovers own HP.",
        optionC: "Grants self Guts status for 1 time, 5 turns.",
        optionD: "Grants self Evasion for 3 attacks. Increases own defense for 3 turns.",
        correctOption: "optionD"
    },

    {
        question: "Which is True?",
        optionA: "Sabers have a base damage multiplier of 1.0x.",
        optionB: "Sabers have a base star absorption of 10.",
        optionC: "Pretenders deal 1.1x damage to Sabers.",
        optionD: "Alter Egos deal 0.9x damage to Sabers.",
        correctOption: "optionA"
    },

    {
        question: "Which is True?",
        optionA: "Berserkers have a base star generation rate of 7%.",
        optionB: "Berserkers have a base star absorption of 40.",
        optionC: "Berserkers have a base death rate of 95%.",
        optionD: "Foreigners take 0.5x damage from Berserkers.",
        correctOption: "optionD"
    },

    {
        question: "Which Servant is not from the Saber class?",
        optionA: "Modred",
        optionB: "Emiya",
        optionC: "Altera",
        optionD: "Gawain",
        correctOption: "optionB"
    },

    {
        question: "What does Lantern of Chaldea do?",
        optionA: "Level up the servant",
        optionB: "Bond Limit Release Material",
        optionC: "Command Code Slot Release Material",
        optionD: "Palingenesis",
        correctOption: "optionB"
    },

    {
        question: "Which Servant is not from the Assassin class?",
        optionA: "Sasaki Kojirō",
        optionB: "Hassan of the Hundred Faces",
        optionC: "Artoria Pendragon (Lily)",
        optionD: "Semiramis",
        correctOption: "optionC"
    },

    {
        question: "What is the name of Ereshkigal's Noble Phantasm?",
        optionA: "Per Aspera Ad Astra",
        optionB: "Curruid Coinchenn",
        optionC: "Kur Ki Gal Irkalla",
        optionD: "Śakra's Vajra",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}