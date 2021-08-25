import React, { useState, useEffect } from "react";

export const data = [
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
  "minggu",
];

const CompVariant = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setUsers("Zhafran");
    }, 1000);
  }, []);
  return (
    <>
      {users ? <p>Selamat datang {users}</p> : null}
      <p>Berikut nama-nama : </p>
      {data.map((item, i) => (
        <p key={i} data-testid="hari">
          {item}
        </p>
      ))}
    </>
  );
};

export default CompVariant;
