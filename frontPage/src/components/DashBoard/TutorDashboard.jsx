import React, { useState } from "react"; // Import your CSS file here

const TutorDashboard = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    subject: "Math",
    availability: "Full-Time",
    hourlyRate: "$30/hr",
    unreadMessages: 2,
  });

  const handleEditProfile = () => {
    // You can add logic to edit the profile or navigate to a profile editing page.
    console.log("Editing profile...");
  };

  const handleEditClasses = () => {
    // Add logic to manage classes or navigate to a class management page
    console.log("Editing classes...");
  };

  const handleViewMessages = () => {
    // Logic to view messages or navigate to the messages page
    console.log("Viewing messages...");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Learnify</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">My Profile</a>
          </li>
          <li>
            <a href="#">Manage Classes</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>

      {/* Tutor Dashboard */}
      <div className="dashboard">
        <div className="welcome">
          <h2>Welcome back, {profile.name}!</h2>
        </div>

        {/* Profile Section */}
        <div className="profile-info">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="https://via.placeholder.com/100" alt="Tutor Photo" />
            <div>
              <h3>{profile.name}</h3>
              <p>
                <strong>Subject:</strong> {profile.subject}
              </p>
              <p>
                <strong>Availability:</strong> {profile.availability}
              </p>
              <p>
                <strong>Price:</strong> {profile.hourlyRate}
              </p>
              <button onClick={handleEditProfile}>Edit Profile</button>
            </div>
          </div>
        </div>

        {/* Manage Classes Section */}
        <div className="section">
          <h4>Manage Classes</h4>
          <p>
            <strong>Subjects:</strong> {profile.subject}
          </p>
          <p>
            <strong>Availability:</strong> Monday - Friday, 9 AM - 5 PM
          </p>
          <p>
            <strong>Set Price:</strong> {profile.hourlyRate}
          </p>
          <button onClick={handleEditClasses}>Edit Classes</button>
        </div>

        {/* Messages Section */}
        <div className="section">
          <h4>Messages</h4>
          <p>You have {profile.unreadMessages} unread messages.</p>
          <button onClick={handleViewMessages}>View Messages</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 Learnify. All rights reserved.</p>
      </div>
    </div>
  );
};

export default TutorDashboard;
