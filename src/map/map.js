import api from '../services/api.js';
import createQuestLink from '../map/create-quest-link.js';
import makeProfile from '../make-profile.js';
import createCompletedQuest from './create-completed-quest.js';

makeProfile();

const questList = document.getElementById('quest-list');

const quests = api.getQuests();
const user = api.getPortlander();

for(let i = 0; i < quests.length; i++){
    const quest = quests[i];
    let link = null;

    if(user.completed[quest.id]) {
        link = createCompletedQuest(quest);
    } else {
        link = createQuestLink(quest);
    }
    questList.appendChild(link);
}