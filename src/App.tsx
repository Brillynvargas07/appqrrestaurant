import "./assets/css/reset.css";
import "./assets/fonts/poppins/poppins.css";
import "./assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css";
import "./App.css";
import "./assets/css/dashboard.css"
import Home from "./components/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuNav from "./components/nav/menuNav";
import Login from "./components/pages/login";
import SignIn from "./components/pages/signIn";
import Dashboard from "./components/pages/dashboard";
import MenuSide from "./components/nav/menuSide";
import Product from "./components/pages/product";
import Refresh from "./components/pages/refresh";

function App() {
  const isLogin = Boolean(localStorage.getItem('login'));

  if(!isLogin){
    return (
      <BrowserRouter>
        <MenuNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/restaurants" element={<SignIn />} />
          <Route path="/dashboard" element={<Refresh/>} />
        </Routes>
      </BrowserRouter>
    )
  }else{
    return (
      <div className="container">
        <BrowserRouter>
          <MenuSide />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Product />} />
            <Route path="/" element={<Refresh/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  };
}

export default App;
