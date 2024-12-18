import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "./utlis";

const BookingForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [selectedTime, setSelectedTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  const getIsFormValid = () => {
    return (
      firstName && lastName && date && selectedTime && validateEmail(email)
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setSelectedTime(
      props.availableTimes.map((times) => <option>{times}</option>)
    );
  };

  return (
    <div className="bookings-container">
      <form
        // className="form-container"
        onSubmit={handleSubmit}
        aria-label="On Submit"
      >
        <fieldset>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label htmlFor="lastName">
              Last name <sup>*</sup>
            </label>
            <input
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label htmlFor="res-date">
              Choose date <sup>*</sup>
            </label>
            <input
              id="res-date"
              value={date}
              type="date"
              onChange={handleDateChange}
              required={true}
            />
          </div>
          <div className="Field">
            <label htmlFor="res-time">
              Choose time <sup>*</sup>
            </label>

            <select id="res-time">{selectedTime}</select>
          </div>
          <div className="Field">
            <label htmlFor="guests">
              Number of guests <sup>*</sup>
            </label>
            <input
              id="guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="1"
              min="1"
              max="10"
              required={true}
            />
          </div>
          <div className="Field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Other</option>
              required={true}
            </select>
          </div>
          <Link className="booking-button" to="/confirmation">
            <button
              aria-label="On Click"
              type="submit"
              disabled={!getIsFormValid()}
            >
              Make Your Reservation
            </button>
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
