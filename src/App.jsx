import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MyNavbar from "./components/Navbar";
import List from "./pages/List";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <MyNavbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/book/list" element={<List/>}/>
      </Routes>
    </>
  );
}

export default App;
