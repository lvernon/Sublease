import React from 'react';
import { CardDeck, Card } from 'react-bootstrap'
import './PatientCare.css'

/*
    Carousel slide for the "Patient Care" page
*/
const PatientCare = (props) => {
    return (
        <div id="patient-care-container">
            <h2 id="patient-care-title">Today's Picks for You</h2>
            <CardDeck id="patient-care-carddeck">
            <Card style = {{margin: '20px'}, { marginRight: '80px' } } >
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/Apt5.jpg" />
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
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/room1.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <h3>3 Bed 2 Bath</h3>
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
                    <Card.Img className= "thePhoto" variant="top" src="/CarouselHome/PatientCare/room2.jpg" />
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                        <h3>1 Bed 1 Bath</h3>
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

                <Card style = {{margin: '20px'}, { marginRight: '50px' } } >
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/apt3.jpg" />
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
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/room3.jpg" />
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                            <h3>2 Bed 2 Bath</h3>
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
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/room6.jpg" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <h3>3 Bed 2 Bath</h3>
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


                <Card style = {{margin: '20px'}, { marginRight: '80px' } } >
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/apt2.jpg" />
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
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/room5.jpeg" />
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                        <h3>4 Bed 2 Bath</h3>
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
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/room4.jpeg" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <h3>2 Bed 2 Bath</h3>
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


                <Card style = {{margin: '20px'}, { marginRight: '80px' } } >
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/apt4.jpg" />
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
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/room7.jpeg" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <h3>1 Bed 1 Bath</h3>
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
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/room8.jpg" />
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                        <h3>4 Bed 3 Bath</h3>
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

                
            </CardDeck>
        </div>
    );
}

export default PatientCare
