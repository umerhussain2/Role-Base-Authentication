import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Public Compo/Checkout";
import Error from "./components/Error";
import Header from "./Header/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";

import { AuthProvider } from "./context/Context";
import { ProtectedRoute } from "./context/auth/ProtectedRoute";

import "./App.css";
import Dashboard from "./components/Admin Compo/Dashboard";
import OrdersList from "./components/Admin Compo/OrdersList";
import OrdersDetail from "./components/Admin Compo/OrdersDetail";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="productdetails"
              element={
                <ProtectedRoute>
                  <ProductDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="orderslist"
              element={
                <ProtectedRoute>
                  <OrdersList />
                </ProtectedRoute>
              }
            />
            <Route
              path="ordersdetail"
              element={
                <ProtectedRoute>
                  <OrdersDetail />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
