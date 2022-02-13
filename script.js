window.onload = () => {

let order = [];
let clickOrder = [];
let score = 0;

// 0 GREEN 1 RED 2 YELLOW 3 BLUE
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

// console.log(green, 'green');

const chooseOrder = () => {
  const colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickOrder = [];

  for (let i in order) {
    const elementColor = createColorElement(order[i]);
    // console.log(i, 'i');
    lightColor(elementColor, Number(i) + 1)
  }

}

// acende a proxima cor
const lightColor = (element, number) => {
  number *= 750;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  }, number + 300);
}

// verifica se os cliques sao os mesmos da ordem gerada
const checkOrder = () => {
  for (let i in clickOrder) {
    if(clickOrder[i] !== order[i]) {
      gameover();
      break;
    }
  }
  if(clickOrder.length === order.length) {
    alert(`Pontuação: ${score}\nVocẽ acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

// funcao do clique
const clickColor = (color) => {
  // alert(`clique color ${color}`);
  clickOrder[clickOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}


// funcao que retorna a cor
const createColorElement = (color) => {
  if(color === 0) {
    return green;
  } else if(color === 1) {
    return red;
  } else if(color === 2) {
    return yellow;
  } else {
    return blue;
  }
}

// funcao para proximo nivel do jogo
const nextLevel = () => {
  score += 1;
  chooseOrder();
}

// funcao para game over
const gameover = () => {
  alert(`Pontuação: ${order}\nVocê perdeu o jogo! Clique em OK para iniciar um novo jogo.`);
  order = [];
  clickOrder = [];
  playGame();
}

// funcao para iniciar o jogo novamente
const playGame = () => {
  alert('Bem vindo ao jogo Genius! Iniciando um novo jogo!');
  score = 0;
  nextLevel();
}

const eita = () => {
  alert('eita');
}

green.addEventListener('click', () => clickColor(0));
red.addEventListener('click', () => clickColor(1));
yellow.addEventListener('click', () => clickColor(2));
blue.addEventListener('click', () => clickColor(3));

playGame();

}
