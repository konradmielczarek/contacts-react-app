import React from 'react';
import { Container } from 'reactstrap';

const BasicLayout = ({ children }) => (
  <Container className="py-5">
    {children}
  </Container>
);

export default BasicLayout;
