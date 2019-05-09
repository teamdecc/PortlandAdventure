import api from '../services/api.js';
import makeProfile from '../make-profile.js';
import createQuestLink from '../map/create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import hasCompletedAllQuests from '../map/has-completed-all-quests.js';
import isDead from '../map/is-dead.js';

makeProfile();
const quests = api.getQuests();
const user = api.getPortlander();

if(isDead(user) || hasCompletedAllQuests(quests, user)) {
    window.location = 'end.html';
}
const questList = document.getElementById('quest-list');

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