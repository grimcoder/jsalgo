/**
 * Created by taraskovtun on 1/11/16.
 */
var Node = function(value, next){
    this.value = value
    this.next = next

}

Node.prototype.sort = function(){
    return this;
}


Node.prototype.reverse = function(){
    return this;
}


module.exports = Node