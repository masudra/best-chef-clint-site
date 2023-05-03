import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Recepis.css'

const Recepis = ({reci}) => {
    const {chef_name,chef_photo,recipe_amaunt,experience,like,}=reci

    return (
        <div>
            <Card className='mt-5 ms-5 p-2' style={{ width: '22rem' }}>
      <Card.Img className='card-img' variant="top" src={chef_photo} />
      <Card.Body>
        <Card.Title>Name:{chef_name}</Card.Title>
        <Card.Text>Experience: {experience}</Card.Text>
        <Card.Text>Number Of rec: {recipe_amaunt}</Card.Text>
        <Card.Text>Like: {like}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
        </div>
    );
};

export default Recepis;