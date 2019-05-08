import scoreChoice from '../src/quests/score-choice.js';

const test = QUnit.test;

test('update WB and LC based on user choice and save to api', assert => {
    //arrange
    const user = {
        name: 'claire',
        portlander: 'hiker',
        wellBeing: 100,
        localCred: 0,
        completed: {}
    };

    const choice = {
        LC: 5, 
        WB: -90
    };

    const quest = {
        id: 'cheeseburger'
    };

    const expected = {
        name: 'claire',
        portlander: 'hiker',
        wellBeing: 10,
        localCred: 5,
        completed: {
            cheeseburger: true
        }
    };
    //act
    const result = scoreChoice(user, choice, quest);
    //assert
    assert.deepEqual(result, expected);
});
