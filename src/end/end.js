import makeProfile from '../make-profile.js';
import api from '../services/api.js';
import scoreLocalCred from './score-local-cred.js';
import scoreWellBeing from './score-well-being.js';
import localCredMessages from './local-cred-messages.js';
import wellBeingMessages from './wellbeing-messages.js';

makeProfile();

const user = api.getPortlander();

const result = document.getElementById('result');

const wellBeingScore = scoreWellBeing(user.wellBeing);
const localCredScore = scoreLocalCred(user.localCred);

const wellBeingMessage = wellBeingMessages[wellBeingScore];
const localCredMessage = localCredMessages[localCredScore];

result.textContent = wellBeingMessage + localCredMessage;