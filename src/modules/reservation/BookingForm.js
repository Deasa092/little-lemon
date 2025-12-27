import React, { useState } from "react";
import "../../assets/styles/BookingForm.css";
import SuccessPopup from "../../components/PopupSuccess";
/* eslint-disable react/prop-types */

const submitAPI = function (formData) {
  console.log("✅ Data dikirim ke API simulasi:", formData);
  return true;
};

function BookingForm({ formData, setFormData }) {
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const success = submitAPI(formData);
      if (success) {
        setShowSuccess(true);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="booking-form">
        <h2 className="form-title">Reserve a Table</h2>

        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">* First name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error-text">{errors.firstName}</span>
          )}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">* Last name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="error-text">{errors.lastName}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">* Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">* Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        {/* Special Request */}
        <div className="form-group">
          <label htmlFor="specialRequest">Add a special request (optional)</label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            placeholder="Any special notes for your booking..."
          ></textarea>
        </div>

        <button type="submit" className="btn-primary">
          Book a Table
        </button>
      </form>

      <SuccessPopup
        show={showSuccess}
        message="Your booking was submitted successfully!"
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}

export default BookingForm;
