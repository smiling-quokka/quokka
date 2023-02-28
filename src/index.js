import app from './app';
import 'styles';

function init() {
    const root = document.getElementById('quokka-app');

    if (root) app.mount(root);
}

document.addEventListener('DOMContentLoaded', init);
