import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Navbar isHomePage={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/articles/details/:id" element={<DetailArticle />} />
          <Route
            path="/destinations/details/:id"
            element={<DetailDestination />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
