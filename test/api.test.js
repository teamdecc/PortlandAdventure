import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('apitest');
api.storage = sessionStorage;

test('saveUser saves the object and getUser returns the object', assert => {
    //arrange
    const expected = {
        name: 'Claire',
        portlander: 'hiker',
        wellBeing: 100,
        localCred: 0
    };
    //act
    api.saveUser(expected);
    const result = api.getPortlander();
    //assert
    assert.deepEqual(result, expected);
});



