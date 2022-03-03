import { useState } from "react";
import "./index.css";

const morseCharacters = [
  { character: "0", morse: "-----" },
  { character: "1", morse: ".----" },
  { character: "2", morse: "..---" },
  { character: "3", morse: "...--" },
  { character: "4", morse: "....-" },
  { character: "5", morse: "....." },
  { character: "6", morse: "-...." },
  { character: "7", morse: "--..." },
  { character: "8", morse: "---.." },
  { character: "9", morse: "----." },
  { character: "A", morse: ".-" },
  { character: "B", morse: "-..." },
  { character: "C", morse: "-.-." },
  { character: "D", morse: "-.." },
  { character: "E", morse: "." },
  { character: "F", morse: "..-." },
  { character: "G", morse: "--." },
  { character: "H", morse: "...." },
  { character: "I", morse: ".." },
  { character: "J", morse: ".---" },
  { character: "K", morse: "-.-" },
  { character: "L", morse: ".-.." },
  { character: "M", morse: "--" },
  { character: "N", morse: "-." },
  { character: "O", morse: "---" },
  { character: "P", morse: ".--." },
  { character: "Q", morse: "--.-" },
  { character: "R", morse: ".-." },
  { character: "S", morse: "..." },
  { character: "T", morse: "-" },
  { character: "U", morse: "..-" },
  { character: "V", morse: "...-" },
  { character: "W", morse: ".--" },
  { character: "X", morse: "-..-" },
  { character: "Y", morse: "-.--" },
  { character: "Z", morse: "--.." },
  { character: ",", morse: "--..--" },
  { character: "?", morse: "..--.." },
  { character: "!", morse: "-.-.--" },
  { character: "/", morse: "-..-." },
  { character: "@", morse: ".--.-." },
  { character: "(", morse: "-.--." },
  { character: ")", morse: "-.--.-" }
];

export default function App() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase().split("");
  const [text, setText] = useState();
  const [morseText, setMorseText] = useState()
  const [result, setResult] = useState([]);
  const arrayMorse = [];
  let translateResult

  const handleChange = (e) => {

    console.log(e.target.value);
    setText(e.target.value);
    
  };

  const translateText = (e) => {
    e.preventDefault();
    let textArray 
    let isText = morseCharacters.some((element) => text.toLocaleUpperCase().split("").includes(element.character));
    
    if (isText) {
      textArray = text.toLocaleUpperCase().split("");
      setResult(translateTextToMorse(textArray))
      console.log(result);
      
    } else {
      textArray = text.split(" ")
      console.log("Text to array",textArray)
      setResult(translateMorseToText(textArray))
    }
  };

  const translateTextToMorse = (array) => {
    console.log(array)

    for (let i = 0; i < array.length; i++){
      for(let j = 0; j < morseCharacters.length; j++){
        console.log("ARRAY1",array[i],"ARRAY2:",morseCharacters[j].character)
        if(array[i] ===morseCharacters[j].character){
          arrayMorse.push(morseCharacters[j].morse)
        }
      }
    }
    console.log(arrayMorse)
    translateResult = arrayMorse.toString().trim().replaceAll(","," ")
    console.log(translateResult)
    return translateResult;
  };
  const translateMorseToText = (array) => {
    console.log(array);

    for (let i = 0; i < array.length; i++){
      for(let j = 0; j < morseCharacters.length; j++){
        console.log("ARRAY1",array[i],"ARRAY2:",morseCharacters[j].character)
        if(array[i] === morseCharacters[j].morse){
          arrayMorse.push(morseCharacters[j].character)
        }
      }
    }
    console.log(arrayMorse)
    translateResult = arrayMorse.toString().trim().replaceAll(",","")
    console.log(translateResult)
    return translateResult;
  };

  return (
    <div className="App">
      <form onSubmit={translateText}>
        <textarea onChange={handleChange} rows="20" cols="30">
        </textarea>
        <button type="submit">Translate</button>
        <textarea disabled rows="20" cols="30" value={result}></textarea>
      </form>
    </div>
  );
}

