import api from '../services/api.js';
import createQuestLink from '../map/create-quest-link.js';
import makeProfile from '../make-profile.js';
makeProfile();

const questList = document.getElementById('quest-list');

const quests = api.getQuests();

for(let i = 0; i < quests.length; i++){
    const quest = quests[i];
    const link = createQuestLink(quest);

    questList.appendChild(link);
    
}