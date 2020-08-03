console.log('Starting up');

var gProjs = [
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },

    {
        id: "touchnums",
        name: "Touch nums",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "touchnums",
        name: "Touch nums",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
   
    
]


function createNewProject (id) {

};

// createNewProject('minesweeper', 'this is a project I worked on ')




function submitForm () {
    var userEmail = $('#formName').val()
    var subject = $('#formSubject').val()
    var message = $('#formText').val()

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=${subject}&body=${message}`)
    
}