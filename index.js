import data4 from './assets/data/4x4.json';
import data32 from './assets/data/32x32.json';

function draw4 (frame){
    const canvas = document.getElementById('canvas');
    
    if (!canvas.getContext) {
        console.warn("Canvas is not working in you browser!")
        return;
    }

    const ctx = canvas.getContext('2d');
    const scale = canvas.getAttribute("width")/frame.length;

    frame.forEach((row, i) => {
        row.forEach((column, j) => {
            ctx.fillStyle = "#" + column;
            ctx.fillRect(j*scale, i*scale, scale, scale);
        })
    })
}

function draw32 (frame){
    const canvas = document.getElementById('canvas');
    
    if (!canvas.getContext) {
        console.warn("Canvas is not working in you browser!")
        return;
    }

    const ctx = canvas.getContext('2d');
    const scale = canvas.getAttribute("width")/frame.length;

    frame.forEach((row, i) => {
        row.forEach((column, j) => {
            let color="rgba(" + column.toString() + ")";
            ctx.fillStyle = color;
            ctx.fillRect(j*scale, i*scale, scale, scale);
        })
    })
}

document.getElementById('size32').addEventListener("click", () => draw32(data32.arr));
document.getElementById('size4').addEventListener("click", () => draw4(data4.arr));
document.getElementById('sizeImg').addEventListener("click", () => drawImg());

// Функция, которая рисует картинку
  function drawImg() {
    let canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
    };
    img.src = "assets/data/image.png";
}