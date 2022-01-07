import dynamic from "next/dynamic";
import { useState } from "react";

const HelloComponent = dynamic(() => import("../../src/components/hello-component"));

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      Home component
      <div>{show ? <HelloComponent /> : null}</div>
      <div>
        <button onClick={() => setShow((pV) => !pV)}>Show</button>
      </div>
    </div>
  );
}