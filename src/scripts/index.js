import 'regenerator-runtime';
import '../styles/responsive.css';
import '../styles/style.css';
import swRegister from './utils/sw-register';
import App from './views/app';

console.log('Hello Coders!');

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
