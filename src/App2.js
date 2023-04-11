import { useEffect, useRef, useState } from "react";
// App to reference

import { Player } from "./Components/Player";

const App2 = () => {
  //   const [value, setValue] = useState(1);

  //   // Good practice to add "Ref" on end of constant to define it for other that this is reference
  //   const buttonRef = useRef(0);

  //   console.log("before: ");
  //   console.log(buttonRef);
  //   // console.log(buttonRef.current);

  //   useEffect(() => {
  //     console.log("useEffect");
  //     console.log(buttonRef);
  //     // console.log(buttonRef.current);
  //   }, []);

  //   const handleClick = () => {
  //     console.log("handleClick!");
  //     console.log(buttonRef);
  //     // console.log(buttonRef.current);
  //   };
  //   return (
  //     <div>
  //       <button type="button" onClick={() => setValue(value + 1)}>
  //         {value} and rerender all
  //       </button>
  //       <button type="button" onClick={handleClick} ref={buttonRef}>
  //         Button with ref! No rerender so much
  //       </button>
  //     </div>
  //   );

  const playerRef = useRef();

  return (
    <div>
      <Player
        ref={playerRef}
        src="http://media.w3.org/2010/05/sintel/trailer.mp4"
      />
    </div>
  );
};

export default App2;
