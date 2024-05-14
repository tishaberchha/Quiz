const image = document.querySelector('.image');
const box = document.querySelector('.box-container');
const nextBtn = document.querySelector('.next-btn');

setTimeout(() => {
    image.src = 'images/2384090.jpg';
    box.style.display = 'block';
}, 2000);

const questions = [
    {
        'ques': 'The correct sequence of HTML tags for starting a webpage is -',
        'a': 'Head, Title, HTML, body',
        'b': 'HTML, Body, Title, Head',
        'c': 'HTML, Head, Title, Body',
        'd': 'HTML, Head, Title, Body',
        'correct': 'd'
    },
    {
        'ques': 'Which of the following methods is used to access HTML elements using Javascript?',
        'a': 'getElementbyId()',
        'b': 'getElementByClassName()',
        'c': 'Both A and B',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        'ques': 'The CSS property used to specify the transparency of an element is?',
        'a': 'opacity',
        'b': 'visibility',
        'c': 'filter',
        'd': 'None of the above',
        'correct': 'a'
    },
    {
        'ques': 'What keyword is used to check whether a given property is valid or not?',
        'a': 'in',
        'b': 'is in',
        'c': 'exists',
        'd': 'lies',
        'correct': 'a'
    },
    {
        'ques': 'We can make rounded borders around elements using which CSS element?',
        'a': 'border-collapse',
        'b': 'borderr-round',
        'c': 'border-radius',
        'd': 'None of the above',
        'correct': 'd'
    },
    {
        'ques': ' Which of the following is the correct way to send mail in HTML?',
        'a': '<a href = "mailto: xy@y">',
        'b': '<a href = "xy@y">',
        'c': '<mail xy@y</mail>',
        'd': 'None of the above',
        'correct': 'c'
    }
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesbox = document.querySelector('.quesbox');
const optionInputs = document.querySelectorAll('.options');

const loadques = () => {
    console.log(index);
    if (index === total) {
        endQuiz();
        return;
    }
    reset();
    const data = questions[index]
    quesbox.innerText = `${index + 1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitquiz = () => {
    const data = questions[index];
    const ans = getans();

    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadques();
}


const getans = () => {
    let ans = null;
    optionInputs.forEach(input => {
        if (input.checked && ans === null) {
            ans = input.value;
        }
    }
    )
    return ans;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endBox = document.querySelector('.endBox');
const endQuiz = () => {
    console.log('end called');
    endBox.style.display = 'block';
    box.style.display = 'none';
    
    endBox.innerHTML =
        `  <div style="text-align:center; font-size:40px">
        <h3 style="color:red;font:size:80px; "> Thank you for playing the quiz </h3> <h2 style="font-size:30px;"> ${right} / ${total} are correct </h2>
        </div>
        `;
    nextBtn.style.display = 'block';
}
nextBtn.addEventListener('click', () => {
    index = 0;
    console.log(index);

    loadques();
    index++;

    endBox.style.display = 'none';
    nextBtn.style.display = 'none';
    box.style.display = 'block';
})

loadques();

