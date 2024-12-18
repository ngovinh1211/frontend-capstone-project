import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./fetchAPI";

const BookingPage = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <div className="booking-page">
      <h1>Welcome to Little Lemon</h1>
      <p>Please fill out the form below to reserve your table.</p>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />

      <p>
        Thank you for choosing Little Lemon! <br />
        We look forward to serving you.
      </p>
    </div>
  );
};

export default BookingPage;
