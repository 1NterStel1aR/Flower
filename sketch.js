let petals = [];

function setup() {
  createCanvas(600, 400);
  
  for (let i = 0; i < 100; i++) {
    let petal = {
      x: random(width),
      y: random(-100, -10),
      size: random(10, 20),
      speedY: random(1, 5),
      rotation: random(TWO_PI),
      rotationSpeed: random(-0.05, 0.05),
      color: [random(255), random(255), random(255, 200, 255)],
    };
    
    petals.push(petal);
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < petals.length; i++) {
    let petal = petals[i];
    
    petal.y += petal.speedY;
    petal.rotation += petal.rotationSpeed;
    
    if (petal.y > height + petal.size) {
      petal.y = random(-100, -10);
    }
    
    push();
    translate(petal.x, petal.y);
    rotate(petal.rotation);
    fill(petal.color);
    noStroke();
    
    // 꽃잎 그리기
    beginShape();
    vertex(0, 0);
    bezierVertex(petal.size / 2, -petal.size / 2, petal.size / 2, petal.size / 2, 0, petal.size);
    bezierVertex(-petal.size / 2, petal.size / 2, -petal.size / 2, -petal.size / 2, 0, 0);
    endShape(CLOSE);
    
    pop();
  }
}
