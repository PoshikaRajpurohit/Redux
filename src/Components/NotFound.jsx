import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="notfound-container d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-4 fw-bold text-danger">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
