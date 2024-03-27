function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // the default is to reload the page when the form is submitted, which we don't want.
    if (!value) return; // if the value is empty, we won't do anything.
    addTodo(value);
    setValue(""); // clear the form, so that the value is now an empty string again.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group add-to-do">
        <input
          type="text"
          className="form-control"
          id="add-to-do"
          placeholder= "Add a to-do..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}
