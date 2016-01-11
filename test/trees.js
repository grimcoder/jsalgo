/**
 * Created by taraskovtun on 1/11/16.
 */
var Tree = require('./../trees.js');
var assert = require('chai').assert;

describe ('binary trees', function(){

    it('should sort binary tree', function(){

        var tree = new Tree(new Tree(null, null, 0), new Tree(null, null,2), 1);
        assert.deepEqual(tree, tree.sort())

    });

})