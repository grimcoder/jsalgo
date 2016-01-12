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

        assert.deepEqual(sortedNode,toMatch)

    })

    it('should sort linked list without array', function(){

        var node = new Node(3, new Node(2, new Node(1, new Node(1))))
        var sortedNode = node.sort2()
        var toMatch =  new Node(1,new Node(1, new Node(2, new Node(3))))

        assert.deepEqual(sortedNode,toMatch)

    })


    it('should reverse linked list', function(){

        var node = new Node(3, new Node(2, new Node(1, new Node(3))))

        assert.deepEqual(node.reverse(),new Node(3, new Node(1, new Node(2, new Node(3)))))

    })

    it('should reverse linked list without array', function(){

        var node = new Node(3, new Node(2, new Node(1, new Node(3))))

        assert.deepEqual(node.reverse2(),new Node(3, new Node(1, new Node(2, new Node(3)))))

    })

})
