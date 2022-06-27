import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container"
import Header from "./components/Home/Header/Header";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import "./App.css";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <main>
          <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/all-products" element={<Products q="all" />} />
            <Route path="/menCategory" element={<Products q="men" />} />
            <Route path="/womenCategory" element={<Products q="women" />} />
            <Route path="/kidsCategory" element={<Products q="kids" />} />
            <Route path="/men/cloths" element={<Products q="men/cloths" />} />
            <Route
              path="/women/cloths"
              element={<Products q="women/cloths" />}
            />
            <Route path="/kids/cloths" element={<Products q="kids/cloths" />} />
            <Route path="/trending" element={<Products q="trending" />} />
            <Route path="/men-shoes" element={<Products q="men-shoes" />} />
            <Route path="/women-shoes" element={<Products q="women-shoes" />} />
            <Route path="/sport-shoes" element={<Products q="sport-shoes" />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/myCart" element={<Cart />} />
          </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
