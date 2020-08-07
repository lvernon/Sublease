
import React from 'react';
import { CardDeck, Card, Container, Row, Col} from 'react-bootstrap'
import './PatientCare.css'

import room1 from '../../../assets/room1.jpg'
import room2 from '../../../assets/room3.jpg'
import room3 from '../../../assets/room2.jpg'
import room4 from '../../../assets/room4.jpeg'
import room5 from '../../../assets/room5.jpeg'
import room6 from '../../../assets/room6.jpg'
import room7 from '../../../assets/room7.jpeg'
import room8 from '../../../assets/room8.jpg'
import room11 from '../../../assets/room11.jpg'
import room12 from '../../../assets/room12.jpeg'

import apt1 from '../../../assets/apt1.jpg'
import apt2 from '../../../assets/apt2.jpg'
import apt3 from '../../../assets/apt3.jpg'
import apt4 from '../../../assets/apt4.jpg'
import Apt5 from '../../../assets/Apt5.jpg'


/*
    Carousel slide for the "Patient Care" page
*/
const PatientCare = (props) => {
    return (
        <div id="patient-care-container">
            <h2 id="patient-care-title">Today's Picks for You</h2>
            <Container>
            <CardDeck id="patient-care-carddeck">
                <Row>
            <Card style = {{margin: '20px'}, { marginRight: '80px' } } >
            <div className="thePhoto" style={{backgroundImage: `url(${apt1})`}}/>
                    <Card.Body>
                        <Card.Title>Windsor Hall</Card.Title>
                        <Card.Text>
                            <h3>15 Apartments available</h3>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>
                <Card style = {{margin: '20px'}} >
                    <div className="thePhoto" style={{backgroundImage: `url(${room3})`}}/>
                    <Card.Body>
                        <Card.Text>
                            <h3>3 Bed 2 Bath</h3>
                            <h4>Monthly Rent: $500</h4>
                            <h5>Discount: No application fee</h5>
                            
                            {/* <p>
                                From the most complex brain and spinal disorders requiring the most 
                                challenging interventions to more common conditions and procedures, our 
                                expert team of pediatric neurosurgeons and neurosurgery nurse practitioners 
                                offers the complete spectrum of multidisciplinary care.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>


                <Card style = {{margin: '20px'}} >
                    <div className="thePhoto" style={{backgroundImage: `url(${room2})`}}/>
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                        <h3>1 Bed 1 Bath</h3>
                        <h4>Monthly Rent: $550</h4>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>
                        </Row>
                        <Row>
                <Card style = {{margin: '20px'}, { marginRight: '50px' } } >
                <div className="thePhoto" style={{backgroundImage: `url(${apt2})`}}/>
                    <Card.Body>
                        <Card.Title>The Landings</Card.Title>
                        <Card.Text>
                            <h3>10 Apartments available</h3>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>
                <Card style = {{margin: '20px'}} >
                <div className="thePhoto" style={{backgroundImage: `url(${room5})`}}/>
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                            <h3>2 Bed 2 Bath</h3>
                            <h4>Monthly Rent: $450</h4>
                            <h5>Discount: Prorated security deposit</h5>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>
                <Card style = {{margin: '20px'}} >
                <div className="thePhoto" style={{backgroundImage: `url(${room6})`}}/>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <h3>3 Bed 2 Bath</h3>
                        <h4>Monthly Rent: $500</h4>
                        <h5>Discount: No pet fee</h5>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>

                </Row>
                <Row>
                <Card style = {{margin: '20px'}, { marginRight: '80px' } } >
                <div className="thePhoto" style={{backgroundImage: `url(${apt3})`}}/>
                    <Card.Body>
                        <Card.Title>Integra Twenty Four</Card.Title>
                        <Card.Text>
                            <h3>0 Apartments available</h3>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>

                <Card style = {{margin: '20px'}} >
                <div className="thePhoto" style={{backgroundImage: `url(${room8})`}}/>
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                        <h3>4 Bed 2 Bath</h3>
                        <h4>Monthly Rent: $480</h4>
                        <h5>Discount: No pet fee</h5>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>

                <Card style = {{margin: '20px'}} >
                <div className="thePhoto" style={{backgroundImage: `url(${room11})`}}/>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <h3>2 Bed 2 Bath</h3>
                        <h4>Monthly Rent: $500</h4>
                        <h5>Discount: First month free</h5>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>

                </Row>
                <Row>
                <Card style = {{margin: '20px'}, { marginRight: '80px' } } >
                <div className="thePhoto" style={{backgroundImage: `url(${apt4})`}}/>
                    <Card.Body>
                        <Card.Title>Oxford Manor</Card.Title>
                        <Card.Text>
                            <h3>6 Apartments available</h3>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>

                <Card style = {{margin: '20px'}} >
                <div className="thePhoto" style={{backgroundImage: `url(${room12})`}}/>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <h3>1 Bed 1 Bath</h3>
                        <h4>Monthly Rent: $450</h4>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>
                <Card style = {{margin: '10px'}} >
                <div className="thePhoto" style={{backgroundImage: `url(${room11})`}}/>
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                        <h3>4 Bed 3 Bath</h3>
                        <h4>Monthly Rent: $500</h4>
                        <h5>Discount: No application fee</h5>
                            {/* <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <a href="https://neurosurgery.ufl.edu/patient-care/diseases-conditions/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">Look-up an Adult Disease or Condition </span>
                        </a> */}
                    </Card.Footer>
                </Card>

                </Row>
            </CardDeck>
            </Container>
        </div>
    );
}

export default PatientCare
