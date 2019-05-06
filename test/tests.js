const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'claire');
    formData.set('portlander', 'hiker');

    const expected = {
        name: 'claire',
        portlander: 'hiker',
        wellBeing: '100',
        localCred: '0'
    };

    // Act
    // Call the function you're testing and set the result to a const
    const portlander = makePortlander(formData);

    //Assert
    assert.deepEqual(portlander, expected);
});

function makePortlander(formData) {
    const portlander = {
        name: formData.get('name'),
        portlander: formData.get('portlander'),
        wellBeing: '100',
        localCred: '0'
    };
    return portlander;
}