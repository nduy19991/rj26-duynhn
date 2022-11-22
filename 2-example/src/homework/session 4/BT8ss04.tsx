import React,{useState} from 'react'

function BT8ss04() {
    const [String, setString] = useState<any>();
    const [result, setResult] = useState<any>();
     // const [result0, setResult0] = useState<string| any>();
    // const [result1, setResult1] = useState<string| any>();
    // const [result2, setResult2] = useState<string| any>();
    // const [result3, setResult3] = useState<string| any>();


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
            // let result0 = (sentence[0].length);
            // let result1 = (sentence[1].length);
            // let result2 = (sentence[2].length);
            // let result3 = (sentence[3].length);
            setResult(result);
            // setResult0(result0);
            // setResult1(result1);
            // setResult2(result2);
            // setResult3(result3);
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
            <p>Number :  {result} </p>
            

        </div>
    )
}

export default BT8ss04