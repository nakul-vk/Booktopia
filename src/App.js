import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Review, Browse, Request, Login } from "./pages";
import { SnackBar, BackgroundStar } from "./components";
import { useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { showMessage } from "./features/snackbar/snackbarSlice";

const App = () => {
  const [notify, setNotify] = useState({});

  const message = useSelector((state) => state.snackbar.value);
  const type = useSelector((state) => state.snackbar.type);
  const dispatch = useDispatch();

  const [scope, animate] = useAnimate();
  const snackbarSequence = [
    [
      ".snackbar",
      { x: [425, -20, -20, 425], opacity: [0, 1, 1, 0] },
      { duration: 2, times: [0, 0.5, 0.9, 1], type: "tween" },
    ],
  ];

  const notifySnack = (message, type) => {
    setNotify({
      message,
      type,
    });
    animate(snackbarSequence);
  };

  useEffect(() => {
    notifySnack(message, type);
  }, [message]);

  return (
    <BrowserRouter>
      <div ref={scope} className="overflow-hidden">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path={`/books/reviews/*`} element={<Review />} />
          <Route path={`/search`} element={<Browse />} />
          <Route path={`/request`} element={<Request />} />
          <Route path="/admin" element={<Login />} />
        </Routes>
        <div className="snackbar fixed right-10 top-10 opacity-0">
          <SnackBar data={notify} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
