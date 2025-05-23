import React from "react";
import { MdDelete } from "react-icons/md";

function LeaderBoard({ arr, handeEdit, handleDelete }) {
  return (
    <>
      <div className="container">
        <div className='heading'>
        <p>Name</p>
        <p>Country</p>
        <p>Score</p>
        <p>Actions</p>
        </div>

        <div className="leader-board">
          {arr.length > 0 &&
            arr.map((obj) => {
              return (
                <div className="content" key={obj.id}>
                  <p>{obj.name}</p>
                  <p>{obj.country}</p>
                  <p>{obj.score}</p>
                  <div className="actions">
                    <span onClick={(e)=>handeEdit(obj.id, "+")}>+5</span>
                    <span onClick={(e)=>handeEdit(obj.id, "-")}>-5</span>
                    <span id="delete-span" onClick={()=>handleDelete(obj.id)}><MdDelete /></span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default LeaderBoard;
