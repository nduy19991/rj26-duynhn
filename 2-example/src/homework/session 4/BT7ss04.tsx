import React, { useState } from 'react'

function BT7ss04() {
    const [String, setString] = useState<string>();
    const [result, setResult] = useState<number | string>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "name1":
                setString(e.target.value);
                break;
            default:
                break;
        }
    }
    const handleClick = () => {
        if (String) {
            let sentence = String.toLowerCase().split(" ");
            for (var i = 0; i < sentence.length; i++) {
                sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
            }

            let result = sentence.join(" ");
            setResult(result);
        }
    }
    return (
        <div>
            <input
                name="name1"
                value={String ? String : ""}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <button onClick={handleClick}>Run</button>
            <p>Correct text :  {result}</p>

        </div>
    )
}

export default BT7ss04