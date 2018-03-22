import React from 'react';
import { Modal, Button } from 'react-bootstrap/lib/';

const PokemonModal = ({openModal, closeModal, showModal, pokemon}) => {
  return(
    <div className="modal-container">
      <Button
         bsStyle="primary"
         bsSize="large"
         onClick={openModal}
       >
         Launch contained modal
       </Button>


      <Modal
        show={showModal}
        onHide={closeModal} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Contained Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
          ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PokemonModal;
