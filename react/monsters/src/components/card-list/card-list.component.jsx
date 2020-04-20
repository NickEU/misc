import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = ({ monsters }) => {
  return (
    <>
      {monsters.length !== 0 ? (
        <div className="card-list">
          {monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
          ))}
        </div>
      ) : (
        <div className="error-msg">Nothing was found :(</div>
      )}
    </>
  );
};
