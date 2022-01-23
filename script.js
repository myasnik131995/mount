let btnStart = document.querySelector('#btn_start');
let contentStart = document.querySelector('#greeting_start');
let partStart = document.querySelector('#part_one');
let messengerStart = document.querySelector('#messenger_start');
let btnTraining = document.querySelector('#btn_training');
let buttonNext = document.querySelector('#button_next');
let answerTeamlead = document.querySelector('#answer_teamlead');
let messageCounterFirst = document.querySelector('#circle_first');
let messageCounterSecond = document.querySelector('#circle_second');
let selection = document.querySelector('#click_selection');
let changeColor = document.querySelector('#change_color');



btnStart.addEventListener('click', function () {
    contentStart.classList.toggle('none');
    partStart.classList.toggle('none');
});

btnTraining.addEventListener('click', function () {
    partStart.classList.toggle('none');
    messengerStart.classList.toggle('none');
});

buttonNext.addEventListener('click', function(){
    buttonNext.remove();
    answerTeamlead.classList.toggle('none');
    messageCounterFirst.remove();
    messageCounterSecond.remove();
});


