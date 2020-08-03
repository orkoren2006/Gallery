'use strict';

var size = 36;
var board = Math.sqrt(size);
var gNumbers = [];
var numberedArray = createNumberedArray(gNumbers, size);
var shuffledArray = shuffleArray(numberedArray);
var count = 0
var countClick = 1;
var ID;
var counterStopwatch = 0;


function init(num = 16) {
    size = num;
    board = Math.sqrt(size);
    gNumbers = [];
    numberedArray = createNumberedArray(gNumbers, size);
    shuffledArray = shuffleArray(numberedArray);
    count = 0
    countClick = 1;
    counterStopwatch = 0;
    renderBoard(board);
    // clearInterval(ID);
    // ID = setInterval(stopwatch, 1000);
    stop();
    startStopwatch();

    

   
}

function renderBoard(board) {
    // console.table(board);
    var htmlStr = '<table>';
    for (var i = 0; i < board; i++) {
        htmlStr += '<tr>';
        for (var j = 0; j < board; j++) {
            htmlStr += '<td onclick="cellClicked(this)" data-i="' + i + '" data-j="' + j + '">' + shuffledArray[count] + '</td>';
            count++;
            //console.log(htmlStr);

        }
        htmlStr += '</tr>';
    }
    htmlStr += '</table>'


    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = htmlStr;
}


function cellClicked(clickedNum) {
    if (parseInt(clickedNum.innerHTML) === countClick) {
        clickedNum.style.backgroundColor = 'red';
        countClick++;
        console.log(countClick);
        if (countClick === size + 1) {
            gameOver()
            stop();
        }
    }
}

function gameOver() {
    setTimeout(function () {
        alert('Well done! It took you ' + counterStopwatch + ' seconds');

    }, 100)
}

function stopwatch() {
    var clock = document.querySelector('.stopwatch');
    clock.innerHTML = counterStopwatch
    counterStopwatch++
}

function startStopwatch() {
    ID = setInterval(stopwatch, 1000);

}

function stop() {
    clearInterval(ID)
}


function createNumberedArray(array, length) {
    for (var i = 1; i <= length; i++) {
        array.push(i)
    }
    return array;
};

function shuffleArray(array) {  // understand this function !!! 
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;

}








