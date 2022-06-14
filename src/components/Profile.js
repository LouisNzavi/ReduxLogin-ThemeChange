import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: themeColor }}>
      <button>
        <h1>Profile Page</h1>
        <p>Name: {user.name}</p>
        <p>Role: {user.role}</p>
        <p>Email: {user.email} </p>
      </button>
    </div>
  );
}

export default Profile;
