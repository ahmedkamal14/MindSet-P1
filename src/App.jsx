import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
