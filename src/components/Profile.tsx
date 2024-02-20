import React, { useEffect, useState } from 'react';
import instanceLogin from '../api/expressAPI';

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await instanceLogin.get('/profile');
        console.log(response.data.data.firstName);
        setUser(response.data.data.firstName);
    
      } catch (error) {
        // Handle error or redirect to login
      }
    };

    fetchProfile();
    console.log("HEHE")
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome,{user}!</h2>
      <p>Email: </p>
      {/* Render other user details */}
    </div>
  );
};

export default Profile;
