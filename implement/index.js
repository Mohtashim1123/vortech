var body = document.getElementById('container');
var loader = document.getElementById('loader');

setTimeout(function () {
    body.style.display = 'block';
    loader.style.display = 'none';
}, 2000);

var home = {
    name: undefined,
    email: undefined,
    briefBio: undefined
}