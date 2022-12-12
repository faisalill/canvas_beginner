const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.fillStyle = 'white'
ctx.strokeStyle = 'white'
ctx.lineWidth = 7;
ctx.beginPath()
ctx.arc(200,200,100,0, Math.PI*2)
ctx.stroke()
