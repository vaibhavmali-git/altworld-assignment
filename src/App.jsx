import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import AssignmentCard from "./components/AssignmentCard";
import CandidateProfile from "./components/CandidateProfile";
import data from "./data.json";

function App() {
  const [selectedUser, setSelectedUser] = useState(data.users[0]);

  return (
    <>
      <Navbar />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <div style={{ display: "flex", gap: "30px" }}>
          <AssignmentCard setSelectedUser={setSelectedUser} />
          <CandidateProfile selectedUser={selectedUser} />
        </div>
      </div>
    </>
  );
}

export default App;
