import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Review, Browse, Request, Login } from "./pages";
import { SnackBar, BackgroundStar } from "./components";
// import { useSelector, useDispatch } from "react-redux";
// import { set } from "./app/bookNameSlice";

const App = () => {
  const [notify, setNotify] = useState({});
  const [display, setDisplay] = useState(false);
  // const bookName = useSelector((state) => state.bookName.value);
  // const dispatch = useDispatch();

  const notifySnack = (message, type) => {
    setNotify({
      message,
      type,
    });
    setDisplay(true);
  };

  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        {/* <BackgroundStar type="white" styles={{ top: "100%", left: "30%" }} />
        <BackgroundStar type="white" styles={{ top: "40%", left: "80%" }} />
        <BackgroundStar type="dark" styles={{ top: "200%", left: "50%" }} />
        <BackgroundStar type="dark" styles={{ top: "20%", left: "20%" }} /> */}

        <Routes>
          <Route path="/" exact element={<Home subscribe={notifySnack} />} />
          <Route path={`/reviews/books`} element={<Review />} />
          <Route path={`/reviews`} element={<Browse />} />
          <Route path={`/request`} element={<Request />} />
          <Route path="/admin" element={<Login />} />
          //README.md
        </Routes>
        {display && <SnackBar data={notify} />}
      </div>
    </BrowserRouter>
  );
};

export default App;
