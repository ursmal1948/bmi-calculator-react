import "./style.css"
import { useState } from "react"
import Input from "./Input"

const Form = ({ calculateResult }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(weight, height);
    };

    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")

    return (
        <form onSubmit={onFormSubmit} className="form">
            <label className="form__label">
                Waga w kg*:
                <Input
                    value={weight}
                    onChangeFunction={(event) => setWeight(event.target.value)}
                    title="Wpisz swoją wagę"
                />
            </label>
            <label className="form__label">
                Wzrost w cm*:
                <Input
                    value={height}
                    onChangeFunction={(event) => setHeight(event.target.value)}
                    title="Wpisz swój wzrost"
                />
            </label>
            <button className="form__button">Policz swoje BMI</button>
        </form>

    );
};

export default Form;