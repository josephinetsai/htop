function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  // Draw triangle
  ctx.lineWidth = 3;


  //draw circle
  ctx.beginPath();
  ctx.arc(20,75, 50, -2.3, Math.PI * 0.52, false);
  ctx.stroke();


  //Large triangle
  ctx.beginPath();
  ctx.moveTo(-300,100);
  ctx.lineTo (-160,100);
  ctx.moveTo (64,100);
  ctx.lineTo(200,100);
  ctx.lineTo(-70,-180);
  ctx.lineTo(-300,100);
  ctx.stroke();

  //smaller triangle
  ctx.beginPath();
  ctx.moveTo(-150,-35);
  ctx.lineTo (0,170);
  ctx.lineTo(120,34);
  ctx.lineTo(-150,-35);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-160,60);
  ctx.lineTo(-35, 10);
  ctx.lineTo(5,60);
  ctx.lineTo(-40,95);
  ctx.moveTo(-20,80);
  ctx.lineTo(60,180);
  ctx.lineTo(-50,230);
  ctx.lineTo(-80,190);
  ctx.lineTo(-160,190);
  ctx.lineTo(-160,60);

  ctx.stroke();

}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 1)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 1)';

  ctx.save();
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
