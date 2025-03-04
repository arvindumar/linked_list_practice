class List {
  constructor(data) {
    this.head = {
      val: data,
      next: null,
    };
    (this.tail = this.head), (this.size = 1);
  }
  addNode(n_data) {
    let newNode = {
      val: n_data,
      next: null,
    };
    (this.tail.next = newNode), (this.tail = newNode), (this.size += 1);
  }
  //   traverse and update
  traversing(n_data, put_data) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      if (currentNode.val == n_data) {
        currentNode.val = put_data;
      }
      console.warn(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
  removeNode(n_data) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < this.size - 1) {
      console.log(counter);
      console.log("curent node yaha pe ==", currentNode);
      if (currentNode.val == n_data) {
        console.log("if me gya");
        this.head = currentNode.next;
        this.size -= 1;
        return;
      } else if (currentNode.next.val == n_data) {
        console.log("else if me gya");
        currentNode.next = currentNode.next.next;
        currentNode = currentNode.next;
        this.size -= 1;
        return;
      } else {
        console.log("khali else me gya");
        currentNode = currentNode.next;
        counter++;
      }
    }
  }
}
let list = new List(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);
list.addNode(500);
list.addNode(600);
list.addNode(700);
list.addNode(800);
list.addNode(900);
// list.addNode(1000);
console.log("ALL THE LIST ELEMENTS", list);
// list.removeNode(500);
