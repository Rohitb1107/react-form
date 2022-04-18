import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={form.username}
          type="text"
          placeholder="Enter Username"
          id="username"
        />
        <input
          onChange={handleChange}
          value={form.age}
          type="number"
          placeholder="Enter Age"
          id="age"
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
