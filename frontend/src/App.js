import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateComponent from "./components/UpdateComponent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/add" element={<AddProduct></AddProduct>}></Route>
            <Route path="/update/:id" element={<UpdateComponent />}></Route>
            <Route path="/Logout" element={<h1>Logout components</h1>}></Route>
            <Route
              path="/Profile"
              element={<h1> profile components</h1>}
            ></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
//<Route element={<PrivateComponent/>}> this route is use to hide the page once user got login then
// only we can able to see inside view of page
