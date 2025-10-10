function showMessage() {
    alert("Semangat Belajar Web!");
}

var i = 0;
var txt = 'Saya Muflih Rosyiq Raihan';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    typeWriter();
};
