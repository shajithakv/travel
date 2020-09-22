import React from "react";
import {Form, Col, Button} from 'react-bootstrap'

function ContactForm() {
  return (
    <>
    
      <Form className="text-light"> 
        <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        
          </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridState">
                    <Form.Control as="select" defaultValue="Choose Destination">
              <option>Singapore</option>
              <option>Goa</option>
            </Form.Control>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPrice">
          <Form.Control as="select" defaultValue="Choose Budget">
              <option>$100</option>
              <option>$200</option>
            </Form.Control>
          </Form.Group>

         
          <Form.Group as={Col} controlId="formGridNumber">
          <Form.Control as="select" defaultValue="Members">
              <option>One</option>
              <option>Two</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
