/**
 * Created by taraskovtun on 1/10/16.
 */
var sorting = require('./../sorting.js');
var assert = require('chai').assert;

describe ('sorting', function(){

    describe ('bubble sort', function(){

        it('should sort [2,3,1] to [1,2,3]', function(){
            var sorted = sorting.bubbleSort([2,3,1]);
            assert.isArray(sorted, 'it is array');
            assert.deepEqual(sorted, [1,2,3], 'it is equal to [1,2,3]');
        });

        it('should sort [0] to [0]', function(){
            var emptyArray = sorting.bubbleSort([])
            assert.isArray (emptyArray, 'sorted empty array is still array')
            assert.deepEqual(emptyArray.length, 0, 'sorted empty array is empty')
        });

        it('should sort array with duplicates correctly [1,2,3,3,4,1] to [1,1,2,3,3,4]', function(){
            var arrayWithDups = sorting.bubbleSort([1,2,3,3,4,1]);
            assert.deepEqual(arrayWithDups, [1,1,2,3,3,4], '[1,2,3,3,4,1] to [1,1,2,3,3,4]');
        });

        //it('should sort array with negatives correctly [-1,2,3,3,4,1] to [-1,1,2,2,3,4]', function(){
        //    var arrayWithDups = sorting.bubbleSort([-1,2,3,3,4,1]);
        //    assert.deepEqual(arrayWithDups, [-1,1,2,3,3,4], '[-1,2,3,3,4,1] to [-1,1,2,3,3,4]');
        //});

    });
});


