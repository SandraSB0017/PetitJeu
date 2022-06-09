const btnJaune = document.getElementById('btn_jaune');
const btnBleu = document.getElementById('btn_bleu');
const btnRouge = document.getElementById('btn_rouge');
const replay = document.getElementById('rejouer');
let titre =document.getElementById('titre');
let compteur = 0;
console.log(compteur);

btnJaune.addEventListener('click', function(){
    add();

});

btnBleu.addEventListener('click', function(){
    add();
    console.log(compteur);

});

btnRouge.addEventListener('click', function(){
   remove();

});


function add(){
    compteur = compteur +1;
    titre.innerText = compteur;
};

setTimeout (function(){
    btnRouge.remove();
    btnBleu.remove();
    btnJaune.remove();
    console.log("fin du chrono");

},20000);

function remove(){
    compteur = compteur -1;
    titre.innerText = compteur;
};

replay.addEventListener('click', function(){
    location.reload();

});

