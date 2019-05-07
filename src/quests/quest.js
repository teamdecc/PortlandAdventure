import api from '../services/api.js';


const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const wellBeing = document.getElementById('well-being');
const localCred = document.getElementById('local-cred');

const user = api.getPortlander();
console.log('user');

name.textContent = user.name;
avatar.src = '/assets/' + user.portlander + '.svg';
wellBeing.textContent = 'Well Being: ' + user.wellBeing;
localCred.textContent = 'Local Cred: ' + user.localCred;