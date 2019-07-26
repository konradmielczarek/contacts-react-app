import React from 'react';
import { Button, Col, Row } from 'reactstrap';

const Pagination = ({ getContacts, totalContacts, initialLimit, currentLimit, setCurrentLimit }) => {
  return (
    <Row>
      <Col>
        <div className="text-center">
          <Button
            color="link"
            className="font-italic"
            onClick={() => setCurrentLimit(currentLimit + initialLimit) }
          >
            <small>
              show more...
            </small>
          </Button>
        </div>
      </Col>
    </Row>
  )
};

export default Pagination;
