import api from '../services/api.js';
import makeProfile from '../make-profile.js';
import getById from '../getById.js';
import createChoiceHtml from './create-choice.js';

makeProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);

if(!quest) {
    window.location = 'map.html';
}

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('image');
const questDescription = document.getElementById('quest-description');
const questForm = document.getElementById('quest-form');
const questChoices = document.getElementById('quest-choices');

questTitle.textContent = quest.title;
questImage.src = '../assets/' + quest.id + '.jpg';
questDescription.textContent = quest.description;

for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceHtml = createChoiceHtml(choice);
    questChoices.appendChild(choiceHtml);
};