export default function renderTodoFormElement(value = "") {
  const random = Date.now();
  const id = `todo-item-${random}`;
  const removeBtnId = `${id}-btn`;
  const todoItemElm = document.createElement("li");
  todoItemElm.innerHTML = `
    <section class="form-group todo-form-group">
      <input type="text" id="${id}" name="todo-item" value="${value}" />
      <button id="${removeBtnId}">-</button>
    </section>
  `;
  const todoListElm = document.querySelector("#todo-list");
  todoListElm.appendChild(todoItemElm);

  /* Event listeners */
  document.querySelector(`#${removeBtnId}`).addEventListener("click", (event) => {
    event.preventDefault();
    todoListElm.removeChild(todoItemElm);
  });
}
