/* Hash Table */

var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

let HashTable = function() {

    let storage = [];
    const storageLimit = 14;
  
    this.print = function() {
      console.log(storage)
    }

    this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] =  [[key, value]];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    }

    this.remove = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    }

    this.lookup = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
    
        } else {
     
            for (var i = 0; i < storage[index].length; i++) {
      
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    }
}


console.log(hash('George', 10))

let hash1 = new HashTable();
hash1.add('Faith', 'person');
hash1.add('Coby', 'cat');
hash1.add('rex', 'dinosour');
hash1.add('Frida', 'dog')
console.log(hash1.lookup('Coby'))
hash1.print();