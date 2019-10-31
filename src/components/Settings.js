import React, { useState } from 'react';
import { CARD_SET_NAMES } from './CardConstants';
import Backdrop from './Backdrop.js';

export default function Settings(props) {
  const CARD_SET_NAMES_MAP = Object.values(CARD_SET_NAMES);
  const [tempCurrentCardSet, setTempCurrentCardSet] = useState(props.currentCardSet);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.setCurrentCardSet(tempCurrentCardSet);
    props.onClose();
  };

  const onChange = (v) => {
    setTempCurrentCardSet(v);
  };

  return (
    <div>
      {props.showBlurArea && (
        <Backdrop showBlurArea={props.showBlurArea} setShowBlurArea={props.setShowBlurArea} onClick={props.onClose}>
          <div class="w-full absolute px-8 py-4 bottom-0 rounded-lg bg-white shadow-md">
            <div class="text-center font-rubik text-2xl mb-4">Settings</div>

            <form onSubmit={handleFormSubmit}>
              {CARD_SET_NAMES_MAP.map((value, i) => {
                return (
                  <label key={value} class="block px-0 py-1 mx-0 my-1">
                    <input
                      type="radio"
                      value={'CARD_SET_NAMES_MAP'}
                      onChange={() => onChange(value)}
                      checked={tempCurrentCardSet === value}
                    />
                    {value}
                  </label>
                );
              })}
              <button class="w-full mt-4 px-4 py-2 rounded bg-blue-600 text-white" type="submit">
                Save
              </button>
            </form>
          </div>
        </Backdrop>
      )}
    </div>
  );
}
