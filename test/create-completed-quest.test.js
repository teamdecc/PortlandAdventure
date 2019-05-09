import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

test('create a span for completed quest', assert => {
    //arrange
    const quest = {
        title: 'Food Cart Adventure'
    };

    const expected = '<span class="quest completed">Food Cart Adventure</span>';

    //act
    const dom = createCompletedQuest(quest);

    //assert
    assert.equal(dom.outerHTML, expected);
});