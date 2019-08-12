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


//priority queue 

function PQueue(){
    var pqCollection = [];

    //prints the PQ
    this.print = function(){
        console.log(pqCollection);
    };

    this.pqEnqueue = function(element){
        if(this.isEmpty()){
            pqCollection.push(element);
        } else {
            var added = false;
            for(var i = 0; i < pqCollection.length; i++){
                //checking priorites [1] is the element that has the priority
                if(element[1] < pqCollection[i][1]){
                    //splice will add the element 
                    pqCollection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                pqCollection.push(element);
            }
        }
    };

    this.pqDQ = function(){
        var value = pqCollection.shift();
        return value[0];
    };

    this.front = function(){
        return pqCollection[0];
    };

    this.size = function(){
        return pqCollection.length;
    };

    this.isEmpty = function(){
        return(pqCollection.length ===0);
    }
}
var pq = new PQueue();
pq.pqEnqueue(['faith', 2]);
pq.pqEnqueue(['Jonathan', 1]);
pq.pqEnqueue(['Coby', 3]);
pq.print();
pq.pqDQ();
pq.front();
pq.print();