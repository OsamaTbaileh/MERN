import React, { useState } from "react";
import Form from "./Components/Form";
import Display from "./Components/Display";

function App() {
  const [currentColor, setCurrentColor] = useState([]);

  const youAddColor = (newColor) => {
    setCurrentColor([{ x: currentColor.length, y: newColor }, ...currentColor]);
  };
  return (
    <>
      <Form onNewColor={youAddColor} />
      <Display color={currentColor} />
    </>
  );
}

export default App;
