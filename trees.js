var Tree = function(left, right, value){

        this.left = left
        this.right = right
        this.value = value

}

Tree.prototype.sort = function(){

    return this;

};

module.exports =  Tree;