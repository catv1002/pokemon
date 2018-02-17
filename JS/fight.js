var arrayPokemon = [{
    name: "Jolteon",
    life: "16rem",
    lvl: "40lvl",
    url: "https://media.giphy.com/media/14op7JMyTkOc6c/giphy.gif",
    attack: 3
}, {
    name: "Totodile",
    life: "15rem",
    lvl: "20lvl",
    url: "https://78.media.tumblr.com/39c7c60c33e39c8cfcc56e8730dd3c81/tumblr_inline_oy6hb0xlDo1rf6gm1_540.gif",
    attack: 2
}, {
    name: "Squirtle",
    life: "16rem",
    lvl: "10lvl",
    url: "http://rs387.pbsrc.com/albums/oo315/PokemonArk/Gen1/Shiny/007s.gif~c200",
    attack: 2
}, {
    name: "Caterpie",
    life: "16rem",
    lvl: "15lvl",
    url: "http://rs1140.pbsrc.com/albums/n563/Nathaniel915/Pokemon%20Gif/Caterpie.gif~c200",
    attack: 1
}, {
    name: "Charizard",
    life: "16rem",
    lvl: "25lvl",
    url: "http://pa1.narvii.com/5863/84875492894eda50e0ab1fd0402dfac62d7f9787_hq.gif",
    attack: 4
}, {
    name: "Rhydon",
    life: "16rem",
    lvl: "30lvl",
    url: "https://78.media.tumblr.com/tumblr_mcj0w9cloe1rnep7do1_500.gif",
    attack: 4
}];

var selectEnemy = null;

function Initialize() {

    var strPlayer = localStorage.getItem('player');
    var strEnemy = localStorage.getItem('enemy');

    var selectPlayer = null;

    //Correr lista de pokemones 
    for (i = 0; i < arrayPokemon.length; i++) {
        selectPlayer = arrayPokemon[i].name == strPlayer ? arrayPokemon[i] : null;
        if (selectPlayer != null) {
            break;
        }
    }
        //Correr lista de pokemones enemigos
    for (i = 0; i < arrayPokemon.length; i++) {
        selectEnemy = arrayPokemon[i].name == strEnemy ? arrayPokemon[i] : null;
        if (selectEnemy != null) {
            break;
        }
    }

    //Cargando datos para el enemigo
    document.getElementById("img-enemy").src = selectEnemy.url;
    document.getElementById("name-enemy").innerHTML = selectEnemy.name;
    document.getElementById("lvl-enemy").innerHTML = selectEnemy.lvl;
    document.getElementById("bar-enemy").style.width = selectEnemy.life;


    //Cargando datos para el enemigo
    document.getElementById("img-player").src = selectPlayer.url;
    document.getElementById("name-player").innerHTML = selectPlayer.name;
    document.getElementById("lvl-player").innerHTML = selectPlayer.lvl;
    document.getElementById("bar-player").style.width = selectPlayer.life;


}

function Attack() {
    var enemBarLife = document.getElementById("bar-enemy").style.width,
        playerBarLife = document.getElementById("bar-player").style.width;
    hit = (enemBarLife.split("rem")[0] * 1) - selectEnemy.attack;
    document.getElementById("bar-enemy").style.width = hit+ "rem";
}