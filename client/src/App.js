import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContextProvider";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route exact path="" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Outlet />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
