import "./style.css"
import { useState } from "react"
import { specifics } from "../specifics"

const Form = ({ inputAttributes, calculateResult, showNorm }) => {




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
                    <input
                        value={weight}
                        onChange={(event) => setWeight(event.target.value)}
                        {...inputAttributes}
                        placeholder="Wpisz swoją wagę"
                    />
                </label>
                <label className="form__label">
                    Wzrost w cm*:
                    <input
                        value={height}
                        onChange={(event) => setHeight(event.target.value)}
                        {...inputAttributes}
                        placeholder="Wpisz swój wzrost"
                    />
                </label>
            </fieldset>
            <button className="form__button">Policz swoje BMI</button>
        </form>

    )
}



export default Form;