import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import { useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "./../bookingAPI";

export default function Main() {
  const navigate = useNavigate();

  function updateTimes(date) {
    return fetchAPI(new Date(date));
  }
  const initializeTimes = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  function submitForm(e) {
    e.preventDefault();
    const data = submitAPI(e.target.value);
    if (data) navigate("/confirmed");
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
}
