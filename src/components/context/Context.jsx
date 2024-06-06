import React, { createContext, useContext, useState } from 'react';

// Kontekst yaratiladi
const BadgeContext = createContext();

// Kontekstni ishlatish uchun hook
export const useBadgeContext = () => useContext(BadgeContext);

// Kontekstni taqdim etuvchi komponent
export const BadgeProvider = ({ children }) => {
  // Statelar yaratiladi
  const [badgeCount, setBadgeCount] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState({});

  // Badge raqamini oshiruvchi funksiya
  const handleIncrementBadge = (cardId) => {
    if (!clickedCardIds[cardId]) {
      setBadgeCount((prevCount) => prevCount + 1);
      setClickedCardIds((prevIds) => ({ ...prevIds, [cardId]: true }));
    }
  };

  // Badge raqamini kamaytiruvchi funksiya
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

  // BadgeContext.Provider orqali komponentlarga ma'lumotlarni taqdim etish
  return (
    <BadgeContext.Provider value={{ badgeCount, handleIncrementBadge, handleDecrementBadge }}>
      {children}
    </BadgeContext.Provider>
  );
};
