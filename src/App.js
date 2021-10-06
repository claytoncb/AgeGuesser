import { useState } from "react";
import Title from "./Title";
import Input from "./Input"
import AgeGuesser from "./AgeGuesser";


export default function App() {
  const [name, setName] = useState("");
  
  return (
    <div className="App">
      <Title />
      <Input name = {name} setName = {setName} />
      <AgeGuesser name={name} />
    </div>
  );
}
