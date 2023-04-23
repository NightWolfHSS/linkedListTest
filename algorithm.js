/*
JUST TESTING CODE

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(5);

*/


class LinkedListNodes {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    // to string
    toString() {
        return `${this.value}`;
    }
} 

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
  
    /**
     * this is append method - i`m supper creative commentator
     * @param value
     * @return object
    */
    append(value) {
        const newNode = new LinkedListNodes(value);
        // chk
        if (!this.head || !this.tail) {
          this.head = newNode;
          this.tail = newNode;

          return this;
        }
    
        this.tail.next = newNode;

        this.tail = newNode;

        return this;
    }


    /**
     * convert to array
     * @return array
    */
    toArray() {
        const nodes = [];

        let currenNode = this.head;

        while(currenNode) {
            nodes.push(currenNode);
            currenNode = currenNode.next;
        }

        return nodes;
    }

}

/**
 * create new object 
 * render data | console | XML
*/
function show() {
    const list = new LinkedList();
    list.append('a').append('b').append('c').append('1');
    console.log(list.toArray());
    document.querySelector('.msg').innerHTML = list.toArray();

    setTimeout(function() {
        alert('console.log');
        document.querySelector('.msg').innerHTML = 'text has been hidden';
    }, 2000);

}

// event ready
document.querySelector('.push').addEventListener('click', show);