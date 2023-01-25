import app from './app';
import 'styles';

function init() {
  const root = document.getElementById('root');

  if (root) app.mount(root);
}

document.addEventListener('DOMContentLoaded', init);
