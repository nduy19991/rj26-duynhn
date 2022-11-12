import React, { useState } from 'react'

function BT4ss04() {
    const [inputNumber, setInputNumber] = useState<number>()
    const [result2, setResult2] = useState<number | undefined>()
    const [result1, setResult1] = useState<number | undefined>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        setInputNumber(parseInt(e.target.value));
    }

    const handleClick = () => {
        console.log("click")
        let res2 = getDV(inputNumber)
        let res1 = getC(inputNumber)
        inputNumber && setResult2(res2);
        inputNumber && setResult1(res1);
    }

    const getDV = (_inputNumber: number | undefined) => {

        if (_inputNumber) {
            let dv = (_inputNumber % 10)
            return _inputNumber ? dv : undefined
        }
    }

    const getC = (_inputNumber: number | undefined) => {

        if (_inputNumber) {
            let c = (_inputNumber / 10)
            return _inputNumber ? Math.floor(c) : undefined
        }
    }

    return (
        <div>
            <input value={inputNumber ? inputNumber : ""} onChange={(e) => handleChange(e)} type="number" />
            <button onClick={handleClick}>Run</button>
            <p>{result1}</p>
            <p>{result2}</p>
        </div>
    )
}

export default BT4ss04

