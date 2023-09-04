import  { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface childrenProps {
  children: ReactNode;
}

export default function FormContainer({ children }: childrenProps) {
   
  return (
    <Container>
      <Row className='justify-content-md-center mt-5'>
        <Col xs={12} md={6} className='card p-5'>
          { children }
        </Col>
      </Row>
    </Container>
  )
}
