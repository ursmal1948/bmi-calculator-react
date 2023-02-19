import "./style.css"

const Result = ({ result, comment }) => {

    return !!result && (
        <>
            <header className="result">
                <p>Wynik: {result.toFixed(2)}</p>
                <p>{comment}</p>
            </header>
        </>
    )
};

export default Result;