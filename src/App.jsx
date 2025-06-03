import React, { Suspense } from "react";
import "/src/assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import FormOrders from "./pages/FormOrders.jsx";
import FormCustomers from "./pages/FormCustomers.jsx";
import NotFound from "./pages/NotFound";
import ErrorPage from "./components/ErrorPage";
import Loading from "./components/Loading.jsx";
import UsersTable from "./pages/User";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Kontak from "./pages/kontak.jsx";
import Anggota from "./pages/cekanggota.jsx";
import Products from "./pages/Products.jsx";
// import ProductDetail from "./pages/ProductDetail";
// Lazy load components
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout.jsx"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout.jsx"));
const Login = React.lazy(() => import("./pages/auth/Login.jsx"));
const Register = React.lazy(() => import("./pages/auth/Register.jsx"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot.jsx"));
const GuestLayout = React.lazy(() => import("./layouts/guestLayout.jsx"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Notes =React.lazy(() => import("./pages/Notes"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Route untuk error handling */}
        <Route path="*" element={<NotFound />} />
        <Route
          path="/error/400"
          element={
            <ErrorPage
              code={400}
              description="The server could not understand the request due to invalid syntax."
              image="/img/400.png"
            />
          }
        />
        <Route
          path="/error/401"
          element={
            <ErrorPage
              code={401}
              description="You are not authorized to view this page."
              image="/path/to/401-image.png"
            />
          }
        />
        <Route
          path="/error/403"
          element={
            <ErrorPage
              code={403}
              description="You do not have permission to access this page."
              image="/path/to/403-image.png"
            />
          }
        />
        <Route
          path="/error/404"
          element={
            <ErrorPage
              code={404}
              description="Page not found."
              image="/path/to/404-image.png"
            />
          }
        />

        
        <Route element={<MainLayout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/formorders" element={<FormOrders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/formcustomers" element={<FormCustomers />} />
          <Route path="/user" element={<UsersTable />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/notes" element={<Notes/>} />
        </Route>

       
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about"element={<About />} />
          <Route path="/kontak"element={<Kontak/>}/>
          <Route path="/cekanggota"element={<Anggota/>}/>
        </Route>

       
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
