import React, { useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { hideSnackBar } from "../features/snackbar/snackbarSlice";

const SnackBar = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.snackbar);

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideSnackBar());
    }, 2500);
  }, [snackbar.open, dispatch]);

  return (
    <AnimatePresence>
      {snackbar.open && (
        <motion.div
          className="snackbar fixed top-10 -right-96 z-10 font-spline font-bold flex flex-row items-center bg-white p-3 rounded-lg shadow-lg text-xs sm:text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: -400 }}
          exit={{ x: 400 }}
        >
          {snackbar.type === "success" ? (
            <FaCircleCheck className="mr-2 text-green-600" />
          ) : (
            <IoCloseCircle className="mr-2 text-red-600 text-xl" />
          )}
          <h3>{snackbar.message}</h3>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SnackBar;
