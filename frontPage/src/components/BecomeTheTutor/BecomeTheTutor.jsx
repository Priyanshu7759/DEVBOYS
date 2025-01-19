import React, { useState } from "react"; // Import your CSS file here
import { Link } from "react-router-dom";
const BecomeTheTutor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subjects: "",
    experience: "",
    availability: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send data to API)
    console.log(formData);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Learnify</div>
        <ul className="nav-links">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link href="/SighUp" className="login">
              Login/Signup
            </Link>
          </li>
        </ul>
      </nav>

      {/* Tutor Application Form */}
      <div className="tutor-container">
        <h1>Become a Tutor</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="subjects">Subjects You Can Teach</label>
          <input
            type="text"
            id="subjects"
            name="subjects"
            placeholder="e.g., Math, Science, English"
            value={formData.subjects}
            onChange={handleChange}
            required
          />

          <label htmlFor="experience">Teaching Experience</label>
          <textarea
            id="experience"
            name="experience"
            placeholder="Describe your teaching experience"
            rows="4"
            value={formData.experience}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="availability">Availability</label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select your availability
            </option>
            <option value="part-time">Part-Time</option>
            <option value="full-time">Full-Time</option>
            <option value="weekends">Weekends Only</option>
          </select>

          <button type="submit">
            <Link to="/TutorSignUp">Submit Application</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeTheTutor;
