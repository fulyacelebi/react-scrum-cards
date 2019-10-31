import React from 'react';
export default function Backdrop(props) {
  const styles = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(5px)',
  };

  const handleBlurAreaClick = () => {
    console.log('click');
    props.setShowBlurArea(false);
  };

  return (
    <div class="w-screen h-screen absolute overflow-hidden z-50 inset-0" style={styles} onClick={handleBlurAreaClick}>
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
