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

        <div className="input-div">
        <label htmlFor="fname">Enter Your First Name</label>
        <input
          type="text"
          id="fname"
          placeholder="eg : Jyotirmay"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        </div>

        <div className="input-div">
          <label htmlFor="lname">Enter Your Last Name</label>
        <input
          type="text"
          id="lname"
          placeholder="eg: Sarkar"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        </div>

        <div className="input-div">
        <label htmlFor="score">Enter Your Score</label>
        <input
          type="number"
          id="score"
          placeholder="eg: 88"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        </div>

        <div className="input-div">
        <label htmlFor="country">Select Your Country</label>
        <select
          name=""
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="" disabled >Select a Country</option>
          <option value="india">India</option>
          <option value="afghanistan">Afghanistan</option>
          <option value="zimbabway">Zimbabway</option>
          <option value="australia">Australia</option>
          <option value="england">England</option>
        </select>
        </div>
        
       

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;
