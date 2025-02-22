console.log("Feito por Arthur e Gustavo");
const imgpika = document.getElementById("imgpika");
const nomepika = document.getElementById("nomepika");
const numpass = document.getElementById("numPass");
const numsmash = document.getElementById("numSmash");
var pass, smash, jogadas;
pass = 0;
smash = 0;
jogadas = 0;

function smashOrPass(smashVar) {
  if (smashVar == true) {
    smash++;
    jogadas++;
    numsmash.innerHTML = smash;
    console.log("Jogou:", jogadas);
    console.log("Smashou:", smash);
    gerarPokemon()
  } else {
    pass++;
    jogadas++;
    numpass.innerHTML = pass;
    console.log("Jogou:", jogadas);
    console.log("Passou:", pass);
    gerarPokemon()
  }
}

function gerarPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=50000&offset=0")
    .then((response) => response.json())
    .then((data) => {
      const pokemons = data.results;
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      console.log(randomIndex);
      const randomPokemon = pokemons[randomIndex];
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon.name}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          imgpika.src = data.sprites.front_default;
          nomepika.innerHTML = data.name;
        });
    });
}

document.addEventListener("DOMContentLoaded", async () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=50000&offset=0")
    .then((response) => response.json())
    .then((data) => {
      const pokemons = data.results;
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      console.log(randomIndex);
      const randomPokemon = pokemons[randomIndex];
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon.name}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          imgpika.src = data.sprites.front_default;
          nomepika.innerHTML = data.name;
        });
    });
});
