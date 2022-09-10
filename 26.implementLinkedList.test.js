const LinkedList = require("./26.implementLinkedList");

describe("#Prepend", () => {
  test("It adds new node to the beginning of the List", () => {
    const List = new LinkedList();
    List.prepend(10);
    const oldHead = List.head;
    List.prepend(9);

    expect(List.head.value).toBe(9);
    expect(List.head.next).toBe(oldHead);
  });
});

describe("#Append", () => {
  test("It adds new node to the end of the List", () => {
    const List = new LinkedList();
    List.append(1);
    const oldTail = List.tail;
    List.append(2);

    expect(List.tail.value).toBe(2);
    expect(List.head).toBe(oldTail);
    expect(List.length).toBe(2)
  });
});

describe("#Print", () => {
  test("It prints out the linked list", () => {
    const List = new LinkedList();
    List.append(0);
    List.append(1);
    List.append(2);

    expect(List.print()).toBe("0 -> 1 -> 2");
  });
});

describe("#getByindex", () => {
  test("It gets node which is at specific index", () => {
    const List = new LinkedList();
    List.append(0);
    List.append(1);
    List.append(2);

    expect(List.getByIndex(0).value).toBe(0);
  });
});

describe("#insertAtindex", () => {
  describe("with index less than 0", () => {
    const List = new LinkedList();
    List.append(0);
    List.append(1);
    List.append(2);

    List.insertAtIndex(-1, 3)

    // expect(List.length).toBe(3);


  })
  describe("with index greater than list length", () => {

  })
  describe("with index greater than list length", () => {

  })
  describe("with index 0 ", () => {

  })
  describe("with index in the middle", () => {

  })
})