import React, { useState } from 'react'

function Bt5() {
    const [inputNumber, setInputNumber] = useState<number>();
    const [result,setResult] = useState<boolean>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setInputNumber(parseInt(e.target.value));
        console.log(typeof inputNumber);
    }


    const handleClick = () => {
        let res = bt5(inputNumber)
        inputNumber && setResult(res);
    }


    const bt5 = (_inputNumber: number | undefined) => {
        if(inputNumber) {
            let isNT = true
            for (let i = 2; i < inputNumber/2; i++) {
                if (inputNumber % i === 0) {
                    isNT = false
                    break
                }
            }
            console.log(isNT);
            return isNT
           }
    }
    return (
        <div>
            <input
                value={inputNumber ? inputNumber : ''}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <button onClick={handleClick}>Run</button>
          
            <p> {result ? 'This is prime number' : 'This is not prime number'}</p>

        </div>
    )
}

export default Bt5