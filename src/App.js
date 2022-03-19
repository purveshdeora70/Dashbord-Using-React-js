import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Dashbord from "./pages/dashbord/Dashbord";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Footer from "./components/footer/Footer";


import "./app.css"

function App() {
  return (
    <BrowserRouter>
      <Topbar />
        <div className="container">
          <Sidebar/>
          <Routes>
          <Route path="" element={<Dashbord />} />
          <Route path="/customer-list" element={<UserList />} />
          <Route path="/customer-edit/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;