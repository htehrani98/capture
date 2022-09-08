import React from "react";

import * as Styles from "./styles";

export const ServiceData = ({ icon, subject, explain }) => {
  return (
    <Styles.Card>
      <div className="icon">
        <img src={icon} alt="icon" />
        <h3>{subject}</h3>
      </div>
      <p>{explain}</p>
    </Styles.Card>
  );
};
