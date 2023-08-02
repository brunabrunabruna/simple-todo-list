function newItem() {
  //1. Adding a new item to the list of items:

  const li = $("<li></li>");
  const inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("you must write something.");
  } else {
    const list = $("#list");
    list.append(li);
  }

  //2. Crossing out an item from the list of items:

  const crossOut = () => {
    li.addClass("strike");
  };

  li.on("dblclick", () => {
    crossOut();
  });

  //3(i). Adding the delete button "X":

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

  const crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  //3 ii jquery version
  const deleteListItem = () => {
    li.remove();
  };

  crossOutButton.on("click", () => {
    deleteListItem();
  });

  // 4. Reordering the items:
  $("#list").sortable();
}
