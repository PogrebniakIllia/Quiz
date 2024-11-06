let questionField = document.querySelector('.question')
let answerBth = document.querySelectorAll('.button-vol-2')
let massage = document.querySelector('.massage')
let container = document.querySelector('.mid')
let start = document.querySelector('.start') 
let startBtn30 = document.querySelector('.btn30')
let startBtn20 = document.querySelector('.btn20')
let startBtn10 = document.querySelector('.btn10')
let end = document.querySelector('.end')
let sta = document.querySelector('.button-p-2')
// console.log(questionField)
// for (let i = 0; i < answerBth.length; i += 1) {
//     console.log(answerBth[i].innerHTML)
// }

// questionField.innerHTML = '7 * 3'
// for (let i = 0; i < answerBth.length; i += 1) {
//     answerBth[i].innerHTML = 21 + i
// }

function randint(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i --) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

let sings = ['+', '-', '*', '/']
function getRandomSing() {
    return sings[randint(0,3)]
}

class Question { 
    constructor() {
        let a = randint(1,30)
        let b = randint(1,30)
        let sing = getRandomSing()
        this.question = `${a} ${sing} ${b}`
        if (sing == '+') {this.correct = a + b}
        else if (sing == '-') {this.correct = a - b}
        else if (sing == '*') {this.correct = a * b}
        else if (sing == '/') {this.correct = a / b}
        if (sing == '/') {
        this.answers = [
            this.correct.toFixed(1),
            randint(this.correct - 15, this.correct + 3).toFixed(1),
            randint(this.correct - 15, this.correct + 1).toFixed(1),
            randint(this.correct - 1, this.correct + 13).toFixed(1),
            randint(this.correct - 3, this.correct + 15).toFixed(1)
        ]
        shuffle(this.answers)
    } else {
        this.answers = [
            this.correct,
            randint(this.correct - 15, this.correct + 3),
            randint(this.correct - 15, this.correct + 1),
            randint(this.correct - 1, this.correct + 13),
            randint(this.correct - 3, this.correct + 15)
        ]
        shuffle(this.answers)
    }
    }


      

    display() { 
        questionField.innerHTML = this.question
        for (let i = 0; i < answerBth.length; i += 1) {
            answerBth[i].innerHTML = this.answers[i]
        }
    }
}

let totalQueation = 1
let rightAnswers = 0

let card = new Question
card.display()

startBtn30.addEventListener('click', function () {
    start.style.display = 'none'
    container.style.display = 'flex'

    setTimeout(function () {
        end.style.display = 'flex'
        container.style.display = 'none'
        massage.innerHTML = `You answered correctly ${rightAnswers} questions from ${totalQueation}`
    }, 30000)
})

startBtn20.addEventListener('click', function () {
    start.style.display = 'none'
    container.style.display = 'flex'

    setTimeout(function () {
        end.style.display = 'flex'
        container.style.display = 'none'
        massage.innerHTML = `You answered correctly ${rightAnswers} questions from ${totalQueation}`
    }, 20000)
})

startBtn10.addEventListener('click', function () {
    start.style.display = 'none'
    container.style.display = 'flex'

    setTimeout(function () {
        end.style.display = 'flex'
        container.style.display = 'none'
        massage.innerHTML = `You answered correctly ${rightAnswers} questions from ${totalQueation}`
    }, 10000)
})

for (let i = 0; i < answerBth.length; i += 1) { 
    answerBth[i].addEventListener('click', function () { 
        if (answerBth[i].innerHTML == card.correct) {
            console.log('Правильно')
            rightAnswers += 1
            answerBth[i].style.background = '#068000'
            anime({
                targets: answerBth[i],
                background: '#29E59A',
                duration: 500,
                delay: 100,
                easing: 'linear'
        })
        } else { 
            console.log('Неправильно')
            answerBth[i].style.background = '#800000'
            anime({
                targets: answerBth[i],
                background: '#29E59A',
                duration: 500,
                delay: 100,
                easing: 'linear'
        })
        }

        totalQueation += 1
        card = new Question
        card.display()
    })
}

sta.addEventListener('click', function () {
    start.style.display = 'flex'
    end.style.display = 'none'
})


