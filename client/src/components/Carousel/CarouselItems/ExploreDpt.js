import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap'
import './ExploreDpt.css'





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
    Carousel slide for the "Explore Department" page
*/
const ExploreDpt = (props) => {
    return (
        <div id="explore-dpt-container">
            <h2 id="explore-dpt-title">More Options</h2>
            <CardDeck id="explore-dpt-carddeck">
            <Card style = {{margin: '20px'}, { marginRight: '80px' } } >
            <div className="thePhoto" style={{backgroundImage: `url(${Apt5})`}}/>
                    <Card.Body>
                        <Card.Title>Evergreen Uptown</Card.Title>
                        <Card.Text>
                            <h3>10 Apartments available</h3>
                            {/* <p>
                                We are an ACGME-accredited neurosurgery residency program with 3 residents per year.
                            </p>  */}
                            {/* <div className="explore-dpt-button-container">
                                <Button href="https://neurosurgery.ufl.edu/residency/about-our-program/" style={{'float':'left', margin: '0px 7px 0px 0px'}}>LEARN MORE</Button>
                                <Button href="https://neurosurgery.ufl.edu/residency/about-our-program/applicants/" style={{'float':'left', margin: '0px 0px 0px 7px'}}>APPLY</Button>
                            </div> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                <div className="thePhoto" style={{backgroundImage: `url(${room4})`}}/>
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                            <h3>2 Bed 2 Bath</h3>
                            <h4>Monthly Rent: $500</h4>
                            <h5>Discount: No application fee</h5>
                            {/* <p>
                                Faculty of the Department of Neurosurgery collaborate with basic scientists to seek new 
                                cures for neurologic illness through research.
                            </p> */}
                            {/* <div className="explore-dpt-button-container">
                                <Button href="http://com-neurosurgery-a2.sites.medinfo.ufl.edu/research/clinical-trials/" style={{'float':'left', margin: '0px 7px 0px 0px'}}>CLINICAL TRIALS</Button>
                                <Button href="http://com-neurosurgery-a2.sites.medinfo.ufl.edu/research/laboratories/" style={{'float':'left', margin: '0px 0px 0px 7px'}}>LABORATORIES</Button>
                            </div> */}
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card>
                <div className="thePhoto" style={{backgroundImage: `url(${room7})`}}/>
                    <Card.Body>
                        <Card.Title>Featured</Card.Title>
                        <Card.Text>
                            <h3>1 Bed 1 Bath</h3>
                            <h4>Monthly Rent: $650</h4>
                            <h5>Discount: Prorated security deposit</h5>
                            {/* <p>
                                We are an ACGME-accredited neurosurgery residency program with 3 residents per year.
                            </p>  */}
                            {/* <div className="explore-dpt-button-container">
                                <Button href="https://neurosurgery.ufl.edu/residency/about-our-program/" style={{'float':'left', margin: '0px 7px 0px 0px'}}>LEARN MORE</Button>
                                <Button href="https://neurosurgery.ufl.edu/residency/about-our-program/applicants/" style={{'float':'left', margin: '0px 0px 0px 7px'}}>APPLY</Button>
                            </div> */}
                        </Card.Text>
                    </Card.Body>
                </Card>


            </CardDeck>
        </div>
    );
}

export default ExploreDpt


