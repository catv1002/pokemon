var Jolteon = {
        name: "Jolteon",
        life: 100,
        url: "https://media.giphy.com/media/14op7JMyTkOc6c/giphy.gif",
        attack: 30
    },
    Totodile = {
        name: "Totodile",
        life: 100,
        url: "https://78.media.tumblr.com/39c7c60c33e39c8cfcc56e8730dd3c81/tumblr_inline_oy6hb0xlDo1rf6gm1_540.gif",
        attack: 20
    },
    Squirtle = {
        name: "Squirtle",
        life: 100,
        url: "http://rs387.pbsrc.com/albums/oo315/PokemonArk/Gen1/Shiny/007s.gif~c200",
        attack: 20
    },
    Caterpie = {
        name: "Caterpie",
        life: 100,
        url: "http://rs1140.pbsrc.com/albums/n563/Nathaniel915/Pokemon%20Gif/Caterpie.gif~c200",
        attack: 10
    },
    Charizard = {
        name: "Charizard",
        life: 100,
        url: "http://pa1.narvii.com/5863/84875492894eda50e0ab1fd0402dfac62d7f9787_hq.gif",
        attack: 40
    },
    Rhydon = {
        name: "Rhydon",
        life: 100,
        url: "https://78.media.tumblr.com/tumblr_mcj0w9cloe1rnep7do1_500.gif",
        attack: 40
    };

function Initialize() {
    
    document.getElementById("bar-enem").style.width = "20rem";
    document.getElementById("bar-char").style.width = "20rem";
    var player = localStorage.getItem('player');
    var enemy = localStorage.getItem('enemy');
    player.width = "20rem";
    enemy.width = "20rem";
    enemy.hit = enemy.hit = enemy.width.split("rem")[0] * 1 - (((enemy.life - char.attack) * (enemy.width.split("rem")[0] * 1)) / enemy.life);

}

function Attack() {
    var enemBarLife = document.getElementById("bar-enem").style.width,
        charBarLife = document.getElementById("bar-char").style.width;

    enemBarLife = (enemBarLife.split("rem")[0] * 1) - enem.hit;

    document.getElementById("bar-enem").style.width = enemBarLife + "rem";



}