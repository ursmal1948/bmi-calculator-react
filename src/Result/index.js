import "./style.css"

const Result = ({ result, comment }) => (
    !!result && (
        <>
            <header className="result">
                <p>Wynik: {result.toFixed(2)}</p>
                <p>{comment}</p>
            </header>
        </>
    )


);

export default Result;