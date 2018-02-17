

function selectPoke1() {
    var poke1 = document.getElementById('poke1');
    document.getElementById("pokemon-escogido").innerHTML=poke1.alt;
    console.log(poke1.alt);

}

function selectPoke2() {
    var poke2 = document.getElementById('poke2');
    document.getElementById("pokemon-escogido").innerHTML=poke2.alt;
    console.log(poke2.alt);


}

function selectPoke3() {
    var poke3 = document.getElementById('poke3');
    document.getElementById("pokemon-escogido").innerHTML=poke3.alt;
    console.log(poke3.alt);
}

function sendEnemy(){
    var pokemon = document.getElementById('pokemon-escogido').innerHTML;
    localStorage.setItem("enemy",pokemon);
    window.open("figth.html");
}
