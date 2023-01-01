import React from "react";
import "./App.css";
import News from "./components/News/News";
import ResponsiveDrawer from "./components/Drawer/ResponsiveDrawer.jsx";
import AppBar from "./components/AppBar/AppBar.jsx";
function App() {
  return (
    <div className="App">
      <AppBar />
      <ResponsiveDrawer />
      <News />
    </div>
  );
}

export default App;
