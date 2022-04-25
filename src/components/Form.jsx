import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    salary: "",
    martialstate: "",
  });
  // const [name, setName] = useState("");
  // const [headingText, setHeading] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  // function handleChange(event) {
  //   console.log(event.target.value);
  //   setName(event.target.value);
  // }

  function handleClick(event) {
    // setHeading(name);
    // event.preventDefault();
    console.log(form);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={form.name}
        />

        <input
          onChange={handleChange}
          type="number"
          placeholder="Age"
          value={form.age}
        />

        <input
          onChange={handleChange}
          type="text"
          placeholder="Address"
          value={form.address}
        />

        <input
          onChange={handleChange}
          type="text"
          placeholder="Salary"
          value={form.salary}
        />

        <input
          onChange={handleChange}
          type="text"
          placeholder="Martial state"
          value={form.martialstate}
        />
        <button type="submit">Submit</button>
        <div>{headingText}</div>
      </form>
    </div>
  );
}

export default App;
