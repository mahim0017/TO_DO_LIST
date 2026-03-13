let task =[];
const inputEl =document.querySelector( "#inputEl");
const addBtn =document.querySelector("#addBtn");
const taskList =document.querySelector("#taskList")


addBtn.addEventListener("click", () => {
  const value = inputEl.value.trim();
  if (value){  task.push(value);
  renderTask(task);
  inputEl.value = "";
}
});

inputEl.addEventListener("keydown", (kaka) => {
  console.log(kaka);
  if (kaka.key === "Enter") {
    const value = inputEl.value.trim();
    task.push(value);
    renderTask(task);
    inputEl.value = "";
  }
});

function renderTask(arr) {
  taskList.innerHTML = "";
  if (arr.length > 0) {
    arr.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;

      let btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.addEventListener("click", () => {
        task.splice(task.indexOf(item), 1);
        reCallRender();
      });

      li.append(btn);
      taskList.append(li);
    });
  } else {
    taskList.innerHTML = `
      <li> No tasks to show !!</li>
    `;
  }
}
renderTask(task);

function reCallRender() {
  renderTask(task);
}