/*
sets
*/
function mySet() {
    //the var collection will hold the set
    var collection =[];
    //this method will check for the presence of an element and return true or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    };
    //this method will return all the values in the set
    this.values = function(){
        return collection;
    };
    //this method will add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    //this method will remove an element from a set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    //this method will return size of collection
    this.size = function(){
        return this.collection.length;
    };
    //will return the union of two sets
    this.union = function(otherSet){
        var unionSet = new this.Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    //will return the intersection of two sets as a new set
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    //returning the difference as a new set
    this.subSet = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };
}
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subSet(setB));
console.log(setA.intersection(setB).values());


//built in java script has lots of the same functionality 
var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values()); // this will return an iterator 
setD.delete("a"); //delete insteade of remove

console.log(setD.has('a'));

console.log(setD.add('d')); // d is alrady in the set.. this will return the full set
console.log(setD.add('f'));
console.log(setD.add('f'));


