import React, { useState } from "react";

const SimpleShowHideComp = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>Saya sedang {show ? "Muncul" : "Sembunyi"}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "Sembunyikan" : "Munculkan"}
      </button>
    </div>
  );
};

export default SimpleShowHideComp;
