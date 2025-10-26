import React, { useState } from "react";
import { aboutLarge, aboutSmall } from "../../assets/constants/listImage";
import "../../assets/styles/Reservation.css";
import BookingForm from "./BookingForm";
import ReserveForm from "./ReservationForm";

function Reservation() {
  const [isTableAvailable, setIsTableAvailable] = useState(false);
  const [form, setForm] = useState({
    date: null,
    time: "",
    guest: "",
    occasion: "",
    seating: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    specialRequest: "",
  });
  return (
    <div className="reserve-desktop">
      <div className="reserve-wrapper">
        <section className="reserve-header-content">
          <div  className="reserve-header-title">
            <button
              className="back-button"
              onClick={() => setIsTableAvailable(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <h1>Little Lemon</h1>
          </div>

          <p className="city">Chicago</p>
          <div className="reservation-images">
            <div className="img-large">
              <img src={aboutLarge} alt="Dining area" />
            </div>
            <div className="img-small">
              <img src={aboutSmall} alt="Table setup" />
            </div>
          </div>
        </section>
        <section className="reserve-form">
          {isTableAvailable ? (
            <BookingForm formData={form} setFormData={setForm} />
          ) : (
            <ReserveForm
              setReservation={setIsTableAvailable}
              form={form}
              setForm={setForm}
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default Reservation;
