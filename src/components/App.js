import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogPage from './HogPage'

console.log(hogs)

function App() {  
  return (
    <div className="App">
      <Nav />
      <HogPage hogs = {hogs} />
    </div>
  );
}

export default App;
