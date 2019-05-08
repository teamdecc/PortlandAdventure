import api from '../src/services/api.js';
import quests from '../src/services/quest-data.js';

const test = QUnit.test;

QUnit.module('getQuests from API');

test('return all quests from API with getQuests', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = quests;
    // Act
    const result = api.getQuests();
    // Call the function you're testing and set the result to a const
    
    //Assert
    assert.equal(result, expected);
});