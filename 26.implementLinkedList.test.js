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
