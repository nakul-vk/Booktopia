import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Review, Browse, Request, Login } from "./pages";
import { SnackBar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path={`/books/reviews/:id`} element={<Review />} />
          <Route path={`/search`} element={<Browse />} />
          <Route path={`/request`} element={<Request />} />
          {/* <Route path="/admin" element={<Login />} /> */}
        </Routes>
        <SnackBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
