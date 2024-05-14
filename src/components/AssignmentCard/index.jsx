// components/AssignmentCard.js
import React from "react";
import "./styles.css";
import data from "../../data.json";
import { useState } from "react";
import pencile from "../../assets/pencil.png";

const AssignmentCard = () => {
  const [selectedUser, setSelectedUser] = useState(data.users[0]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const getScoreColor = (score) => {
    return score < 62 ? "#edb639" : "#46c36b";
  };

  return (
    <div className="assignment-card">
      <div className="assignment-flex">
        <h2>Sales BDE</h2>
        <span style={{ display: "flex", alignItems: "center" }}>
          Active
          <img src={pencile} alt="status" className="pencil-icon" />
        </span>
      </div>
      <div className="assignment-flex">
        <p>Assignment Link</p>
        <a href="">abc.com</a>
      </div>
      <div className="assignment-flex">
        <p>Assignment Hour</p>
        <span>3 hours</span>
      </div>
      <div className="assignment-flex">
        {" "}
        <p>Assignment Ends At</p>
        <span>11 March 2024</span>
      </div>
      <div className="assignment-table">
        <table>
          <tr>
            <div className="assignment-flex">
              <th>Candidate</th>
              <th>Score</th>
            </div>
          </tr>
          {data.users.map((user) => (
            <tr
              key={user.id}
              onClick={() => handleUserClick(user)}
              className="table-row"
            >
              <td>
                <div className="table-image">
                  <img src={user.avatar} alt="image" />
                  <div>
                    <p>{user.Name}</p>
                    <p>{user.email}</p>
                  </div>
                </div>
              </td>
              <td
                style={{ color: getScoreColor(user.score), fontWeight: "700" }}
              >
                {user.score}%
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AssignmentCard;
