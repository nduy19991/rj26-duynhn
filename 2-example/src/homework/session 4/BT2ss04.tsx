import React, { useState } from 'react'

function BT2ss04() {
    const [number1, SetNumber1] = useState<number>()
    const [number2, SetNumber2] = useState<number>()
    const [number3, SetNumber3] = useState<number>()
    const [number4, SetNumber4] = useState<number>()
    const [res, setResult] = useState<number | string>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name)

        switch (event.target.name) {
            case 'name1':
                SetNumber1(parseInt(event.target.value))
                break;
            case 'name2':
                SetNumber2(parseInt(event.target.value))
                break;
            case 'name3':
                SetNumber3(parseInt(event.target.value))
                break;
            case 'name4':
                SetNumber4(parseInt(event.target.value))
                break;

            default:
                break;
        }
    }

    const handleClick = () => {
        
        if (number1 && number2 && number3 && number4) {
            let numberMin = number1
            if (numberMin > number2) {
                numberMin = number2
            }
            if (numberMin > number3) {
                numberMin = number3
            }
            if (numberMin > number4) {
                numberMin = number4
            }
            
            setResult(numberMin)
        } else {
            setResult("Please enter all 4 numbers")
        }
        
        
    }
    return (
        <div>
            <input name='name1'
                value={number1 ? number1 : ''}
                type="text" onChange={(event) => handleChange(event)}
            />
            <br />
            <input name='name2'
                value={number2 ? number2 : ''} type="text" onChange={(event) =>
                    handleChange(event)}
            />
            <br />
            <input name='name3'
                value={number3 ? number3 : ''} type="text"
                onChange={(event) => handleChange(event)}
            />
            <br />
            <input name='name4'
                value={number4 ? number4 : ''}
                type="text" onChange={(event) => handleChange(event)}
            />
            <br />
            <button onClick={handleClick} >Run</button>
            <p>{res}</p>
        </div>
    )
}

export default BT2ss04