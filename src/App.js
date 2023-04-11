import { useEffect } from "react";
import { useUser } from "./providers/userContext";
import { Username } from "./Components/Username";

const App = () => {
  // const user = useContext(UserContext);
  // const { setUsername, username } = user;

  // It's my hook:
  const { username, isLoggedIn, setUsername, logIn, logOut, someArgument } =
    useUser();

  // useEffect(() => {
  //   // user.setUsername("Dawid");
  //   setUsername("Dawid");
  // }, []);

  // console.log({ user });

  // return <div>{user.username}</div>;
  // return <div>{username}</div>;
  return (
    <div>
      {isLoggedIn && <Username />}
      <h2>{someArgument}</h2>
      {isLoggedIn ? (
        <button type="button" onClick={logOut}>
          OUT
        </button>
      ) : (
        <button type="button" onClick={logIn}>
          IN
        </button>
      )}
    </div>
  );
};

export default App;