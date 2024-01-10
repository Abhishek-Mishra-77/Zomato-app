import React from "react";
import Home from "./pages/Home/Home";
import ItemProvider from "./components/ContextApi/ItemProvider";

function App() {
  return (
    <div className="app">
      <ItemProvider>
        <Home />
      </ItemProvider>
    </div>
  );
}

export default App;
