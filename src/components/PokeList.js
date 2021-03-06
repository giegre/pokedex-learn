import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/';

const PokeList = ({ListOfPokemon, openModal}) => {

  let pokemon = ListOfPokemon.map((creature) => {
    return (
      <Col sm={6} md={4} key={creature.name}>
        <ListGroupItem
          className='Pokelist-item'
          onClick={openModal.bind(null, creature)} >
          <h5>{creature.name}</h5>
        </ListGroupItem>
      </Col>
    )
  });

  return (
    <Col sm={8} md={10} smOffset={2} mdOffset={1}>
      <ListGroup>
        {pokemon}
      </ListGroup>
    </Col>
  )

}

export default PokeList;
