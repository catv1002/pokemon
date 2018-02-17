function selectPoke1() {
    var poke1 = document.getElementById('poke1');
    console.log(poke1.alt);
    localStorage.setItem("player", poke1.alt);
    window.open("enemy.html");

}

function selectPoke2() {
    var poke2 = document.getElementById('poke2');
    console.log(poke2.alt);
    localStorage.setItem("player", poke2.alt);
    window.open("enemy.html");
}

function selectPoke3() {
    var poke3 = document.getElementById('poke3');
    console.log(poke3.alt);
    localStorage.setItem("player", poke3.alt);
    window.open("enemy.html");
}