import { useState } from "react";
import App from "./App";

function AppDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h3>Hello React</h3>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} LoginPage
      </button>
      {show ? <App /> : null}
    </>
  );
}

export default AppDemo;
