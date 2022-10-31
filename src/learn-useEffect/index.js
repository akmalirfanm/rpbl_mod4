import React, { useState, useEffect } from "react";
import "./index.css";
export default function Effect() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  //dijalankan 1 kali
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //dijalankan terus setiap ada perubahan count
  useEffect(() => {
    if (count > 0) {
      alert(`component will update & count ${count}`);
    }
  }, [count]);
  //dijalankan terus menerus
  useEffect(() => {
    console.log("spam console kuy");
  });
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="Main">
      <p className="Text"> Learn useEffect</p>
      <p>KELOMPOKXX</p>
      <p className="Text">{count}</p>
      <div className="ViewButton">
        <div className="ViewButton2">
          <button className="Button" onClick={countUp}>
            Up
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={countDown}>
            Down
          </button>
        </div>
      </div>
    </div>
  );
}
