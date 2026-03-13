let task = [];

const inputEl = document.querySelector("#inputEl");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", addTask);

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {

  const value = inputEl.value.trim();

  if (value) {

    task.push(value);

    renderTask(task);

    inputEl.value = "";

  }

}


function renderTask(arr) {

  taskList.innerHTML = "";

  if (arr.length > 0) {

    arr.forEach((item) => {

      let li = document.createElement("li");

      li.className =
      "flex justify-between items-center bg-white px-4 py-3 rounded-xl shadow-md hover:shadow-xl transition";

      let span = document.createElement("span");

      span.textContent = item;

      span.className = "text-slate-800 font-medium";

      let btn = document.createElement("button");

      btn.className =
      "btn btn-sm btn-error hover:scale-110 transition";

      btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 7l-.867 12.142A2 2 0
      0116.138 21H7.862a2 2 0
      01-1.995-1.858L5 7m5
      4v6m4-6v6M9 7V4a1 1 0
      011-1h4a1 1 0 011 1v3M4
      7h16"/>
      </svg>
      `;

      btn.addEventListener("click", () => {

        task.splice(task.indexOf(item), 1);

        reCallRender();

      });

      li.append(span);

      li.append(btn);

      taskList.append(li);

    });

  }

  else {

    taskList.innerHTML =
    `<li class="text-white text-center">
    No tasks to show !!
    </li>`;

  }

}

renderTask(task);

function reCallRender() {
  renderTask(task);
}
