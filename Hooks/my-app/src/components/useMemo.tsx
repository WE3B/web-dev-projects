import { useMemo, useState } from "react";

function UseMemoHook(){

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const doubled = useMemo(function(){
        console.log("Calculating doubled");
        return count * 2
  },[count]);

  return (
    <div>
      <h2 className="border">Count: {count}</h2>
      <h2 className="border">Doubled: {doubled}</h2>
      <button className="border" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <br /><br />
      <input
        value={text} className="border"
        onChange={(e) => setText(e.target.value)}
      />

    </div>
  );
}

export default UseMemoHook;