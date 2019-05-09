import hasCompletedAllQuests from '../src/map/has-completed-all-quests.js';
const test = QUnit.test;

import api from '../src/services/api.js';

test('return true if user completed all quests', assert => {
    // arrange
    const quests = api.getQuests();
    const user = {
        completed: {
            foodCart: true,
            gorge: true,
            sauvie: true
        }
    };
    const expected = true;


    // act
    const hasCompleted = hasCompletedAllQuests(quests, user);

    // assert 
    assert.equal(hasCompleted, true);
});

test('return false if user has not completed all quests', assert => {
    // arrange
    const quests = api.getQuests();
    const user = {
        completed: {
            foodCart: true,
            gorge: true,
        }
    };
    const expected = false;

    // act
    const hasCompleted = hasCompletedAllQuests(quests, user);

    // assert 
    assert.equal(hasCompleted, false);
});
