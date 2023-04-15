const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
nav.classList.toggle('active');
});
