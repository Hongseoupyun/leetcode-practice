class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(newValue) {
    const currentHead = this.head;
    const newNode = new LinkedListNode(newValue);

    newNode.next = currentHead;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  append(newValue) {
    const newNode = new LinkedListNode(newValue);
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

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

module.exports = LinkedList;


const List = new LinkedList
List.append(1)
List.append(2)
List.append(3)
console.log(List.print())