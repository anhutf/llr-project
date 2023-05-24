import BookingForm from "../sections/bookingPage/BookingForm";

export default function BookingPage(props) {
  return (
    <div className="booking">
      <h1>Reserve the table</h1>
      <BookingForm
        availableTimes={props.availableTimes}
        updateTimes={props.updateTimes}
        submitForm={props.submitForm}
      />
    </div>
  );
}
