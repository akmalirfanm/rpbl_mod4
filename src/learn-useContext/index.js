import React, { useState, useContext } from "react";
import { profileContext } from "./profileContext";
import "./index.css";
const themes = {
  light: {
    id: 1,
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    id: 2,
    foreground: "#ffffff",
    background: "#222222",
  },
};
const ThemeContext = React.createContext(themes.light);
export default function Index() {
  const [theme, setTheme] = useState(themes.dark);
  const { profile, setProfile } = useContext(profileContext);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        className="Main"
        style={{ background: theme.background, color: theme.foreground }}
      >
        <p>Silahkan Masukkan Nama dan Umur</p>
        <input
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
        <input
          value={profile.age}
          onChange={(e) => setProfile({ ...profile, age: e.target.value })}
        />
        <p className="Text">Theme by useContext</p>
        <p>KELOMPOKXX</p>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}
function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="Button"
      style={{ background: theme.background, color: theme.foreground }}
      onClick={changeTheme}
    >
      i am styled by theme context!
    </button>
  );
}
