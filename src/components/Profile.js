import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user profile from the backend using the user's token
        const token = localStorage.getItem('token');
        const response = await axios.get('/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); // Update the endpoint based on your API

        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Handle errors or redirect to login if the user is not authenticated
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Username: {profile.username}</p>
      {/* Display other profile details (e.g., age, interests, etc.) */}
      {/* Add buttons or links to edit the profile */}
    </div>
  );
};

export default Profile;

