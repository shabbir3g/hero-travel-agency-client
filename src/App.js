import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Home/Login/Login/Login.js";
import Register from "./components/Home/Login/Register/Register.js";
import AuthProvider from "./contexts/AuthProvider/AuthProvider.js";
import Home from "./components/Home/Home/Home.js";

import AddProduct from "./components/Deshboard/AddProduct/AddProduct.js";
import Dashboard from "./components/Deshboard/Dashboard/Dashboard.js";
import DashboardHome from "./components/Deshboard/DashboardHome/DashboardHome.js";
import MakeAdmin from "./components/Deshboard/MakeAdmin/MakeAdmin.js";
import ManageAllOrders from "./components/Deshboard/ManageAllOrders/ManageAllOrders.js";
import ManageProducts from "./components/Deshboard/ManageProducts/ManageProducts.js";
import MyOrders from "./components/Deshboard/MyOrders/MyOrders.js";
// import Pay from "./components/Deshboard/Pay/Pay.js";
import Payment from "./components/Deshboard/Payment/Payment.js";
import UserReview from "./components/Deshboard/UserReview/UserReview.js";
import AboutUs from "./components/AboutUs/AboutUs/AboutUs.js";
import NotFound from "./components/NotFound/NotFound"
import ContactUs from './components/ContactUs/ContactUs/ContactUs';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import PrivetRoute from './components/Home/Login/PrivetRoute/PrivetRoute';
import AdminRoute from './components/Home/Login/AdminRoute/AdminRoute';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={<Home /> } />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/order/:_id" element={<Order />} />
          <Route path="/addCart/:_id" element={<PrivetRoute><Cart /></PrivetRoute>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivetRoute> <Dashboard></Dashboard></PrivetRoute> }>
          <Route exact path="/dashboard" element={<DashboardHome />} />
          <Route path={`/dashboard/myOrder`} element={<MyOrders />} />
          <Route path={`/dashboard/addReview`} element={<UserReview />} />
          <Route path={`/dashboard/addProduct`} element={<AdminRoute><AddProduct /></AdminRoute>} />
          <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />
          <Route path="/dashboard/manageAllOrders" element={<AdminRoute><ManageAllOrders /></AdminRoute>} />
          <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts /></AdminRoute>} />
          <Route path={`/dashboard/payment/:paymentId`} element={<Payment />} />
          {/* <Route path={`/dashboard/pay`} element={<Pay />} /> */}
        </Route>
        <Route path="*" element={  <NotFound /> } />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
