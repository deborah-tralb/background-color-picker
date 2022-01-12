//Generates a random background color when clicked

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var color = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.backgroundColor = color;
}

//User can pick the background color in a picker 

function pickColor() {
    let colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener("change", function () {
        document.body.style.backgroundColor = this.value;
    });
}