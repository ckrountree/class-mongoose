const { assert } = require('chai');
const Fruit = require('../../lib/models/fruit');

describe('Fruit Model', () => {

    it('validates a good model', () => {
        const fruit = new Fruit({
            type: 'melon',       
            name: 'canteloupe',
            colors: ['orange', 'yellow'],
            numberOnHand: 4
        },
        {
            type: 'melon',       
            name: 'watermelon',
            colors: ['orange', 'yellow', 'red'],
            numberOnHand: 16
        });
        fruit.validate();
    });

    it('number on hand is required', () => {
        const fruit = new Fruit({
            numberOnHand: 0
        });
        const { errors } = fruit.validateSync();
        assert.equal(errors.numberOnHand.kind, 'min');
    });
});