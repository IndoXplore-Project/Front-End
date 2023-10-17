import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Category from "./pages/category/Category";
import Explore from "./pages/explore/Explore";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar isHomePage={false} />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar isHomePage={true} />
          <Home />
          <Footer />
        </div>
      ),
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/category",
          element: <Category />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/explore",
          element: <Explore />,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <Home />
  //         <Footer />
  //       </div>
  //     ),
  //   },
  // ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
