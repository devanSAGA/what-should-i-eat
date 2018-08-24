import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        className="big-button"
        disabled={!props.hasOptions}
        onClick={props.handlePick}>
          What should I Eat?
      </button>
    </div>
  );
};

export default Action;
