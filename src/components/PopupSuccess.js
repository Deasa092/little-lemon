import React, { useEffect } from "react";
import "./styles/PopupSuccess.css";
/* eslint-disable react/prop-types */

export default function SuccessPopup({
  title = "Success!",
  message = "Your booking was successful.",
  show = false,
  onClose,
  onConfirm,
  autoClose = false,
  confirmText = "Yes",
  closeText = "Close",
}) {
  useEffect(() => {
    if (autoClose && show) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [autoClose, show, onClose]);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <div className="popup-icon">✅</div>
          <h3 className="popup-title">{title}</h3>
        </div>

        <p className="popup-message">{message}</p>

        <div className="popup-buttons">
          <button className="btn btn-secondary" onClick={onClose}>
            {closeText}
          </button>
          {onConfirm && (
            <button className="btn btn-primary" onClick={onConfirm}>
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
