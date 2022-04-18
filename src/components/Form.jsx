import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "username") {
      setForm({
        ...form,
        username: e.target.value,
      });
    }

    if (e.target.id === "age") {
      setForm({
        ...form,
        age: e.target.value,
      });
    }
  };

  return (
    <>
      <form>
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
