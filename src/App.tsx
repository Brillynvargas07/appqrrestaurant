import "./assets/css/reset.css";
import "./assets/fonts/poppins/poppins.css";
import "./assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css";
import "./App.css";
import Home from "./components/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuNav from "./components/nav/menuNav";
import Login from "./components/pages/login";
import SignIn from "./components/pages/signIn";

function App() {
  return (
    <BrowserRouter>
      <MenuNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
