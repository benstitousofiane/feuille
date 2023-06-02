
let papierBouton  = document.getElementById('papier') ;
let caillouxBouton = document.getElementById('cailloux');
let ciseauxBouton  = document.getElementById('ciseaux') ;

let resultatElement = document.getElementById('resultat');
//fonction pour avoir un nombre qui est dans l'intervale entier [|0;n|]
var entierAlea = (maximum) => Math.floor(Math.random()*(maximum+1));

let papier   = false ;
let cailloux = false;
let ciseaux  = false ;

let alea;

papierBouton.addEventListener('click', () => {
    alea = entierAlea(2);
    papier = true;
    if (papier && alea == 0){
        resultatElement.innerHTML = "Match nulle 🛡️⏸️➡️🧾 ";
    } else if (papier && alea == 1){
        resultatElement.innerHTML = "Gagner ! 💪😤🏆➡️🗿";
    } else if (papier && alea == 2){
        resultatElement.innerHTML = "Perdu ! 😭🛴➡️✂️";
    }
    papier = false;
})

caillouxBouton.addEventListener('click', () => {
    alea = entierAlea(2);
    cailloux = true;
    if (cailloux && alea == 1){
        resultatElement.innerHTML = "Match nulle 🛡️⏸️➡️🗿 ";
    } else if (cailloux && alea == 0){
        resultatElement.innerHTML = "Perdu ! 😭🛴➡️🧾";
    } else if (cailloux && alea == 2){
        resultatElement.innerHTML = "Gagner ! 💪😤🏆➡️✂️";
    }
    cailloux = false;
})

ciseauxBouton.addEventListener('click', () => {
    alea = entierAlea(2);
    cailloux = true;
    if (cailloux && alea == 2){
        resultatElement.innerHTML = "Match nulle 🛡️⏸️➡️✂️";
    } else if (cailloux && alea == 0){
        resultatElement.innerHTML = "Gagner ! 💪😤🏆➡️🧾";
    } else if (cailloux && alea == 1){
        resultatElement.innerHTML = "Perdu ! 😭🛴➡️🗿";
    } 
    cailloux = false;
})