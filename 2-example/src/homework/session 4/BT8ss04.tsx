import React,{useState} from 'react'

function BT8ss04() {
    const [String, setString] = useState<any>();
    const [result, setResult] = useState<any>();

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
       if(String){
        let sentence = String.split(" ");
        console.log(sentence)

        for (let i = 0; i < sentence.length; i++) {
            let result = (sentence[i].length);
            setResult(result);
          }
        
         
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
            <p>Correct text :  {result} </p>
            

        </div>
    )
}

export default BT8ss04