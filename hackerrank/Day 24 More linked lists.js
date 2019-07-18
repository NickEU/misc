// "remove duplicate elements" from non-decreasing order linked list. This is a bad solution :)

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.removeDuplicates = function(head) {
    //Write your code here
    let newList = [];
    let newHead = null;
    if (head.next === null || head === null) {
      return head;
    }
    while (true) {
      let curr = head.data;
      let next = head.next.data;
      if (curr !== next) {
        newList.push(curr);
        newHead = this.insert(newHead, curr);
      }
      head = head.next;
      console.log(head);
      if (head.next === null) {
        if (newList[newList.length - 1] !== next) {
          newList.push(next);
          newHead = this.insert(newHead, next);
          break;
        } else {
          break;
        }
      }
    }
    return newHead;
  };

  this.insert = function(head, data) {
    var p = new Node(data);
    if (head == null) {
      head = p;
    } else if (head.next == null) {
      head.next = p;
    } else {
      var start = head;
      while (start.next != null) {
        start = start.next;
      }
      start.next = p;
    }
    return head;
  };

  this.display = function(head) {
    var start = head;
    while (start) {
      console.log(start.data + " ");
      start = start.next;
    }
  };
}
function main() {
  let arr = [
    3,
    9,
    9,
    11,
    11,
    11,
    11,
    89,
    89,
    100,
    100,
    101,
    102,
    103,
    108,
    200,
    250,
    250,
    250,
    250
  ];
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < arr.length; i++) {
    var data = arr[i];
    head = mylist.insert(head, data);
  }
  console.log(head);
  head = mylist.removeDuplicates(head);
  mylist.display(head);
}

main();
