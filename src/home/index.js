import makePortlander from './make-portlander.js';
import api from '../services/api.js';

const portlanderForm = document.getElementById('portlander-sign-up');
portlanderForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(portlanderForm);
    const portlander = makePortlander(formData);
    api.signUp(portlander);

    window.location = 'map.html';
});