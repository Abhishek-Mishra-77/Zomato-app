import React from "react";
import Home from "./pages/Home/Home";
import ItemProvider from "./components/ContextApi/ItemProvider";

function App() {
  return (
    <ItemProvider>
      <Home />
    </ItemProvider>
  );
}

export default App;
