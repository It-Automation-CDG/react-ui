// import User from "./component/User";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import "./App.css";

function App() {
  const [isclicked, setIsclicked] = useState(true);
  const showSidenav = () => {
    if (isclicked === false) setIsclicked(true);
    else {
      setIsclicked(false);
    }
  };
  return (
    <>
      <Navbar showSidenav={showSidenav}></Navbar>
      <Main showSidenav={isclicked}></Main>
    </>
  );
}

export default App;
