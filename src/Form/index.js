import "./style.css"
import { useState } from "react"
import { specifics } from "../specifics"
import Input from "./Input"

const Form = ({ calculateResult, showNorm }) => {




    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(weight, height);
        showNorm()

    }

    const [weight, setWeight] = useState("")

    const [height, setHeight] = useState("")

    return (
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="form__fieldset">
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
            </fieldset>
            <button className="form__button">Policz swoje BMI</button>
        </form>

    )
}



export default Form;