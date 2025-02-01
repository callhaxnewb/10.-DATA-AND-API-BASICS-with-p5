var flower;
var pokemons;
function preload(){
    flower = loadJSON("flower.json");
    pokemons = loadJSON("pokemon.json");
}
function setup(){
    createCanvas(screen.availWidth,screen.availHeight);
        // flower = loadJSON("flower.json");
        // pokemons = loadJSON("pokemon.json");
    // flower={
    //     name: "sunflower",
    //     col: color(200,220,0)
    // }
}

function draw(){
    background(0);

    fill(flower.r,flower.g,flower.b);
    text(flower.name,10,50);
    for(var i = 0; i < 100; i++){
       text(pokemons.pokemon[i].id,10,(100+15*i));
       text(pokemons.pokemon[i].name,100,(100+15*i));
       text(pokemons.pokemon[i].species,200,(100+15*i));
       text(pokemons.pokemon[i].catch_rate+'%',300,(100+15*i));

    }
}