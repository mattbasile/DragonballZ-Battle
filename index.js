//DOM Objects we'll need to manipulate.
//=================ARENA=====================
const arena = document.querySelector(".arena"); 
console.log(arena);
//================HERO COLUMN==================
const heroCol = document.querySelector(".hero"); 
const heroSelect = document.querySelector(".hero-roster")
const heroName = document.querySelector(".hero-title")
const heroHealth = document.querySelector(".hero-health")
const heroAttack = document.querySelector(".hero-attack")
const heroSaiyan = document.querySelector(".hero-saiyan")
const heroHeal = document.querySelector(".hero-heal")

//================VILLAIN COLUMN==================
const vilCol = document.querySelector(".villain"); 
const vilSelect = document.querySelector(".vil-roster")
const vilName = document.querySelector(".vil-title")
const vilHealth = document.querySelector(".vil-health")
const vilAttack = document.querySelector(".vil-attack")
const vilSaiyan = document.querySelector(".vil-saiyan")
const vilHeal = document.querySelector(".vil-heal")

const heroes = {
    "Goku":{
        name: "Goku",
        power: 10,
        health: 50,
        saiyan: 50,
    },
    "Master Roshi":{
        name: "Master Roshi",
        power: 10,
        health: 60,
        saiyan: 50,
    },
    "Piccolo": {
        name: "Piccolo",
        power: 10,
        health: 70,
        saiyan: 50,
    },
    "Krillin": {
        name: "Krillin",
        power: 10,
        health: 80,
        saiyan: 50,
    },

}

function selectHero(){

}