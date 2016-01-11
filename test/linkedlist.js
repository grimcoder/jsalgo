/**
 * Created by taraskovtun on 1/11/16.
 */
var Node = require('./../linkedlist')
var assert = require('chai').assert

describe('linked list', function(){
    it('should sort linked list', function(){

        var node = new Node(3, new Node(2, new Node(1)))
        var sortedNode = node.sort()
        var toMatch = new Node(1, new Node(2, new Node(3)))

        console.log(sortedNode)

        console.log(toMatch)

        assert.deepEqual(sortedNode,toMatch)

    })

    it('should reverse linked list', function(){

        var node = new Node(3, new Node(2, new Node(1, new Node(3))))

        assert.deepEqual(node.sort(),new Node(3, new Node(1, new Node(2, new Node(3)))))

    })

})
