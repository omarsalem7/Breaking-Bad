import React from "react";

const charchter = ({ charchter }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={charchter.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{charchter.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {charchter.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {charchter.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {charchter.birthday}
            </li>
            <li>
              <strong>Status:</strong> {charchter.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default charchter;
