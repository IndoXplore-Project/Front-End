import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Category from "./pages/category/Category";
import Explore from "./pages/explore/Explore";
import Article from "./pages/article/Article";
import DetailArticle from "./pages/detail_article/DetailArticle";
import DetailDestination from "./pages/detail_destination/DetailDestination";

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
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/article",
          element: <Article />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/detail-article",
          element: <DetailArticle />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/detail-destination",
          element: <DetailDestination />,
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
