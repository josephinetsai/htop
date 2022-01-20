function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function isSpinning (currTime) {
  let numberRotations = currTime % Math.PI;
  if (numberRotations % 2 === 0){
    return false;
  }
  return true;
}

function drawArt(ctx) {
  // Draw triangle
  ctx.lineWidth = 3;


  //draw circle
  ctx.beginPath();
  ctx.arc(20,75, 50, -2.2, Math.PI * 0.52, false);
  ctx.stroke();


  //Large triangle
  ctx.beginPath();
  ctx.save();
  var time = new Date ();
  ctx.moveTo(-300,100);
  if ((time.getMilliseconds()%1000/10)%1>0){
    ctx.lineTo (time.getMilliseconds()%1000/10-200,100)
  }
  else{
    ctx.lineTo (200,100);
  }
  ctx.moveTo (64,100);
  ctx.lineTo(200,100);
  ctx.lineTo(-70,-180);
  ctx.lineTo(-300,100);
  ctx.stroke();
  ctx.restore();

  //smaller triangle
  ctx.beginPath();
  ctx.moveTo(-150,-35);
  ctx.lineTo (0,170);
  ctx.lineTo(120,34);
  ctx.lineTo(-150,-35);
  ctx.stroke();

  //weird shape
  ctx.beginPath();

  ctx.save();
  ctx.translate (-70,120);
  var time = new Date ();
  ctx.rotate(time.getSeconds()+(time.getMilliseconds()/1000));
  ctx.moveTo(-90,-60);
  ctx.lineTo(45,-110);
  ctx.lineTo(75,-60);
  ctx.lineTo(30,-25);
  ctx.moveTo(50,-40);
  ctx.lineTo(130,60);
  ctx.lineTo(20,110);
  ctx.lineTo(-10,70);
  ctx.lineTo(-90,70);
  ctx.lineTo(-90,-60);
  ctx.stroke();
  ctx.restore();

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
