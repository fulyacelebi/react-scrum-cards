import React from 'react';

export default function Card(props) {
  return (
    <button
      className="bg-white shadow-md rounded-lg transition hover:shadow-lg font-rubik text-5xl font-medium"
      onClick={() => props.onSelect(props.value)}
    >
      {props.value}
    </button>
  );
}
