import {useState, useEffect} from "react";

export default function AgeGuesser({name}) {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://api.agify.io?name=${name}`;
    fetch(url)
    .then((r) => r.json())
    .then((r) => setData(r));

  }, [name]);

  return (
    <div>
      Estimate Age: {data.age}
    </div>
  )
}