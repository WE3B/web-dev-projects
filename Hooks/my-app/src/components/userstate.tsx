import { useState } from "react";

function UseStateHook(){

  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col items-center gap-4">
      {show && <h2>Message</h2>}
      <button className="border p-3" onClick={()=>setShow(!show)}>
        Toggle Message
      </button>

    </div>
  );
}

export default UseStateHook;