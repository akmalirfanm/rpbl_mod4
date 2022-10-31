import React, { createContext, useState } from "react";

const initialValue = {
  name: "John",
  age: 25,
};

const profileContext = createContext(initialValue);

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(initialValue);
  return (
    <profileContext.Provider value={{ profile, setProfile }}>
      {children}
    </profileContext.Provider>
  );
};

export { profileContext, ProfileProvider };
