var i = 0;
var txt = 'MCUtil - Free, easy to use MC Utility site.'; /* The text */
var speed = 75; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}