import React, { useState } from "react";

const ExamRegistrationForm = () => {
  const [formData, setFormData] = useState({
    prnNumber: "",
    studentName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.prnNumber || !formData.studentName) {
      alert("Please fill out all fields!");
      return;
    }
    alert(`Form submitted:\nPRN Number: ${formData.prnNumber}\nName: ${formData.studentName}`);
    setFormData({ prnNumber: "", studentName: "" });
  };

  return (
    <div className="form-container">
      <h2>Exam Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="prnNumber">PRN Number:</label>
          <input
            type="text"
            id="prnNumber"
            name="prnNumber"
            value={formData.prnNumber}
            onChange={handleChange}
            placeholder="Enter your PRN number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentName">Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default ExamRegistrationForm;
