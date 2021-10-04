var tiger, hunter, obstacles, tigerAm, tigerImg, bgImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground, invisibleGround, groundImage;

function preload() {
    tigerAm = loadAnimation("images/t1.png","images/t2.png","images/t3.png","images/t4.png","images/t5.png","images/t6.png","images/t7.png","images/t8.png","images/t9.png","images/t10.png");
    tigerImg = loadImage("images/t1.png")
    bgImg = loadImage("images/jungle1.png");
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    tiger = createSprite(windowWidth/2-10,windowHeight-100);
    tiger.addAnimation("tigerRunning",tigerAm);
    //tiger.addImage(tigerImg);
    tiger.scale = 0.25;
    //tiger.addAnimation("tigerRunning",tigerAm);
    hunter = createSprite(windowWidth/2-80,windowHeight-10);
    ground = createSprite(windowWidth/2,windowHeight-50,windowWidth,20);
    ground.visible= false;
    
}

function draw() {
    background(bgImg);
    tiger.collide(ground);
    
    if(gameState = PLAY) {
        
    }
    drawSprites();
}