class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(newValue) {
    const currentHead = this.head;
    const newNode = new Node(newValue);

    newNode.next = currentHead;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  print() {
    const output = [];
    let currentNode = this.head
    
    while(currentNode){
      output.push(currentNode.value)
      currentNode = currentNode.next
    }

    return output.join(" -> ")
  }

  getByIndex(index) {}
  insertAtIndex(index, value) {}
  removeAtIndex(index) {}
}

function Node(value) {
  this.value = value;
  this.next = null;
}

module.exports = LinkedList;


