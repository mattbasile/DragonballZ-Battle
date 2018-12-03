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
const oneBtn = document.querySelector(".onePlayer");
const oneBtnImg = document.querySelector(".one-player img");
const twoBtn = document.querySelector(".twoPlayer");
const twoBtnImg = document.querySelectorAll(".two-player img");
// console.log(arena);
//================HERO COLUMN==================
const heroCol = document.querySelector(".hero"); 
const heroSelect = document.querySelector(".hero-roster")
const fullRoster = document.querySelectorAll(".roster")
const heroSelectBtns = document.querySelectorAll(".hero-roster button")
// const gokuBtn = document.querySelectorAll(".goku");
// const masterRBtn = document.querySelectorAll(".masterR");
// const piccoloBtn = document.querySelectorAll(".piccolo");
// const krillinBtn = document.querySelectorAll(".krillin");
const heroImg = document.querySelector(".hero-img")
const heroKame = document.querySelector(".hero-kame-glow")
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
const vilKame = document.querySelector(".vil-kame-glow")
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
        this.hits = attributes.hits;
        this.saiyanName = attributes.saiyanName;
        this.attackName = attributes.attackName;
        this.mainColor = attributes.mainColor;
        this.secondColor = attributes.secondColor;
        this.healColor = attributes.healColor;
        this.healColorDark = attributes.healColorDark;
    }
}
//HEROS
const goku = new Player({
    name: "Goku",
    health: 50,
    saiyanPwr: 20,
    saiyanName: "Kaio-Ken Finish",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/goku.png",
    hits: 0,
    mainColor: '#F85B1A',
    secondColor: '#072083',
    healColor: '#A2F5BF',
    healColorDark: '#1F9D55',
});
const masterR = new Player({
    name: "Master Roshi",
    health: 50,
    saiyanPwr: 20,
    saiyanName: "Kamehameha",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/roshi.png",
    hits: 0,
    mainColor: '#E5A25D',
    secondColor: '#423C65',
    healColor: '#A2F5BF',
    healColorDark: '#1F9D55',
});
const piccolo = new Player({
    name: "Piccolo",
    health: 50,
    saiyanPwr: 20,
    saiyanName: "Explosive Breath Cannon",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/piccolo.png",
    hits: 0,
    mainColor: '#77C73C',
    secondColor: '#5A1472',
    healColor: '#A2F5BF',
    healColorDark: '#1F9D55',
});
const krillin = new Player({
    name: "Krillin",
    health: 50,
    saiyanPwr: 20,
    saiyanName: "Kamehameha",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/krillin.png",
    hits: 0,
    mainColor: '#F85B1A',
    secondColor: '#072083',
    healColor: '#A2F5BF',
    healColorDark: '#1F9D55',
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
    saiyanName: "Death Ball",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/frieza.png",
    hits: 0,
    mainColor: '#633183',
    secondColor: '#C1D2C8',
    healColor: '#A2F5BF',
    healColorDark: '#1F9D55',
});
const kidBu = new Player({
    name: "Kid Bu",
    health: 50,
    saiyanPwr: 20,
    saiyanName: "Super Kamehameha",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/kidbu.png",
    hits: 0,
    mainColor: '#D78792',
    secondColor: '#C1D2C8',
    healColor: '#A2F5BF',
    healColorDark: '#56BA80',
    
});
const beerus = new Player({
    name: "Beerus",
    health: 50,
    saiyanPwr: 20,
    saiyanName: "Hakai",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/beerus.png",
    hits: 0,
    mainColor: '#A181AD',
    secondColor: '#47A6DB',
    healColor: '#A2F5BF',
    healColorDark: '#1F9D55',
});
const cell = new Player({
    name: "Cell",
    health: 50,
    saiyanPwr: 20,
    saiyanName: "Special Beam Cannon",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/cell.png",
    hits: 0,
    mainColor: '#517425',
    secondColor: '#131930',
    healColor: '#A2F5BF',
    healColorDark: '#1F9D55',
});
const villains = {
    frieza,
    kidBu,
    beerus,
    cell
}
// Selected Hero & Villain
const selectedHero = new Player({
    name: "Goku",
    health: 50,
    saiyanPwr: 20,
    saiyanName: "Kaio-Ken Finish",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/goku.png",
    hits: 0,
    healColor: '#A2F5BF',
    healColorDark: '#1F9D55',
    mainColor: '',
    secondColor: '',
});
const selectedVillain = new Player({
    name: "Frieza",
    health: 50,
    saiyanPwr: 20,
    saiyanName: "Death Ball",
    attackPwr: 10,
    attackName: "Ki Blast",
    image: "img/frieza.png",
    hits:0,
    healColor: '#51D88A',
    healColorDark: '#1F9D55',
    mainColor: '',
    secondColor: '',
});
function selectHero(){
   const key = this.className;
   const char = heroes[key];
   console.log(key);
   console.log(char);
   heroName.innerHTML= `Hero: ${char.name}`
   heroHealth.innerHTML = `Health: ${char.health}`
   heroImg.setAttribute("src", `${char.image}`);
   //Arena Styles Based On Character
   //Hero Attack Btn
   heroAttack.style.backgroundColor=`${char.mainColor}`;
   heroAttack.style.border=`3px solid ${char.secondColor}`;
   heroAttack.addEventListener("mouseenter", ()=> {
       heroAttack.style.border=`3px solid ${char.mainColor}`;
       heroAttack.style.backgroundColor=`${char.secondColor}`;
       setTimeout(function() {
        heroAttack.style.backgroundColor=`${char.mainColor}`;
        heroAttack.style.border=`3px solid ${char.secondColor}`;
      }, 500);  
   });
   //Hero Saiyan Btn
   heroSaiyan.style.backgroundColor=`${char.secondColor}`;
   heroSaiyan.style.border=`3px solid ${char.mainColor}`;
   heroSaiyan.addEventListener("mouseenter", ()=> {
    heroSaiyan.style.border=`3px solid ${char.secondColor}`;
    heroSaiyan.style.backgroundColor=`${char.mainColor}`;
       setTimeout(function() {
        heroSaiyan.style.backgroundColor=`${char.secondColor}`;
        heroSaiyan.style.border=`3px solid ${char.mainColor}`;
      }, 500);  
   });
   //Hero Health Btn 
   heroHeal.style.backgroundColor=`${char.healColorDark}`;
   heroHeal.style.border=`3px solid ${char.healColor}`;
   heroHeal.addEventListener("mouseenter", ()=> {
    heroHeal.style.border=`3px solid ${char.healColorDark}`;
    heroHeal.style.backgroundColor=`${char.healColor}`;
       setTimeout(function() {
        heroHeal.style.backgroundColor=`${char.healColorDark}`;
        heroHeal.style.border=`3px solid ${char.healColor}`;
      }, 500);  
   });
   selectedHero.health = char.health;
   selectedHero.name = char.name;
   selectedHero.saiyanPwr = char.saiyanPwr;
   selectedHero.attackPwr = char.attackPwr;
   selectHero.image = char.image;
   
}
function selectVil(){
    const key = this.className;
    const char = villains[key];
    console.log(key);
    console.log(char);
    vilName.innerHTML= `Villain: ${char.name}`
    vilHealth.innerHTML = `Health: ${char.health}`
    vilImg.setAttribute("src", `${char.image}`);
    //Arena Styles Based On Character
   //Hero Attack Btn
   vilAttack.style.backgroundColor=`${char.mainColor}`;
   vilAttack.style.border=`3px solid ${char.secondColor}`;
   vilAttack.addEventListener("mouseenter", ()=> {
        vilAttack.style.border=`3px solid ${char.mainColor}`;
        vilAttack.style.backgroundColor=`${char.secondColor}`;
    setTimeout(function() {
        vilAttack.style.backgroundColor=`${char.mainColor}`;
        vilAttack.style.border=`3px solid ${char.secondColor}`;
      }, 500);  
   });
   //Hero Saiyan Btn
   vilSaiyan.style.backgroundColor=`${char.secondColor}`;
   vilSaiyan.style.border=`3px solid ${char.mainColor}`;
   vilSaiyan.addEventListener("mouseenter", ()=> {
    vilSaiyan.style.border=`3px solid ${char.secondColor}`;
    vilSaiyan.style.backgroundColor=`${char.mainColor}`;
       setTimeout(function() {
        vilSaiyan.style.backgroundColor=`${char.secondColor}`;
        vilSaiyan.style.border=`3px solid ${char.mainColor}`;
      }, 500);  
   });
   //Hero Health Btn 
   vilHeal.style.backgroundColor=`${char.healColorDark}`;
   vilHeal.style.border=`3px solid ${char.healColor}`;
   vilHeal.addEventListener("mouseenter", ()=> {
    vilHeal.style.border=`3px solid ${char.healColorDark}`;
    vilHeal.style.backgroundColor=`${char.healColor}`;
       setTimeout(function() {
        vilHeal.style.backgroundColor=`${char.healColorDark}`;
        vilHeal.style.border=`3px solid ${char.healColor}`;
      }, 500);  
   });
    selectedVillain.health = char.health;
    selectedVillain.name = char.name;
    selectedVillain.saiyanPwr = char.saiyanPwr;
    selectedVillain.attackPwr = char.attackPwr;
    selectedVillain.image = char.image;
 }

///ATTACK FUNCTIONS
function heroAttackMove(vil, hero) {
    let accuracy = Math.floor(Math.random() * 11);
    if(accuracy >= 3){
    hero.hits += 1;
    if(hero.hits >= 3){
        herosaiyainActivate(selectedVillain,selectedHero);
    }
    let activeHealth = vil.health;
    let heroStr = hero.attackPwr;
    let newHealth = activeHealth -= heroStr;
    heroActivateKame();
    playByPlay.innerHTML= `Nice you hit ${vil.name} for ${heroStr}. Their health is ${newHealth}`;
    if(newHealth <=0 ){
        selectedVillain.health = 0;
        vilHealth.innerHTML = `Health: ${selectedVillain.health}`;
        setTimeout(function(){
            startBtn.style.display ="flex";
            startBtn.innerHTML ="Play <br> Again?";
            startBtn.addEventListener('click', function(){
            window.location.reload();
        });
        }, 800);
        playByPlay.innerHTML= `You've destroyed ${vil.name}! Congrats ${hero.name}, you are a true Hero!`
    } else{
    selectedVillain.health = newHealth;
    vilHealth.innerHTML = `Health: ${selectedVillain.health}`;
    }
  } else{
      playByPlay.innerHTML= `How unusual your attack has missed!`;
  }
}
function vilAttackMove(hero, vil) {
    let accuracy = Math.floor(Math.random() * 11);
    if(accuracy >= 3){
    vil.hits +=1;
    if(vil.hits >= 3){
        villainsaiyainActivate(selectedHero, selectedVillain);
    }
    let activeHealth = hero.health;
    let vilStr = vil.attackPwr;
    let newHealth = activeHealth -= vilStr;
    vilActivateKame();
    playByPlay.innerHTML= `Nice you hit ${hero.name} for ${vilStr}. Their health is ${newHealth}`;
    if(newHealth <=0 ){
        selectedHero.health = 0;
        heroHealth.innerHTML = `Health: ${selectedHero.health}`;
        setTimeout(function(){
            startBtn.style.display ="flex";
        startBtn.innerHTML ="Play <br> Again?";
        startBtn.addEventListener('click', function(){
            window.location.reload();
        });
        }, 800);
        playByPlay.innerHTML=  `You've destroyed ${hero.name}! Congrats ${vil.name}, you are a truly Wicked!`;
    } else{
    selectedHero.health = newHealth;
    heroHealth.innerHTML = `Health: ${selectedHero.health}`;
    }
 } else{
    playByPlay.innerHTML= `How unusual your attack has missed!`;
 }
}
//SAIYANATTACKS
function heroSaiyanMove(vil, hero) {
    let activeHealth = vil.health;
    let saiyanStr = hero.attackPwr + Math.floor(Math.random() * Math.floor(`${hero.saiyanPwr}`));
    let newHealth = activeHealth -= saiyanStr;
    heroActivateKame();
    if(newHealth <=0 ){
        selectedVillain.health = 0;
        vilHealth.innerHTML = `Health: ${selectedVillain.health}`;
        setTimeout(function(){
            startBtn.style.display ="flex";
            startBtn.innerHTML ="Play <br> Again?";
            startBtn.addEventListener('click', function(){
            window.location.reload();
            });
        }, 800);
        playByPlay.innerHTML= `You've destroyed ${vil.name}! Congrats ${hero.name}, you are a true Hero!`;

    } else{
    selectedVillain.health = newHealth;
    vilHealth.innerHTML = `Health: ${selectedVillain.health}`;
    }
}
function vilSaiyanMove(hero, vil) {
    let activeHealth = hero.health;
    let saiyanStr = vil.attackPwr + Math.floor(Math.random() * Math.floor(`${vil.saiyanPwr}`));
    let newHealth = activeHealth -= saiyanStr;
    vilActivateKame();
    if(newHealth <=0 ){
        selectedHero.health = 0;
        heroHealth.innerHTML = `Health: ${selectedHero.health}`;
        setTimeout(function(){
            startBtn.style.display ="flex";
            startBtn.innerHTML ="Play <br> Again?";
            startBtn.addEventListener('click', function(){
            window.location.reload();
            });
        }, 800);
        playByPlay.innerHTML= `You've destroyed ${hero.name}! Congrats ${vil.name}, you are a truly Wicked!`;

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
    playByPlay.innerHTML= `You've healed ${hero.name}! Your health is now ${healed}!`;
    heroHealth.innerHTML = `Health: ${healed}`;
}
function villainHealMove(vil){
    let activeHealth = vil.health;
    let healed = activeHealth += Math.floor(Math.random() * 11);
    vil.health = healed;
    playByPlay.innerHTML= `You've healed ${vil.name}! Your health is now ${healed}!`;
    vilHealth.innerHTML = `Health: ${healed}`;
}
// ONE or TWO PLAYER
function beginGame(){
    mainTitle.innerHTML="Welcome to DBZ Duels!"
    arena.style.display='none'; 
    playByPlay.style.display='none';
    body.style.background = "url(img/start_BG.jpg) center center / cover no-repeat";
}
function starTextOne(){
    oneBtnImg.style.display='none'; 
    oneBtn.innerHTML="One Player";
}
function starTextTwo(){
    twoBtnImg.forEach(function(img) {console.log(img)});
    twoBtn.innerHTML="Two Player";
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
    heroSaiyan.style.textDecoration='line-through';
    heroHeal.setAttribute("onclick","heroHealMove(selectedHero)");
    vilAttack.setAttribute( "onclick", "vilAttackMove(selectedHero, selectedVillain)");
    vilSaiyan.style.textDecoration='line-through';
    vilSaiyan.setAttribute("onclick","vilSaiyanMove(selectedHero, selectedVillain)")
    vilHeal.setAttribute("onclick","villainHealMove(selectedVillain)");
    startBtn.style.display='none';
    mainTitle.style.display='none';
    body.style.background = "url('img/arena_BG.jpg') center center/cover no-repeat";
    fullRoster.forEach(function(name){name.style.display='none';})
    if(Math.floor(Math.random() * 2) + 1 == 1 ){
        playByPlay.innerHTML="Player 1, Go First!"
    } else{
        playByPlay.innerHTML="Player 2, Go First!";
    }
};
function herosaiyainActivate(vil, hero){
    let hp = 30;
    if(vil.health <= hp && hero.hits >= 3){
        console.log("in");
        heroSaiyan.setAttribute("onclick","heroSaiyanMove(selectedVillain, selectedHero)");
        heroSaiyan.style.textDecoration='none';
    } 
}
function villainsaiyainActivate(hero, vil){
    let hp = 30;
    if(hero.health <= hp && vil.hits >= 3){
        vilSaiyan.setAttribute("onclick","vilSaiyanMove(selectedHero, selectedVillain)");
        vilSaiyan.style.textDecoration='none';
    } 
}
   
function heroActivateKame(){
    heroKame.style.display='block';
    setTimeout(function() {
        heroKame.style.display='none';
        heroKame.style.position= '0';
      }, 197);  
}
function vilActivateKame(){
    vilKame.style.display='block';
    setTimeout(function() {
        vilKame.style.display='none';
        vilKame.style.position= '0';
      }, 197);  
}
