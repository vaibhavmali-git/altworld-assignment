import React from "react";
import "./styles.css";
import data from "../../data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CandidateProfile({ selectedUser }) {
  const getScoreColor = (score) => {
    return score <= 6 ? "#edb639" : "#46c36b";
  };

  return (
    <div className="candidate-profile">
      <div className="candidate-stats">
        <div className="profile">
          <div className="profile-image">
            <img src={selectedUser.avatar} alt="profile" />
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>
              {selectedUser.Name}
            </p>
            <p>{selectedUser.email}</p>
            <div style={{ alignSelf: "flex-end" }}>
              <p
                style={{
                  color: getScoreColor(selectedUser.score),
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                {selectedUser.score}%
              </p>
            </div>
          </div>
        </div>
        <div className="candidate-rating">
          <p style={{ display: "flex", gap: "20px" }}>
            <span style={{ display: "inline", fontSize: "11px" }}>
              Behavioural
            </span>
            <span
              className="progress"
              style={{
                width: `${(selectedUser.behavioral / 10) * 100}%`,
                backgroundColor: getScoreColor(selectedUser.behavioral),
              }}
            ></span>
            <div style={{ color: getScoreColor(selectedUser.score) }}>
              {selectedUser.behavioral}/10
            </div>
          </p>
          <p style={{ display: "flex", gap: "20px" }}>
            <span style={{ display: "inline", fontSize: "11px" }}>
              Communication
            </span>
            <span
              className="progress"
              style={{
                width: `${(selectedUser.communication / 10) * 100}%`,
                backgroundColor: getScoreColor(selectedUser.communication),
              }}
            ></span>
            <div style={{ color: getScoreColor(selectedUser.score) }}>
              {selectedUser.communication}/10
            </div>
          </p>
          <p style={{ display: "flex", gap: "20px" }}>
            <span style={{ display: "inline", fontSize: "11px" }}>
              Situation Handling
            </span>
            <span
              className="progress"
              style={{
                width: `${(selectedUser.situation_handling / 10) * 100}%`,
                backgroundColor: getScoreColor(selectedUser.situation_handling),
              }}
            ></span>
            <div style={{ color: getScoreColor(selectedUser.score) }}>
              {selectedUser.situation_handling}/10
            </div>
          </p>
        </div>
        <div className="cadidate-info">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            consectetur ullam vitae voluptate quo rerum odio porro.
          </p>
          <h3>Experience</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            soluta, inventore cum accusantium at autem itaque fugit nobis magni
            consequatur? Culpa magni amet itaque a..
          </p>
          <h3>Hobbies</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            pariatur similique facilis rerum error aut quibusdam cum dicta
            possimus quam.
          </p>
          <h3>Introduction</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reiciendis ullam atque rem quas est!
          </p>
          <button className="profile-button">Shortlist</button>
        </div>
      </div>
      <div className="candidate-assignments">
        <div className="image">
          <img src={selectedUser.avatar} alt="profile" />
        </div>
        <div className="carousel">
          <p>Questions</p>
          <Carousel>
            <div>
              <p>
                Q1. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q2. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q3. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q4. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q5. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q6. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q7. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q8. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q9. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q10. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
            <div>
              <p>
                Q11. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quos, cumque.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
