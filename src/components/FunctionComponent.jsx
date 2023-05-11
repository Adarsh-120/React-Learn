import React, { useState } from "react";

const FunctionComponent = ({ name, age, author, setName }) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");

  return (
    <div>
      <p>This is Functional Component</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment/add by 1
      </button>
      <h2>{count}</h2>
      <h3>
        Company is : {name}, it is of {age} years old and the author of the
        company is {author}
      </h3>
      {/* <input onChange={(e)=> setChangeName(e.target.value)} /> */}
      <input onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => setName(changeName)}> Change name to...</button>
    </div>
  );
};

export default FunctionComponent;

// props:{
//     name: "Devtown",
//     age: 20,
//     author: "Adarsh"
// }
