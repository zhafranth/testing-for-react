import React, { useState } from "react";

const CompUserEvent = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  // const onSubmit = () => {
  //   console.log("this call API");
  // };
  return (
    <>
      <p>Anda sedang mengetik {value}</p>
      <input
        type="text"
        placeholder="input value"
        onChange={(e) => setValue(e.target.value)}
      />
      <p onClick={onSubmit} data-testid="text-submit">
        Submit
      </p>
    </>
  );
};

export default CompUserEvent;
