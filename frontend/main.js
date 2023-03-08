import app from '.';

document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('quokka-app');

    if (root) app.mount(root);
});
