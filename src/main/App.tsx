import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Home from "../pages/Home";
import MovieProvider from "../contexts/MovieProvider";

// const SearchResults = React.lazy(() => import("../pages/SearchResults"));
import SearchResults from "../pages/SearchResults";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
