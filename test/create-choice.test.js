import api from '../src/services/api.js';
import createChoiceHtml from '../src/quests/create-choice.js';
const test = QUnit.test;

test('returns DOM html for each choice in quest', assert => {
    //arrange
    const quests = api.getQuests();
    const quest = quests[0];
    const choice = quest.choices[0];

    const expected = `<div><label for="cheeseburger">You order something familiar! A good ol cheeseburger.</label><input type="radio" class="choice" name="choice" id="cheeseburger" value="cheeseburger"></div>`;

    //act

    const result = createChoiceHtml(choice);

    //assert
    assert.equal(result.outerHTML, expected);
});