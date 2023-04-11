import { useMemo, useState } from "react";

// useMemo will resolve function once, remember its result and resolving function later only when one of referencies in array will be changed. I should use it to bigger thinghs, becouse it is to save network and time with big functions
const App3 = () => {
  //   Memo returns true or false, first is function which do sth and it's value will be saved, second is array of dependencies. It will start and finish with first render to save some value and later only when one of referencies will be changed (firstName, secondName)
  //   const memoValue = useMemo(
  //     () => checkIfFirstNameAndSecondNameIsTheSame(firstName, secondName),
  //     [firstName, secondName]
  //   );

  const [planets, setPlanets] = useState([
    "Earth",
    "Mars",
    "Jupiter",
    "Venus",
    "Saturn",
  ]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(11);

  //   const filtredPlanets = planets.filter((planet) => planet.includes(query));
  // Now when I click on button, whole the App3 will be rerendered, so with function filter and function map etc even if the query or filter things won't change. If the planets array will be much bigger, it will slow app.

  // So I will use useMemo and it won't chenge until something from array will change
  const filtredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );

  return (
    <div>
      <div>Number of clicks: {clicks}</div>
      <button
        type="button"
        onClick={() => {
          setClicks((prev) => prev + 1);
        }}
      >
        Click me!
      </button>
      {filtredPlanets.map((planet) => (
        <div key={planet}>{planet}</div>
      ))}
    </div>
  );
};
export default App3;
