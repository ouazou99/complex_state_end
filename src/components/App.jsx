import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prev) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prev.lname
        };
      } else if (name === "lName")
        return {
          lname: value,
          fname: prev.fname
        };
    });
  }

  return (
    <div className="container">
      <h1>
        {fullName.fname}
        {fullName.lname}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          value={fullName.fname}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={fullName.lname}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
