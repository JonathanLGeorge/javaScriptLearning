//LinkedLists 

function LinkedList() { 
    var length = 0; 
    var headNode = null; 

    var Node = function(element){
        this.element = element; 
        this.next = null; 
    }

    this.size = function(){
        return length;
    }

    this.headNode = function(){
        return headNode;
    }
/****************************************************** */    

    this.add = function(element){
        var node = new Node(element);
        if(headNode === null){
            headNode = node;
        } else {
            var currentNode = headNode;

            while(currentNode.next){
                currentNode  = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    } 
/****************************************************** */    

    this.remove = function(element){
        var currentNode = headNode;
        var previousNode;
        if(currentNode.element === element){
            headNode = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length --;
    }
/****************************************************** */    
    this.isEmpty = function() {
        
        if(length === 0){
            return true;
        } else {
            return false;
        }
    }
       

/****************************************************** */      
    this.indexOf = function(element) {
        var currentNode = headNode;
        var index = -1;

        while(currentNode){
            index++;
            if(currentNode.element === element){
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
/****************************************************** */  
    this.elementAt = function(index) {
        var currentNode = headNode;
        var count = 0;
        
        while (count < index){
            count ++;
            currentNode = currentNode.next
        }
        return currentNode.element;
    }
  
/****************************************************** */   
    this.addAt = function(index, element){
        var node = new Node(element);
        var currentNode = headNode;
        var previousNode;
        var currentIndex = 0;

        if(index > length){
            return false;
        }

        if(index === 0){
            node.next = currentNode;
            headNode = node;
        } else {
           
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }
/****************************************************** */    
    this.removeAt = function(index) {
        var currentNode = headNode;
        var previousNode;
        var currentIndex = 0;
        
        if (index < 0 || index >= length){
            return null
        }
        
        if(index === 0){
            headNode = currentNode.next;
        } else {
           
            while(currentIndex < index) {
                currentIndex ++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
           
            previousNode.next = currentNode.next
        }
        
        length--;
        return currentNode.element;
    }
} 
/****************************************************** */    
/****************************************************** */    

var animals = new LinkedList();
console.log(animals.isEmpty()); // should return true
animals.add('cat');     //0
animals.add('dog');     //1
animals.add('wolf');    //2->X
animals.add('tiger');   //3->2
animals.add('shark');   //4->3
console.log(animals.size()); //should =5
console.log(animals.removeAt(2)); //removed wolf
console.log(animals.elementAt(3)); //beacuse wolf was removed returned shark
console.log(animals.indexOf('tiger')); //now at element 2
console.log(animals.size()); // shold return 4
console.log(animals.isEmpty()); // should return false