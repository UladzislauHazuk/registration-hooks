import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistartionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/reg" element={<RegistrationPage></RegistrationPage>}></Route>
      </Routes>
    </>
  );
}

export default App;