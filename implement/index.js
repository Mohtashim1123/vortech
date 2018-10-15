let body = document.getElementById('container');
let loader = document.getElementById('loader');

setTimeout(function () {
    body.style.display = 'block';
    loader.style.display = 'none';
}, 2000);

let home = {
    name: undefined,
    email: undefined,
    briefBio: undefined
}