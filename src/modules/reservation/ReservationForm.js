import React, { useState } from "react";
import "../../assets/styles/ReservationTable.css";
import { aboutLarge, aboutSmall } from "../../assets/constants/listImage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectField from "../../components/SelectField";
import RadioGroup from "../../components/RadioGroup";

export default function ReserveTable() {
  const [form, setForm] = useState({
    date: null,
    time: "",
    diners: "",
    occasion: "",
    seating: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateChange = (date) => {
    setForm((prev) => ({ ...prev, date }));
    setErrors((prev) => ({ ...prev, date: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.date) newErrors.date = "Please select a date.";
    if (!form.time) newErrors.time = "Please select a time.";
    if (!form.diners) newErrors.diners = "Please select number of guests.";
    if (!form.occasion) newErrors.occasion = "Please select an occasion.";
    if (!form.seating) newErrors.seating = "Please select a seating option.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("✅ Reservation submitted:", form);
      alert("Reservation submitted successfully!");
    } else {
      console.log("❌ Form incomplete:", form);
    }
  };

  return (
    <div className="reserve-desktop">
      <div className="reserve-wrapper">
        {/* LEFT SECTION */}
        <section className="reserve-header-content">
          <h1>Little Lemon</h1>
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

        {/* RIGHT SECTION */}
        <section className="reserve-form">
          <form className="reserve-form-inner" onSubmit={handleSubmit}>
            <h2 className="subtitle">Reserve a Table</h2>

            {/* === DATE & TIME === */}
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="date">Date</label>
                <DatePicker
                  selected={form.date}
                  onChange={handleDateChange}
                  placeholderText="Select date"
                  dateFormat="dd/MM/yyyy"
                  id="date"
                  className="form-control"
                />
                {errors.date && <p className="error-text">{errors.date}</p>}
              </div>

              <div className="form-field">
                <SelectField
                  label="Time"
                  name="time"
                  value={form.time}
                  options={["18:00", "19:00", "20:00"]}
                  onChange={handleChange}
                />
                {errors.time && <p className="error-text">{errors.time}</p>}
              </div>
            </div>

            {/* === OTHER FIELDS === */}
            <SelectField
              label="Number of Guests"
              name="diners"
              value={form.diners}
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
              onChange={handleChange}
            />
            {errors.diners && <p className="error-text">{errors.diners}</p>}

            <SelectField
              label="Occasion"
              name="occasion"
              value={form.occasion}
              options={["Birthday", "Anniversary", "Business", "Casual"]}
              onChange={handleChange}
            />
            {errors.occasion && <p className="error-text">{errors.occasion}</p>}

            <RadioGroup
              legend="Seating Option"
              name="seating"
              options={[
                { label: "Indoor", value: "indoor" },
                { label: "Outdoor", value: "outdoor" },
              ]}
              selected={form.seating}
              onChange={handleChange}
            />
            {errors.seating && <p className="error-text">{errors.seating}</p>}

            <button type="submit" className="btn-primary">
              CHECK{" "}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
