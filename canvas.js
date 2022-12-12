const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const ParticleArray  = []
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  
});

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  ParticleArray.push(new Particle())
});

// function drawCircle() {
//   ctx.fillStyle = "white";
//   ctx.lineWidth = 7;
//   ctx.beginPath();
//   ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
//   ctx.fill();
// }

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random()*canvas.width
    // this.y = Math.random()*canvas.height
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size>1){
        this.size -= 0.1
    }
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

console.log(ParticleArray);
function particleHandler () {
    for (let i =0; i< ParticleArray.length-1; i++){
        ParticleArray[i].update();
        ParticleArray[i].draw();
        if (ParticleArray[i].size <=1.1){
            ParticleArray.splice(i,1);
            console.log(ParticleArray.length)
            i--; 
        }
    }
}
function animate() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  particleHandler()
  requestAnimationFrame(animate);
}
animate();
