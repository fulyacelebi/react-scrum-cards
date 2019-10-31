import React, { useState } from 'react';
import Settings from './Settings';
import './AppBar.css';
export default function AppBar(props) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showBlurArea, setShowBlurArea] = useState(true);

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
    setShowBlurArea(true);
  };

  return (
    <div>
      <div class="flex items-center h-16 min-h-64px px-8 py-4 bg-white border-b border-solid border-gray-300">
        <div class="w-4 text-3xl" />
        <div class="flex-1 text-center text-2xl font-rubik">Scrum Poker</div>
        <button class="w-4 text-3xl" onClick={handleSettingsOpen}>
          ⚙️
        </button>
      </div>
      {settingsOpen === true && (
        <Settings
          currentCardSet={props.currentCardSet}
          setCurrentCardSet={props.setCurrentCardSet}
          showBlurArea={showBlurArea}
          setShowBlurArea={setShowBlurArea}
          onClose={() => setSettingsOpen(false)}
        />
      )}
    </div>
  );
}
