//DOM Objects we'll need to manipulate.
//=================ARENA=====================
const arena = document.querySelector(".arena"); 
console.log(arena);
//================HERO COLUMN==================
const heroCol = document.querySelector(".hero"); 
const heroSelect = document.querySelector(".hero-roster")
const heroSelectBtns = document.querySelectorAll(".hero-roster button")
// const gokuBtn = document.querySelectorAll(".goku");
// const masterRBtn = document.querySelectorAll(".masterR");
// const piccoloBtn = document.querySelectorAll(".piccolo");
// const krillinBtn = document.querySelectorAll(".krillin");
const heroImg = document.querySelector(".hero-img")
const heroName = document.querySelector(".hero-title")
const heroHealth = document.querySelector(".hero-health")
const heroAttack = document.querySelector(".hero-attack")
const heroSaiyan = document.querySelector(".hero-saiyan")
const heroHeal = document.querySelector(".hero-heal")

//================VILLAIN COLUMN==================
const vilCol = document.querySelector(".villain"); 
const vilSelect = document.querySelector(".vil-roster")
const vilName = document.querySelector(".vil-title")
const vilImg = document.querySelector(".vil-img")
const vilHealth = document.querySelector(".vil-health")
const vilAttack = document.querySelector(".vil-attack")
const vilSaiyan = document.querySelector(".vil-saiyan")
const vilHeal = document.querySelector(".vil-heal")



class Player {
    constructor(attributes){
        this.name = attributes.name;
        this.health = attributes.health;
        this.saiyanPwr = attributes.saiyanPwr;
        this.attackPwr = attributes.attackPwr;
        this.image = attributes.image;
    }
}

//HEROS
const goku = new Player({
    name: "Goku",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/goku.png"
});
const masterR = new Player({
    name: "Master Roshi",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/roshi.png"
});
const piccolo = new Player({
    name: "Piccolo",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/piccolo.png"
});
const krillin = new Player({
    name: "Krillin",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/krillin.png"
});
const heroes = {
    goku,
    masterR,
    piccolo,
    krillin
}
console.log(heroes);
//Villains
const frieza = new Player({
    name: "Frieza",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/frieza.png"
});
const kidBu = new Player({
    name: "Kid Bu",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/kidbu.png"
});
const beerus = new Player({
    name: "Beerus",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/beerus.png"
});
const cell = new Player({
    name: "Cell",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/cell.png"
});
const villains = {
    frieza,
    kidBu,
    beerus,
    cell
}

const selectedHero = new Player({
    name: "Hero",
    health: 0,
    saiyanPwr: 0,
    attackPwr: 0,
    image: "img/goku.png",
});
const selectedVillain = new Player({
    name: "Villan",
    health: 0,
    saiyanPwr: 20,
    attackPwr: 0,
    image: "img/frieza.png",
});


function selectHero(){
   const key = this.className;
   const char = heroes[key];
   console.log(key);
   console.log(char);
   heroName.innerHTML= `Hero: ${char.name}`
   heroHealth.innerHTML = `Health: ${char.health}`
   heroImg.setAttribute("src", `${char.image}`);
   selectedHero.health = char.health;
   selectedHero.name = char.name;
   selectedHero.saiyanPwr = char.saiyanPwr;
   selectedHero.attackPwr = char.attackPwr;
   selectHero.image = char.image;
}
console.log(selectedHero);

function selectVil(){
    const key = this.className;
    const char = villains[key];
    console.log(key);
    console.log(char);
    vilName.innerHTML= `Villain: ${char.name}`
    vilHealth.innerHTML = `Health: ${char.health}`
    vilImg.setAttribute("src", `${char.image}`);
    selectedVillain.health = char.health;
    selectedVillain.name = char.name;
    selectedVillain.saiyanPwr = char.saiyanPwr;
    selectedVillain.attackPwr = char.attackPwr;
    selectedVillain.image = char.image;
 }


// function heroAttack(){

// }