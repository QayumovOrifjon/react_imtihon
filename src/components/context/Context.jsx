import React, { createContext, useContext, useState } from "react";

const BadgeContext = createContext();

export const useBadgeContext = () => useContext(BadgeContext);

export const BadgeProvider = ({ children }) => {
  const [badgeCount, setBadgeCount] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState({});

  const handleIncrementBadge = (cardId) => {
    if (!clickedCardIds[cardId]) {
      setBadgeCount((prevCount) => prevCount + 1);
      setClickedCardIds((prevIds) => ({ ...prevIds, [cardId]: true }));
    }
  };
  const handleDecrementBadge = (cardId) => {
    if (clickedCardIds[cardId]) {
      setBadgeCount((prevCount) => prevCount - 1);
      setClickedCardIds((prevIds) => {
        const newIds = { ...prevIds };
        delete newIds[cardId];
        return newIds;
      });
    }
  };

  return (
    <BadgeContext.Provider
      value={{ badgeCount, handleIncrementBadge, handleDecrementBadge }}
    >
      {children}
    </BadgeContext.Provider>
  );
};
