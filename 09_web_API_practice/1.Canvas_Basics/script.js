//Canvas Element API Practice

// const canvas = document.getElementById('my-canvas');
// const ctx = canvas.getContext('2d');
// 
// 
// //Drawing Rectanle
// ctx.fillStyle='green';
// ctx.fillRect(10,10,150,100);
// 
// //Drawing Circle
// ctx.beginPath();
// ctx.arc(300,300,100,0,2 * Math.PI);
// ctx.fillStyle = 'red';
// ctx.fill();
// 
// //Drawing Text
// ctx.font = '30px Arial';
// ctx.fillStyle = 'blue';
// ctx.fillText('Hello World',10,300);
// ctx.strokeText('Hello World',100,30);
// 
// //Drawing a Line
// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(300,300);
// ctx.lineTo(10,300);
// ctx.lineTo(300,10);
// ctx.strokeStyle = 'orange';
// ctx.stroke();
// 
// //Drawing an Image
// const image = document.querySelector('img');
// image.style.display = 'none';
// image.addEventListener('load',() => {
//     ctx.drawImage(image,270,270,50,50);
// })
// 
// //Draw Quadratic Curves
// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.quadraticCurveTo(300,300,10,300);
// ctx.strokeStyle = 'purple';
// ctx.stroke();




//RequestAnimationFrame API Practice

let start;
let done = false;
const image = document.querySelector('img');

function step(timestemp){
    
    if(start === undefined){
        start = timestemp;
    }

    const elapsed = timestemp - start;
    if(elapsed> 10000){
        done = true;
    }

    if(done){
        return;
    }

    image.style.transform = `translateX(${elapsed/20}px) rotate(${elapsed/20}deg)`;

    requestAnimationFrame(step);
}

requestAnimationFrame(step);