// The 'battle' interactions take place between instances of the Character class, each with a name, hp, and (attack) power

class Character {
  constructor(name, hp, power){
    this._name = name;
    this._hp = hp;
    this._power = power;
  }

  get name() {
    return this._name;
  }
  get hp() {
    return this._hp;
  }
  get power() {
    return this._power;
  }

  set hp(newHp) {
    this._hp = newHp;
  }
};

// instances of the Character class will typically be the user and it's opponent(s), and often start with 20hp but varying power
let player = new Character('player', 20, 5);
let enemy = new Character('enemy', 20, 3);

// stillPlaying checks that both characters still have health. A game ends when one character has <= 0 hp
const stillPlaying = () => {
  return (enemy.hp > 0 && player.hp > 0);
};

// when the user selects 'attack', both user and enemy hp is reduced by the other's (attack) power
const chooseAttack = () => {
  enemy.hp -= player.power;
  player.hp -= enemy.power;

  console.log(`Enemy now has ${enemy.hp} hp left.`);
  console.log(`Player now has ${player.hp} hp left.`);
};

// playerHp and enemyHp select the html elements that display the corresponding info
const playerHp = document.getElementById("player-hp");
const enemyHp = document.getElementById("enemy-hp");

// the Btn (button) variables select the corresponding html button inputs
const attackBtn = document.getElementById("attack");
const defendBtn = document.getElementById("defend");

// when a button is clicked, the corresponding function is called and the page is updated to reflect related changes
attackBtn.addEventListener("click", function() {
  chooseAttack();
  playerHp.innerHTML = `HP: ${player.hp}`;
  enemyHp.innerHTML = `HP: ${enemy.hp}`;
});
