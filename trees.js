/**
 * Created by taraskovtun on 1/10/16.
 */
var Tree = function(left, right, value){
        this.left = left
        this.right = right
        this.value = value
    }

var tree = new Tree(new Tree(null, null, 0), new Tree(null, null), 1);