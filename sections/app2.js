var javaScript = [{
        que: ' Which of the following type of variable is visible everywhere in your JavaScript code?',
        ans1: "Global variable",
        ans2: "Local variable",
        ans3: "Both of above",
        ans4: "None of Above",
        anskey: "Global variable"
    },
    {
        que: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
        ans1: 'last()',
        ans2: 'put()',
        ans3: 'push()',
        ans4: 'None of above',
        anskey: 'push()'
    },
    {
        que: 'Which of the following function of String object returns the calling string value converted to upper case?',
        ans1: 'toLocaleUpperCase()',
        ans2: 'toUpperCase()',
        ans3: 'toString()',
        ans4: 'substring()',
        anskey: 'toUpperCase()'
    },
    {
        que: 'How does Java Script store dates in objects of Date type?',
        ans1: 'The number of days since January 1st, 1900',
        ans2: 'The number of seconds since January 1st, 1970',
        ans3: 'The number of milliseconds since January 1st, 1970',
        ans4: 'The number of picoseconds since January 1st, 1970',
        anskey: 'The number of milliseconds since January 1st, 1970'
    },
    {
        que: 'Which of the following is not a valid JavaScript variable name?',
        ans1: '_java_and_ java _names',
        ans2: 'javandjava',
        ans3: '2java',
        ans4: 'None of the Above',
        anskey: '2java'
    },
    {
        que: 'var sum = 0.1 + 0.7;  ( What will the value of sum variable )',
        ans1: '0',
        ans2: '0.10.7',
        ans3: '0.8',
        ans4: '0.799999999',
        anskey: '0.799999999'
    },
    {
        que: 'Extract piece of "program" of the text store in variable \nvar text = "metaprogramming"',
        ans1: 'text.chunk(4,7)',
        ans2: 'text.slice(4,7)',
        ans3: 'text.slice(4,11)',
        ans4: 'text.substr(4,11)',
        anskey: 'text.slice(4,11)'
    },
    {
        que: '3 > 2 > 1 === false;',
        ans1: 'true',
        ans2: 'false',
        ans3: 'Syntax error',
        ans4: 'None of above',
        anskey: 'false'
    },
    {
        que: 'How do you find the minimum of x and y using JavaScript?',
        ans1: 'min(x,y);',
        ans2: 'Math.min(x,y)',
        ans3: 'Math.min(xy)',
        ans4: 'min(xy)',
        anskey: 'Math.min(x,y)'
    },
    {
        que: 'Which are the correct “if” statements to execute certain code if “x” is equal to 2?',
        ans1: 'if (x = 2)',
        ans2: 'if (x 2)',
        ans3: 'if (x != 2)',
        ans4: 'if (x == 2 )',
        anskey: 'if (x == 2 )'
    },
    {
        que: 'What will the code return?  Boolean(3 < 7)',
        ans1: 'true',
        ans2: 'false',
        ans3: 'NaN',
        ans4: 'SyntaxError',
        anskey: 'true'
    },
    {
        que: 'Which of the following is not a javascript object',
        ans1: 'var obj = {}',
        ans2: 'var obj = { name : "Steve" }',
        ans3: 'var obj = { name = "Steve" }',
        ans4: 'var obj = new Object();',
        anskey: 'var obj = { name = "Steve" }'
    },
    {
        que: 'What will ( 1 == 1 ) return ?',
        ans1: 'True',
        ans2: 'False',
        ans3: '0',
        ans4: '1',
        anskey: 'True'
    },
    {
        que: 'How to handle error in Javascript',
        ans1: 'By writing error proof code',
        ans2: 'By using eval() function',
        ans3: 'By using if-else block',
        ans4: 'By using try,catch & finally block',
        anskey: 'By using try,catch & finally block'
    },
    {
        que: 'If the node is a text node , the nodeType property will return ',
        ans1: '8',
        ans2: '2',
        ans3: '1',
        ans4: '3',
        anskey: '3'
    }
]

var question = document.getElementById('question')
var opt1 = document.getElementById('textOpt1')
var opt2 = document.getElementById('textOpt2')
var opt3 = document.getElementById('textOpt3')
var opt4 = document.getElementById('textOpt4')
var ans = document.getElementsByClassName('answer1')
var btn = document.getElementById('next')
var inp1 = document.getElementById('ans1')
var inp2 = document.getElementById('ans2')
var inp3 = document.getElementById('ans3')
var inp4 = document.getElementById('ans4')

opt1.style.cursor = 'pointer'
opt2.style.cursor = 'pointer'
opt3.style.cursor = 'pointer'
opt4.style.cursor = 'pointer'



function jswindow() {
    window.location.href = '/sections/jsquiz.html'
}

var queCount = 0
var score = 0


function jsQuiz() {
    var getQuestion = javaScript[queCount]
    question.innerHTML = getQuestion.que
    opt1.innerHTML = getQuestion.ans1
    opt2.innerHTML = getQuestion.ans2
    opt3.innerHTML = getQuestion.ans3
    opt4.innerHTML = getQuestion.ans4
    inp1.value = getQuestion.ans1
    inp2.value = getQuestion.ans2
    inp3.value = getQuestion.ans3
    inp4.value = getQuestion.ans4
}
window.onload = jsQuiz()

function next() {
    //Reading and checking value of selected option
    for (var i = 0; i < ans.length; i++) {
        if (ans[i].checked) {
            console.log(ans[i].value)
            if (ans[i].value === javaScript[queCount].anskey) {
                score++
            }
        }
    }
    console.log(score)
    queCount++
    //Next Question
    if (queCount < javaScript.length) {
        jsQuiz()
        deSelect()

    } else {
        //Showing Result with Score
        document.getElementById('quizWindow').style.display = 'none'
        document.getElementById('resultWindow').style.display = 'block'
        var totalQue = document.getElementById('totalQue')
        var correctQue = document.getElementById('correctQue')
        totalQue.innerText = javaScript.length
        correctQue.innerText = score
        var per = document.getElementById('per')
        var CalculatePer = (score / javaScript.length) * 100
        per.innerText = Math.round(CalculatePer) + "%"


        //Conditions of Result display as per score
        if (CalculatePer < 70) {
            var msg = document.getElementById('result')
            var dial = document.getElementById('dial')
            msg.innerText = 'Better Luck Next Time ! You Failed'
            msg.style.color = 'red'
            dial.style.borderColor = 'red'
        } else {
            var msg = document.getElementById('result')
            var dial = document.getElementById('dial')
            msg.innerText = 'Congratulations ! You Passed'
            msg.style.color = 'green'
            dial.style.borderColor = 'green'
        }
    }
}
//Deselect next radio
function deSelect() {
    for (var i = 0; i < ans.length; i++) {
        ans[i].checked = false
    }
}

//return to home from result
function back() {
    window.location.href = '/sections/welcome.html'
}