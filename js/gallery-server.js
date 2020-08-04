console.log('Starting up');

var gProjs = [ 
    {
        id: "touchnums",
        name: "Touch Nums",
        type: "Boardgame",
        title: "Check all numbered cells by their order",
        desc: "It might look simple, but it's my first excersice and I'm proud of it!",
        url: "Play now!",
        publishedAt: new Date().getFullYear(),
        labels: ["Matrixes", "keyboard events"],
    },

    {
        id: "minesweeper",
        name: "Minesweeper",
        type: "Boardgame",
        title: "Watch out of the mines!",
        desc: "My first complete board game I created. Based mostly on the negs function with an engaging 90's graphic",
        url: "Play now!",
        publishedAt: new Date().getFullYear(),
        labels: ["Matrixes", "keyboard events", "negs"],
    },

    {
        id: "bookshop",
        name: "Bookshop",
        type: "CRUDL",
        title: "My first online store project",
        desc: "This is how you do it with CRUDL",
        url: "Check it out!",
        publishedAt: new Date().getFullYear(),
        labels: ["Matrixes", "keyboard events"],
    },
   
    
]

function createNewProject (id) { // to finish later

};


function submitForm () {
    var userEmail = $('#formName').val()
    var subject = $('#formSubject').val()
    var message = $('#formText').val()

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=${subject}&body=${message}`)
    
}