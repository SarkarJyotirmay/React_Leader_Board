import React, { useEffect, useState } from "react";
import Form from "./Form";
import LeaderBoard from "./LeaderBoard";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [score, setScore] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);

  const [flag, setFlag] = useState(1); // A flag that looks over any changes occuring or not if occured in the data then it changes when changes useEffect called

  // Whenever any change in data is occured or new data added it sorts the data and set the updated data
  useEffect(() => {
    if (data.length > 0) {
      const copy = [...data];
      copy.sort((a, b) => b.score - a.score);
      setData(copy);
    }
    console.log(flag);
  }, [flag]);

  //* Form submission
  function handleSubmit(e) {
    e.preventDefault();
    const info = {
      name: fname + " " + lname,
      score: score,
      country: country,
      id: Date.now(),
    };

    setData([...data, info]);
    setFlag(flag * -1);

    // sort before append data
    // setData((prev) => {
    //   const updatedData = [...prev, info];
    //   return updatedData.sort((a, b) => b.score - a.score);
    // });
  }

  // +5 | -5 function
  function handeEdit(objId, sign) {
    setFlag(flag * -1);
    setData(
      data.map((object) => {
        return objId == object.id
          ? {
              ...object,
              score:
                sign == "+"
                  ? Number(object.score) + 5
                  : Number(object.score) - 5,
            }
          : object;
      })
    );

    // sort after modifying data
    setData((prev) => {
      const updatedData = [...prev];
      return updatedData.sort((a, b) => b.score - a.score);
    });
  }

  // Delete function
  function handleDelete(objecId) {
    setData(
      data.filter((obj) => {
        return objecId !== obj.id;
      })
    );
    // sort after deleting data :  as we have saw the data is already sorted so deletation wont affect the final result
  }

  return (
    <>
      <Form
        fname={fname}
        setFname={setFname}
        lname={lname}
        setLname={setLname}
        score={score}
        setScore={setScore}
        country={country}
        setCountry={setCountry}
        handleSubmit={handleSubmit}
      />

      <LeaderBoard
        arr={data}
        handeEdit={handeEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
