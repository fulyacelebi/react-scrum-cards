import React, { useState } from 'react';

import Card from './Card';
import SelectedCard from './SelectedCard';
import Backdrop from './Backdrop';
import { cardSets } from './CardConstants';
import './CardGrid.css';

export default function CardGrid(props) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const selectCard = (cardId) => {
    if (selectedCard !== cardId) {
      setSelectedCard(cardId);
    } else {
      setShowCard(true);
    }
  };

  const resetSelection = () => {
    setSelectedCard(null);
    setShowCard(false);
  };

  const toggleShowCard = () => {
    if (showCard) {
      resetSelection();
    } else {
      setShowCard(true);
    }
  };

  return (
    <div class="h-full">
      <div class="grid grid-gap-4 grid-col-3 container w-full mx-auto p-4 flex-1 h-full">
        {cardSets[props.currentCardSet].map((value, index) => {
          return <Card value={value} id={index} onSelect={selectCard}></Card>;
        })}
      </div>
      {selectedCard !== null && (
        <Backdrop onClose={resetSelection}>
          <div class="grid absolute w-full h-full p-4 perspective">
            <SelectedCard number={selectedCard} onClose={toggleShowCard} show={showCard}></SelectedCard>
          </div>
        </Backdrop>
      )}
    </div>
  );
}
