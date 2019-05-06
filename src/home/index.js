import makePortlander from './make-portlander.js';

const portlanderForm = document.getElementById('portlander-sign-up');
portlanderForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(portlanderForm);
    const portlander = makePortlander(formData);
    console.log(portlander, 'portlander object');
});