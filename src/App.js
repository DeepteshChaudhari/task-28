import "./App.css";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/cart" Component={Cart}></Route>
      </Routes>
    </div>
  );
}

export default App;
