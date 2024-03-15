let cor;
let poseX; //posição x
let poseY; //posição y
let size; //tamanho da bolinha
let fundoR; //cor do fundo RED
let fundoG; //cor do fundo GREEN
let fundoB; //cor do fundo BLUE
let fundoX; //largura do fundo
let fundoY; //altura do fundo

function setup() {
  fundoX = random(400, 800);
  fundoY = random(400, 800);
  createCanvas(fundoX, fundoY);
  fundoR = random(0,255);
  fundoG = random(0,255);
  fundoB = random(0,255);
  background(fundoR, fundoG, fundoB);
  cor = color(random(0,255), random(0,255) , random(0,255));
  poseX = 200;
  poseY = 200;
  size = random(20, 150);
}


function draw() {
  
  fill(cor);
  circle(poseX,poseY,size);
  
  
  
  if (mouseX < poseX){
    poseX = poseX - 1;
  }
  
  if (mouseX > poseX){
    poseX = poseX + 1
  }
  
  if (mouseY < poseY){
    poseY--;
  }
  
  if (mouseY > poseY){
    poseY++;
  }
  
  if (mouseIsPressed){
    background(random(0,255), random(0,255), random(0,255));
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
    size = (random(20,150));
  }
}