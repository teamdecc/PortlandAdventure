import isDead from '../src/map/is-dead.js';
const test = QUnit.test;

QUnit.module('is dead test');

test('score user as dead if wellbeing <= 0', assert => {
    //arrange
    const user = {
        wellBeing: -40
    };

    //act
    const result = isDead(user);

    //assert
    assert.equal(result, true);
});

test('score user as not dead if wellbeing > 0', assert => {
    //arrange
    const user = {
        wellBeing: 6
    };

    //act
    const result = isDead(user);

    //assert
    assert.equal(result, false);
});

