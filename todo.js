function Todo ({index, todo, handleTodo}) {

    function handle () {
        handleTodo(index);
    }

    return (
    <li className="list-group-item to-do-item" key={index}>
            <input
              className="form-check-input me-1 to-do-checkbox"
              type="checkbox"
              value=""
              id={index}
              checked={todo.isCompleted}
              onChange={handle}
            />
            <label
              className="form-check-label stretched-link to-do-label"
              htmlFor={index}
            >
              {todo.text}
            </label>
          </li>
    )
}