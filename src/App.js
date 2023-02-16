import React, { useState } from 'react';
import Form from "./Form";
import Header from "./Header";
import Result from "./Result";
import './container.css';
import { specifics } from "./specifics"

function App() {



  const [result, setResult] = useState("")

  // (specific.BMI > result && result > 0) || (specific.BMI > result && specific.BMIend < result) || (specific.BMI < result)).meaning

  const [norm, setNorm] = useState("")

  const showNorm = () => {
    const comment = specifics.find(specific => ((specific.BMI < result && result < specific.BMIend)
      || (specific.BMI > result && specific.BMI > 0))).meaning

    return (
      console.log(comment)

    )
  }

  const calculateResult = (weight, height) => {
    setResult(weight / (height * height) * 10000)
  }



  return (
    <div className="container">
      <Header />

      <Form
        calculateResult={calculateResult}
        result={result}
        showNorm={showNorm}
      />

      <Result
        result={result}
      />

    </div>
  );
}

export default App;
