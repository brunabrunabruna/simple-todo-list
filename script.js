function newItem() {
  //javascript
  //1. Adding a new item to the list of items:
  //   let li = document.createElement("li");
  //   let inputValue = document.getElementById("input").value;
  //   let text = document.createTextNode(inputValue);
  //   li.appendChild(text);

  //   if (inputValue === "") {
  //     alert("You must write something!");
  //   } else {
  //     let list = $("#list");
  //     list.appendChild(li);
  //   }

  //1. jquery version
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
  //   function crossOut() {
  //     li.classList.toggle("strike");
  //   }

  //   li.addEventListener("dblclick", crossOut);

  //2. jquery version
  const crossOut = () => {
    li.addClass("strike");
  };

  li.on("dblclick", () => {
    crossOut();
  });

  //3(i). Adding the delete button "X":
  //   let crossOutButton = document.createElement("crossOutButton");
  //   crossOutButton.appendChild(document.createTextNode("X"));
  //   li.appendChild(crossOutButton);

  //   crossOutButton.addEventListener("click", deleteListItem);
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  //   function deleteListItem() {
  //     li.classList.add("delete");
  //   }

  //3 i jquery version

  const crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  //3 ii jquery version
  const deleteListItem = () => {
    li.addClass("delete");
  };

  crossOutButton.on("click", () => {
    deleteListItem();
  });

  // 4. Reordering the items:
  $("#list").sortable();
}
