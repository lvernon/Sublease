import React from 'react';
import './Compose.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function Compose(props) {
    return (
      <div style={{backgroundColor: '#a1a3a5', padding:'20px', margin:'20px'}} >
        <Form >

  <Form.Group controlId="formBasicEmail">
    <Form.Label>
    Rent Discount: 
        <br></br>

    </Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="$"/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>
    Application Fee Discount:

    </Form.Label>    <br></br>

    <Form.Control type="text" placeholder="$"/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>
    Deposit Discount: 

    </Form.Label>    <br></br>

    <Form.Control type="text" placeholder="$"/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>
    Lease Transfer Fee Discount:  

    </Form.Label>    <br></br>

    <Form.Control type="text" placeholder="$"/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>
    Months free:

    </Form.Label>    <br></br>

    <Form.Control type="text" placeholder="$"/>
  </Form.Group>


  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Include Utilities" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        

        {
          props.rightItems
        }
      </div>
    );
}