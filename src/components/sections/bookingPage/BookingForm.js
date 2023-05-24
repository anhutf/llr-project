import { useState } from "react";

export default function BookingForm({
  availableTimes,
  updateTimes,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(
    availableTimes.map((time) => <option key={time}>{time}</option>)
  );
  const [guest, setGuest] = useState(1);
  const [occasion, setOcasion] = useState("Birthday");

  function handleDateChange(e) {
    setDate(e.target.value);

    let date = e.target.value;
    updateTimes(date);

    setTime(availableTimes.map((time) => <option key={time}>{time}</option>));
  }
  return (
    <form className="form" onSubmit={submitForm}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      ></input>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">{time}</select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guest}
        onChange={(e) => setGuest(e.target.value)}
      ></input>
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOcasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your Reservation"></input>
    </form>
  );
}
