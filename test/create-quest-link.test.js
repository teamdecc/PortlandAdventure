import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

test('take a quest object and return a dom element', assert => {
    
    //arrange

    const quest = {
        id: 'foodCart',
        title: 'Food Truck Adventure!',
    };

    const expected = '<a class="quest" href="quest.html?id=foodCart">Food Truck Adventure!</a>';

    //act

    const dom = createQuestLink(quest);

    //assert
    assert.equal(dom.outerHTML, expected);
});