import React from 'react';
const Tostadita = ({ t }) => {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } bg-black flex`}
      style={{
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        padding: '3px 3px',
        borderRadius: '5px',
        backgroundColor: 'black',
      }}
    >
      <img
        style={{ width: '180px', borderRadius: '4px' }}
        className="h-4 w-4 rounded-full"
        src="https://w7.pngwing.com/pngs/21/441/png-transparent-trash-can-trash-garbage-rubbish-container-can-junk-basket-refuse-disposal-thumbnail.png"
        alt=""
      />
    </div>
  );
};

export default Tostadita;