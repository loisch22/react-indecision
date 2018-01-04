import React from 'react';

const Option = (props) => (
  <div>
    <ul>
      <li>
        {props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText)
            }
          }>
          Remove
        </button>
      </li>
    </ul>
  </div>
);

export default Option;
