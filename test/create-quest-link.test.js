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

//creates link for each quest
function createQuestLink(quest) {
    //creates empty anchor element
    const anchor = document.createElement('a');
    //adds class to empty anchor element
    anchor.classList.add('quest');
    //adds inner text to anchor element
    anchor.textContent = quest.title;
    //creates new searchParams
    const searchParams = new URLSearchParams();
    //sets the search 
    searchParams.set('id', quest.id);
    anchor.href = 'quest.html?' + searchParams.toString();

    return anchor;
}