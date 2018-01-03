//all elements convert to React.createElement() so it IS necessary for all components
import React from 'react';

const Option = (props) => {
  return (
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
}

//keep component name in DOM 
export default Option;
