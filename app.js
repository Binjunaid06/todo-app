 function addBtn() {
      let input = document.getElementById("todoinput");
      let value = input.value.trim();

      if (value === "") return; 

      let ul = document.getElementById("list");

      let li = document.createElement("li");
      li.innerHTML = `
        <span>${value}</span>
        <button onclick="editItem(this)" style="margin-left:5px;">Edit</button>
        <button onclick="deleteItem(this)" style="margin-left:5px;">Delete</button>
      `;

      ul.appendChild(li);
      input.value = ""; 
    }

    function editItem(button) {
      let li = button.parentElement;
      let span = li.querySelector("span");
      let currentText = span.innerText;

      let input = document.createElement("input");
      input.type = "text";
      input.value = currentText;

      let saveBtn = document.createElement("button");
      saveBtn.innerText = "Save";
      saveBtn.onclick = function () {
        span.innerText = input.value;
        li.replaceChild(span, input);
        li.replaceChild(button, saveBtn);
      };

      li.replaceChild(input, span);
      li.replaceChild(saveBtn, button);
    }

    function deleteItem(button) {
      let li = button.parentElement;
      li.remove();
    }