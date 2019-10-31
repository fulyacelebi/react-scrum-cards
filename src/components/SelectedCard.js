import React from 'react';
import './SelectedCard.css';
export default function SelectedCard(props) {
  return (
    <button
      class={`bg-white shadow-lg rounded-lg relative font-rubik font-10rem font-medium transform-style-3d transition ${
        props.show ? '' : 'rotate-y-180'
      }`}
      onClick={props.onClose}
    >
      <div class="flex items-center justify-center absolute w-full h-full inset-0 backface-hidden">{props.number}</div>
      <div class="card-background rounded-lg rotate-y-180 absolute w-full h-full inset-0 backface-hidden" />
    </button>
  );
}
