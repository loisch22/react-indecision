import React from 'react';
import Modal from 'react-modal';

//Modal requires 2 props to work
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
  </Modal>
);

//!! defines as true/false instead of 'undefined' 'null'
export default OptionModal;
