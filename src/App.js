import React, { useState } from 'react';
import Form from "./Form";
import Header from "./Header";
import Result from "./Result";
import './container.css';
import { specifics } from "./specifics"

function App() {

  const [result, setResult] = useState("")

  const getComment = () =>
    specifics.find(specific =>
    ((result >= specific.BMIstart && result <= specific.BMIend) ||
      (result >= specific.BMIstart && specific.BMIend === ""))).meaning


  const comment = result
    ? getComment()

    : "N/A";

  const calculateResult = (weight, height) => {
    setResult(weight / (height * height) * 10000)
  }

  return (
    <div className="container">
      <Header />
      <Form
        calculateResult={calculateResult}
        result={result}
        specifics={specifics}
      />
      <Result
        result={result}
        comment={comment}
        />
    </div>
  );
}

export default App;
