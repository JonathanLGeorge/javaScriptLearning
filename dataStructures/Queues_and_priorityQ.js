//first in first out!

//implentmeting a collction on our own 
function Queue(){
    collection = [];

    //print the queue
    this.print = function(){
        console.log(collection);
    };
// pushes element onto the queue
    this.enqueue = function(element){
        collection.push(element);
    };
//pops the next inline
    this.dequeue = function(){
        return collection.shift(); //.shift remove the first item of array
    };

    //this is just peeking at the first or next item in the queue
    this.front = function(){
        return collection[0];
    };
//returns the size of queue
    this.size = function(){
        return collection.length;
    };
    //checks if the queue is empty 
    this.isEmpty = function() {
        return(collection.length ===0);
    };

}


var line = new Queue();
line.enqueue('Faith');
line.enqueue('Jonathan');
line.enqueue('Coby');
line.print();
line.dequeue();
console.log(line.front);
line.print();



