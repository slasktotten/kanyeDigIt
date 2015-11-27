var image_tracker = 'a';
function changeImage() {
    var image = document.getElementById('mutebutton');
    if (image_tracker=='a') {
        image.src = 'mute.png';
        image_tracker = 'b';
    } else {
        image.src = 'quaver.png';
        image_tracker='f';
    }
}