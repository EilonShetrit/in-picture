'use strict';
console.log('in-picture');

var gQuests = [
    { id: 1, opts: ['Manchester City', 'Manchester United'], correctOptIndex: 1, src: '1.png' },
    { id: 2, opts: ['Real Madrid', 'Atletico Madrid'], correctOptIndex: 0, src: '2.png' },
    { id: 3, opts: ['Bayren Munich 09\' ', 'Borrosia Dortmund 09\' '], correctOptIndex: 1, src: '3.png' },
    { id: 4, opts: ['Los Angeles glaxy', 'Los Alvaro glaxy'], correctOptIndex: 0, src: '4.png' },
    { id: 5, opts: ['Memphis Grizzlies', 'San Antonio Monkeys'], correctOptIndex: 0, src: '5.png' }
];
var gCurrQuestIdx = 0;
var gelQuest = document.querySelector('.quest-continer');
var gelVictory = document.querySelector('.victory');
var gelCorrect = document.querySelector('.correct');
var gelWrong = document.querySelector('.wrong');



function initGame() {
    gCurrQuestIdx = 0;
    renderQuest();
}
function createQuests() {
    return gQuests;
}
function renderQuest() {
    var elBoxHeader = document.querySelector('.box h2');
    elBoxHeader.innerHTML = 'Which club do you see?';
    var strHtml = '';
    strHtml += '<img src="img/' + gQuests[gCurrQuestIdx].src + '" alt==><button class=answer1 onclick=checkAnswer(' +0+ ')>'
        + gQuests[gCurrQuestIdx].opts[0] + '</button><button class=answer2 onclick=checkAnswer(' +1+ ')>'
        + gQuests[gCurrQuestIdx].opts[1] + '</button>';
    gelQuest.innerHTML = strHtml;
}
function checkAnswer(optIdx) {
    if (gQuests[gCurrQuestIdx].correctOptIndex === optIdx) {
        if(gQuests[gCurrQuestIdx].id === gQuests.length){

            gelVictory.style.display ='block';
            gelQuest.style.display='none';
            console.log('victory');
        }
        else{
            gelCorrect.style.display = 'block';
            setTimeout(function() {gelCorrect.style.display = 'none';}, 1000);
            gCurrQuestIdx++;
            if(gCurrQuestIdx < gQuests.length) renderQuest();
        }
        }
        else{
            gelWrong.style.display ='block';
            setTimeout(function() {gelWrong.style.display = 'none';}, 1000);
        }
        // renderQuest();
        // gelCorrect.style.display = 'none';
        // gelWrong.style.display ='none';

    }
