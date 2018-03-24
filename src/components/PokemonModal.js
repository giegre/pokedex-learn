import React from 'react';
import { Modal, Button } from 'react-bootstrap/lib/';
import PokemonInfo from './PokemonInfo';

const PokemonModal = ({closeModal, showModal, pokemon}) => {
  return(
    <div className="modal-container">
      <Modal
        show={showModal}
        onHide={closeModal} >
        <Modal.Body>
          { pokemon !== null ?
            <PokemonInfo pokemon={pokemon} />
            : null
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PokemonModal;
