import React, { useState } from 'react'

function BT1ss04() {
    const [inputNumber, setInputNumber] = useState<number>()
    const [result, setResult] = useState<number | undefined>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        setInputNumber(parseInt(e.target.value));
    }

    const handleClick = () => {
        console.log("click")
        let res = bt1(inputNumber)
        setResult(res);
    }

    const bt1 = (_inputNumber : number | undefined) =>{
       
        return _inputNumber ? _inputNumber * 2 : undefined
      }

    return (
        <div>
            <input value={inputNumber ? inputNumber : ""} onChange={(e) => handleChange(e)} type="number" />
            <button onClick={handleClick}>Run</button>
            {result}
        </div>
    )
}

export default BT1ss04