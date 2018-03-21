import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/';

const PokeList = ({ListOfPokemon}) => {

  let pokemon = ListOfPokemon.map((creature) => {
    return (
      <Col sm={6} md={4} key={creature.name}>
        <ListGroupItem className='Pokelist-item'>{creature.name}</ListGroupItem>
      </Col>
    )
  });

  return (
    <ListGroup>
      {pokemon}
    </ListGroup>
  )

}

export default PokeList;
