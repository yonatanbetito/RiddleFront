import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login_Register from "./pages/Login_Register";
import Login from "./comps/Login";
import Register from "./comps/Register";
import Leadboard from "./pages/Leadboard";
import Play from "./pages/Play";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/loginregister" element={<Login_Register />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/leadboard" element={<Leadboard />} />
      </Routes>
    </>
  );
}

export default App;
