import scoreWellBeing from '../src/end/score-well-being.js';
const test = QUnit.test;

QUnit.module('score wellbeing')

test('returns dead for wellbeing score <= 0', assert => {
    //arrange
    const user = {
        wellBeing: 0
    };
    const expected = 'dead';
    //act
    const result = scoreWellBeing(user);
    //assert
    assert.equal(result, expected);
});

test('returns sick for wellbeing score < 50', assert => {
    //arrange
    const user = {
        wellBeing: 49
    };
    const expected = 'sick';
    //act
    const result = scoreWellBeing(user);
    //assert
    assert.equal(result, expected);
});

test('returns healthy for wellbeing score > 50', assert => {
    //arrange
    const user = {
        wellBeing: 52
    };
    const expected = 'healthy';
    //act
    const result = scoreWellBeing(user);
    //assert
    assert.equal(result, expected);
});
