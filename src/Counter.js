import react, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const [word, setWord] = useState('')

    function handleChange(e){
        setWord(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setCount(count + word.length)
        setWord('')

    }

//Type word, click on submit button, increments the counter by the word length.

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={word} onChange={handleChange} />
                <button>Submit</button>
            </form>
            <h1>{count}</h1>
        </div>
    )

}

export default Counter