import api from '../services/api.js';
import makeProfile from '../make-profile.js';
import getById from '../getById.js';
import createChoiceHtml from './create-choice.js';
import scoreChoice from './score-choice.js';

makeProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);
const user = api.getPortlander();

if(!quest) {
    window.location = 'map.html';
}

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('image');
const questDescription = document.getElementById('quest-description');
const questForm = document.getElementById('quest-form');
const questChoices = document.getElementById('quest-choices');
const result = document.getElementById('result');

questTitle.textContent = quest.title;
questImage.src = '../assets/' + quest.id + '.jpg';
questDescription.textContent = quest.description;


for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceHtml = createChoiceHtml(choice);
    questChoices.appendChild(choiceHtml);
}

questForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(questForm);
    const choiceId = formData.get('choice');
    const choice = getById(quest.choices, choiceId);

    scoreChoice(user, choice, quest);
    api.saveUser(user);
    makeProfile();

    result.textContent = choice.result;

    questChoices.classList.add('hidden');
    result.classList.remove('hidden');
});