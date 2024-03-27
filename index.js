// Creating a component called App
function App() {
  // Setting an initial state
  const [todos, setTodos] = React.useState([
    {
      text: "Wash the dishes",
      isCompleted: false,
    },
    {
      text: "Clean out the fridge",
      isCompleted: false,
    },
    {
      text: "Take out the trash",
      isCompleted: false,
    },
    {
      text: "Buy groceries",
      isCompleted: false,
    },
    {
      text: "Do laundry",
      isCompleted: false,
    },
    {
      text: "Vacuum the floor",
      isCompleted: false,
    },
  ]);

  const addTodo = (formInputText) => {
    const newTodos = [...todos, { text: formInputText, isCompleted: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      return i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo;
    });
    setTodos(newTodos);
  };

  const removeCompletedTodos = () => {
    const newTodos = todos.filter((todo, i) => {
      return todo.isCompleted !== true;
    });
    setTodos(newTodos);
  };

  return (
    // Looping to create a div for each item in todos
    <div className="card">
      <div className="card-header">To-Do List </div>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <Todo index={i} key={i} todo={todo} handleTodo={toggleTodo}>
            {" "}
          </Todo>
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
      <button
        className="btn btn-info"
        type="button"
        onClick={removeCompletedTodos}
      >
        Clear Completed To-dos
      </button>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
