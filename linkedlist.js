/**
 * Created by taraskovtun on 1/11/16.
 */

var Node = function(value, next){
    this.value = value
    this.next = next

}

Node.prototype.sort = function(){
    var current = this;
    var arr = []
    while(current){
        arr.push(current.value)
        current = current.next
    }
    arr.sort();
    var head = new Node()
    var current = head
    for(var x = 0; x < arr.length; x++){
        current.value = arr[x]
        if (x+1<arr.length){
            current.next = new Node(0)
            current = current.next
        }
    }
    return head
}

Node.prototype.sort2 = function(){
    var head = this
    var head2

    while(head){

        var current = new Node(head.value)
        current.next = head2
        head2 = current

        while(current.next && current.value > current.next.value){
            var tmp = current.next.value
            current.next.value = current.value
            current.value = tmp
            current.next = current
        }

        head = head.next
    }

    console.log(head2)
    return head2
}

Node.prototype.reverse2 = function(){
    var head = this
    var head2;
    while(head){
        var current = new Node(head.value)
        current.next = head2
        head2 = current
        head = head.next
    }

    return head2

}
//reverse using array
Node.prototype.reverse = function(){

    var current = this
    var arr = []
    while(current){
        arr.push(current.value)
        current = current.next
    }
    var head = new  Node(0)
    current = head

    while(arr.length>0){
        current.value = arr.pop()
        if (arr.length > 0){
            current.next = new Node(0)
            current = current.next
        }
    }
    return head
}

module.exports = Node