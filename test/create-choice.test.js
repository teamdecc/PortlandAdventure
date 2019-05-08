import api from '../src/services/api.js';
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
    assert.equal(result, expected);
});

function createChoiceHtml(choice) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.textContent = choice.description;
    label.setAttribute('for', choice.id);

    input.type = 'radio';
    input.classList.add('choice');
    input.name = 'choice';
    input.id = choice.id;
    input.value = choice.id;
    input.textContent = choice.description;

    div.appendChild(label);
    div.appendChild(input);
    return div.outerHTML;
}