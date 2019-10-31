import React, { useState } from 'react';
import './App.css';
import AppBar from './components/AppBar';
import CardGrid from './components/CardGrid';
import { CARD_SET_NAMES } from './components/CardConstants';

function App() {
  const CARD_SET_NAMES_MAP = Object.values(CARD_SET_NAMES);
  const [currentCardSet, setCurrentCardSet] = useState(CARD_SET_NAMES_MAP[0]);

  return (
    <div className="wrapper">
      <AppBar currentCardSet={currentCardSet} setCurrentCardSet={setCurrentCardSet} />
      <CardGrid currentCardSet={currentCardSet} setCurrentCardSet={setCurrentCardSet} />
    </div>
  );
}

export default App;
