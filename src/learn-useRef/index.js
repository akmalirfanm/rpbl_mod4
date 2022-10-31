import { useState, useEffect, useRef } from "react";

export default function Ref() {
  const [click, setClick] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleClick = () => {
    setClick(count.current);
  };

  return (
    <>
      <h1>Klik Tombol Ini Untuk Render Komponen</h1>
      <button style={{ height: 50, width: 150 }} onClick={handleClick}>
        Click to Render
      </button>
      <h1 style={{ marginBottom: 0 }}>Render Count: </h1>
      <h1 style={{ margin: 0 }}>{count.current}</h1>
    </>
  );
}
