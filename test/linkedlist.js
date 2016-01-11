/**
 * Created by taraskovtun on 1/11/16.
 */
var Node = require('./../linkedlist')
var assert = require('chai').assert

describe('linked list', function(){
    it('should sort linked list', function(){

        var node = new Node(3, new Node(2, new Node(1, null)))

        assert.deepEqual(node.sort(),new Node(1, new Node(2, new Node(3, null))))

    })

    it('should reverse linked list', function(){

        var node = new Node(3, new Node(2, new Node(1, null)))

        assert.deepEqual(node.reverse(),new Node(1, new Node(2, new Node(3, null))))

    })

})
