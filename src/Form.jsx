import React from "react";

function Form({
  fname,
  setFname,
  lname,
  setLname,
  score,
  setScore,
  country,
  setCountry,
  handleSubmit
}) {
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <select
          name=""
          id=""
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select a Country</option>
          <option value="india">India</option>
          <option value="afghanistan">Afghanistan</option>
          <option value="zimbabway">Zimbabway</option>
          <option value="australia">Australia</option>
          <option value="england">England</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;
