import scorelocalCred from '../src/end/score-local-cred.js';
const test = QUnit.test;

QUnit.module('score localCred');

test('returns broke for localCred score <= 0', assert => {
    //arrange
    const user = {
        localCred: 0
    };
    const expected = 'broke';
    //act
    const result = scorelocalCred(user);
    //assert
    assert.equal(result, expected);
});

test('returns poor for localCred score < 50', assert => {
    //arrange
    const user = {
        localCred: 49
    };
    const expected = 'poor';
    //act
    const result = scorelocalCred(user);
    //assert
    assert.equal(result, expected);
});

test('returns rich for localCred score > 50', assert => {
    //arrange
    const user = {
        localCred: 52
    };
    const expected = 'rich';
    //act
    const result = scorelocalCred(user);
    //assert
    assert.equal(result, expected);
});

