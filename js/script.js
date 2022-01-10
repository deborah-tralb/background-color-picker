const randomButton = document.getElementById('randomButton');
const pickButton = document.getElementById('pickButton');

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var color = "rgb(" + x + "," + y + "," + z + ")"

    document.body.style.backgroundColor = color;
}