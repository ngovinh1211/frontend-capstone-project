import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <section className="booking-confirmation">
        <h1 className="booking-confirmed">
          Booking has been <span>confirmed!</span>
        </h1>
        <br />
        <h3>A confirmation message has been sent to your email.</h3>
        <br />
        <h3>Thanks for dining with us!</h3>
        <br />
        <h4>
          Little Lemon Restaurant
          <br />
          123 Bear Street, Chicago
        </h4>
      </section>
      <section className="redirect-buttons">
        <Link className="redirect-button" to="/menu">
          Menu
        </Link>
        <Link className="redirect-button" to="/menu">
          Order
        </Link>
        <Link className="redirect-button" to="/">
          Home
        </Link>
      </section>
    </>
  );
};

export default Confirmation;
