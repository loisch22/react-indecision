import React from 'react';
import Modal from 'react-modal';

//Modal requires 2 props to work
//onRequestClose - closes modal via esc, clicking outside of modal
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>Okay</button>
  </Modal>
);

export default OptionModal;
