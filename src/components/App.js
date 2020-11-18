import React from "react";
import Header from "./Views/Header";
import TicketControl from "./TicketController/TicketControl";

function App() {

  return (
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
    // In order to return multiple elements, all the code 
    // in a function component's return statement must be wrapped in a single JSX element
  );
}
export default App;
