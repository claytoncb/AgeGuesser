import { useState } from "react";

export default function Input({ name, setName }) {
  const [name1 , setName1] = useState("")

  return (
    <div>
      <textarea
        required
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      ></textarea>
      <button onClick={() => setName(name1)}></button>
    </div>
  );
}
