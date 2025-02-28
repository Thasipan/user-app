import React, { useState } from "react";
import Home from "./pages/Home";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-4">
      <DarkModeToggle />
      <Home />
    </div>
  );
}

export default App;