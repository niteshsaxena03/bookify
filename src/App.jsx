import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>home</h1>}/>
        <Route path="/login" element={<h1>login</h1>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
    </>
  );
}

export default App;
