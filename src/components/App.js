import React from "react";
import Header from "./Views/Header";
import TicketControl from "./TicketController/TicketControl";

function App() {
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      {/* React.createElement() */}
      <TicketControl />
    </React.Fragment>
    // In order to return multiple elements, all the code 
    // in a function component's return statement must be wrapped in a single JSX element
  );
}
export default App;
