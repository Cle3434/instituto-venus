const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      menuButton.textContent = '☰';
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('#info-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = document.querySelector('#form-note');
    if (note) {
      note.textContent = 'Este formulário é uma demonstração e ainda não envia mensagens. Para o activar, configure o contacto oficial do Instituto Vénus.';
      note.classList.add('form-note-alert');
    }
  });
}