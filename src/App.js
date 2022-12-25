import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import SearchWeather from "./pages/SearchWeather";
import Favorite from "./pages/Favorite";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<SearchWeather />} />
          <Route path="search" element={<SearchWeather />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
