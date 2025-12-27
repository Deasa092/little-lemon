import React, { useState, useEffect } from "react";
import "../../assets/styles/Reservation.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectField from "../../components/SelectField";
import RadioGroup from "../../components/RadioGroup";
import SuccessPopup from "../../components/PopupSuccess";

/* ====== Fungsi simulasi API dari instruksi kamu ====== */
const seededRandom = function (seed) {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }
  return result;
};

/* ====== Komponen utama ====== */
export default function ReserveForm({ form, setForm, setReservation }) {
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);

  // Ambil jam tersedia saat tanggal dipilih
  useEffect(() => {
    if (form.date) {
      const times = fetchAPI(form.date);
      setAvailableTimes(times);
    }
  }, [form.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateChange = (date) => {
    setForm((prev) => ({ ...prev, date, time: "" })); // reset time saat ganti tanggal
    setErrors((prev) => ({ ...prev, date: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.date) newErrors.date = "Please select a date.";
    if (!form.time) newErrors.time = "Please select a time.";
    if (!form.guest) newErrors.diners = "Please select number of guests.";
    if (!form.occasion) newErrors.occasion = "Please select an occasion.";
    if (!form.seating) newErrors.seating = "Please select a seating option.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowSuccess(true);
    } else {
      console.log("❌ Form incomplete:", form);
    }
  };

  return (
    <div>
      <form className="reserve-form-inner" onSubmit={handleSubmit}>
        <h2 className="subtitle">Reserve a Table</h2>

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
              options={
                availableTimes.length
                  ? availableTimes
                  : ["-- Select date first --"]
              }
              onChange={handleChange}
            />
            {errors.time && <p className="error-text">{errors.time}</p>}
          </div>
        </div>

        <SelectField
          label="Number of Guests"
          name="guest"
          value={form.guest}
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
          Let's Go
        </button>
      </form>

      {showSuccess && (
        <SuccessPopup
          show={showSuccess}
          message="A table is available. Would you like to continue with your reservation?"
          onConfirm={() => {
            setReservation(true);
            setShowSuccess(false);
          }}
          onClose={() => setShowSuccess(false)}
          close="Cancel"
        />
      )}
    </div>
  );
}
