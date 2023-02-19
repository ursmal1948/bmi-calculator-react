import React, { useState } from 'react';
import Form from "./Form";
import Header from "./Header";
import Result from "./Result";
import { specifics } from "./specifics"
import { Container } from "./Container"

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
    <Container>
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
    </Container >
  );
};

export default App;
