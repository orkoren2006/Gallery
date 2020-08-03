'use strict'

var gQuests = [
    { id: 'bicycle.jpg', opts: ['Bicicleta', 'Aguacate', 'Pantalon', 'Manzana'], correctOptIndex: 0 },
    { id: 'book.jpg', opts: ['Perro', 'Gato', 'Nariz', 'Libro'], correctOptIndex: 3 },
    { id: 'dog.jpg', opts: ['Manzana', 'Ciuadad', 'Perro', 'Abogado'], correctOptIndex: 2 },
    { id: 'apple.jpg', opts: ['Naranja', 'Fresa', 'Manzana', 'Pera'], correctOptIndex: 2 }
];
// var gCurrQuestIdx = 0
var i = 0;

function StartGame(quests) {
    if(i !== 4) {
    var picture = document.querySelector('.picture')
    picture.innerHTML = '<img src="img/' + quests[i]['id'] + '">';
    for (var j = 1; j <= quests[i]['opts'].length; j++) {
        document.querySelector('.button' + j + '').innerHTML = quests[i].opts[j - 1]
    }
}
};

function click1(btn) {
    var index = gQuests[i]['correctOptIndex']
    if (btn.innerHTML === gQuests[i]['opts'][index]) {
        i++;
        console.log(i);
        StartGame(gQuests); 
        if(i === 4) {
            gameOver()
        }
    }
    else {
        alert('Try again') }
        
};

function gameOver() {
    alert('Muy Bien! Are you sure you aren\'t Mexican?')
};

// btn.innerHTML ----> data set / data attribute 