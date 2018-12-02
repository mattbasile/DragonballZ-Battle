//DOM Objects we'll need to manipulate.
//=================BODY=====================
const body = document.querySelector("body");
//=================ARENA=====================
const arena = document.querySelector(".arena"); 
const gameStart = document.querySelector(".game-start");
const gameStartBTN = document.querySelectorAll(".player-button");
const gameStartDiv = document.querySelectorAll(".game-start-con");
const mainTitle = document.querySelector(".main-title");
const startBtn = document.querySelector(".start");
// console.log(arena);
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
// Play by Play
const playByPlay = document.querySelector(".play-by-play")
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
// console.log(heroes);
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
    name: "Goku",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/goku.png"
});
const selectedVillain = new Player({
    name: "Frieza",
    health: 50,
    saiyanPwr: 20,
    attackPwr: 10,
    image: "img/frieza.png"
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
// console.log(selectedHero);
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
///ATTACK FUNCTIONS
function heroAttackMove(vil, hero) {
    let activeHealth = vil.health;
    let heroStr = hero.attackPwr;
    let newHealth = activeHealth -= heroStr;
    if(newHealth <=0 ){
        selectedVillain.health = 0;
        vilHealth.innerHTML = `Health: ${selectedVillain.health}`;
        startBtn.style.display ="flex";
        startBtn.innerHTML ="Play Again?";
        startBtn.addEventListener('click', function(){
            window.location.reload();
        });
        return ( `You've destroyed ${vil.name}! Congrats ${hero.name}, you are a true Hero!`)

    } else{
    selectedVillain.health = newHealth;
    vilHealth.innerHTML = `Health: ${selectedVillain.health}`;
    }
}
function vilAttackMove(hero, vil) {
    let activeHealth = hero.health;
    let vilStr = vil.attackPwr;
    let newHealth = activeHealth -= vilStr;
    selectedHero.health = newHealth;
    heroHealth.innerHTML = `Health: ${selectedHero.health}`;
}
//SAIYANATTACKS
function heroSaiyanMove(vil, hero) {
    let activeHealth = vil.health;
    let saiyanStr = hero.attackPwr + Math.floor(Math.random() * Math.floor(`${hero.saiyanPwr}`));
    console.log(saiyanStr);
    let newHealth = activeHealth -= saiyanStr;
    if(newHealth <=0 ){
        selectedVillain.health = 0;
        vilHealth.innerHTML = `Health: ${selectedVillain.health}`;
        startBtn.style.display ="flex";
        startBtn.innerHTML ="Play Again?";
        startBtn.addEventListener('click', function(){
            window.location.reload();
        });
        return ( `You've destroyed ${vil.name}! Congrats ${hero.name}, you are a true Hero!`)

    } else{
    selectedVillain.health = newHealth;
    vilHealth.innerHTML = `Health: ${selectedVillain.health}`;
    }
}
function vilSaiyanMove(hero, vil) {
    let activeHealth = hero.health;
    let saiyanStr = vil.attackPwr + Math.floor(Math.random() * Math.floor(`${vil.saiyanPwr}`));
    console.log(saiyanStr);
    let newHealth = activeHealth -= saiyanStr;
    if(newHealth <=0 ){
        selectedHero.health = 0;
        heroHealth.innerHTML = `Health: ${selectedHero.health}`;
        startBtn.style.display ="flex";
        startBtn.innerHTML ="Play Again?";
        startBtn.addEventListener('click', function(){
            window.location.reload();
        });
        return ( `You've destroyed ${hero.name}! Congrats ${vil.name}, you are a truly Wicked!`)

    } else{
    selectedHero.health = newHealth;
    heroHealth.innerHTML = `Health: ${selectedHero.health}`;
    }
}


//RECOVERY FUNCTIONS
function heroHealMove(hero){
    let activeHealth = hero.health;
    let healed = activeHealth += Math.floor(Math.random() * 11);
    hero.health = healed;
    heroHealth.innerHTML = `Health: ${healed}`;
}
function villainHealMove(vil){
    let activeHealth = vil.health;
    let healed = activeHealth += Math.floor(Math.random() * 11);
    vil.health = healed;
    vilHealth.innerHTML = `Health: ${healed}`;
}

// ONE or TWO PLAYER
function beginGame(){
    mainTitle.innerHTML="Welcome to DBZ Duels!"
    arena.style.display='none'; 
    playByPlay.style.display='none';
    body.style.backgroundImage = "url('img/start_BG.jpg')";
}
function hideStart() {
    arena.style.display='flex';
    playByPlay.style.display='flex';
    gameStart.style.display='none';
    mainTitle.innerHTML="Ready for Battle? Pick a Player!"
};
window.onload = beginGame;

// START FIGHT
function startFight(){
    heroAttack.setAttribute( "onclick", "heroAttackMove(selectedVillain, selectedHero)");
    heroSaiyan.setAttribute("onclick","heroSaiyanMove(selectedVillain, selectedHero)")
    heroHeal.setAttribute("onclick","heroHealMove(selectedHero)");
    vilAttack.setAttribute( "onclick", "vilAttackMove(selectedHero, selectedVillain)");
    vilSaiyan.setAttribute("onclick","vilSaiyanMove(selectedHero, selectedVillain)")
    vilHeal.setAttribute("onclick","villainHealMove(selectedVillain)");
    startBtn.style.display='none';
    mainTitle.style.display='none';
    body.style.background = "url('img/arena_BG.jpg') center center/cover no-repeat"
    
};
    