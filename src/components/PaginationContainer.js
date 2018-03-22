import React from 'react';
import { Pagination, Col } from 'react-bootstrap/lib';

const PaginationContainer = ({totalPages, btnSize, activePage, onSelect}) => {

  let active = activePage;
  let items = [];
  for(let pageNumber = 1; pageNumber <= totalPages; pageNumber++){
    items.push(
      <Pagination.Item
        key={pageNumber}
        data-number={pageNumber}
        active={pageNumber === active}
        onClick={onSelect}
      >
      {pageNumber}
      </Pagination.Item>
    );
  }

  return (
    <Col sm={12} >
      {totalPages > 1 ?
        <Pagination bsSize="medium">
          {items}
        </Pagination>
      : null }
    </Col>
  )
}

export default PaginationContainer;
