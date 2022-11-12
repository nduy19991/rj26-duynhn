import React, { useState } from 'react'

function BT6ss04() {
    const [inputNumber1, setInputNumber1] = useState<number>();
    const [inputNumber2, setInputNumber2] = useState<number>();
    const [result, setResult] = useState<number | string>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "name1":
                setInputNumber1(parseInt(e.target.value))
                break;
            case "name2":
                setInputNumber2(parseInt(e.target.value))
                break;
            default:
                break;
        }
    }


    const handleClick = () => {
        if (inputNumber1 && inputNumber2) {
            let getUc = 1
            for (let index = 1; index <= inputNumber1 && index <= inputNumber2; index++) {
                if (inputNumber1 % index === 0 && inputNumber2 % index === 0) {
                    getUc = index
                }
                setResult(getUc)
            }
        } else {
            setResult("Please enter all 4 numbers")
        }
    }
    return (
        <div>
            <input
                name="name1"
                value={inputNumber1 ? inputNumber1 : ''}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <input
                name="name2"
                value={inputNumber2 ? inputNumber2 : ''}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <button onClick={handleClick}>Run</button>

            <p>UCLN: {result}</p>

        </div>
    )
}

export default BT6ss04