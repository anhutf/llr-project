import Meals from "../sections/homePages/Meals";

export default function ConfirmedBooking() {
  return (
    <>
      <h1 className="confirm">Your Reservation is Confirmed!</h1>
      <p className="extra-text">Order extra meals</p>
      <Meals />
    </>
  );
}
