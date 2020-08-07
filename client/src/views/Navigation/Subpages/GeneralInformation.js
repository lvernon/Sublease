import React from 'react'
import './GeneralInformation.css'
import { CardDeck, Card, Button } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

/*
    General information section on the navigation page. Displays static information about
    apartment listing
*/
function GeneralInformation(props) {
    return (
        <div id="general-info-container">
            <h1 id="navigation-info-header">Listing Details</h1>
            <div className="navigation-section starter-section">
                <h2 className="navigation-section-header">Apartment Complex: <span id="complexName">The Enclave</span></h2>
                <h3>Seller: Ashley Walker</h3>
                <p>
                <Image src="https://medialibrarycdn.entrata.com/media_library/10357/5cc9ee747ba9c4.98269742782.png" fluid 
                style={{'maxHeight': '700px',"width":"50%", "marginLeft":"auto", "marginRight":"auto","display":"block"}}/>
                <h4 style={{'maxHeight': '700px', "marginLeft":"auto", "marginRight":"auto","display":"block", "marginTop":"20px"}}>
                    Rent: $500
                    <span style={{'marginLeft': '200px'}}>Rooms: 3</span>
                    <span style={{'marginLeft': '200px'}}>Bathrooms: 3</span>
                    <p style={{'marginTop': '20px'}}>Current Roommates: 2</p>
                </h4>
                <br/>
                <h3>Description</h3>
                The Enclave's Retreat floor plan features 3 bedrooms, each with a private bathroom and walk-in closet. 
                The home is fully furnished and includes a washer and dryer, as well as a fully equipped kitchen larger 
                than any of our other floor plans. With granite countertops in every kitchen, you can choose one of our 
                classic style homes to feature carpet, tile, and a black style furniture package or one of our signature 
                suites to feature plank flooring and an upgraded furniture package with memory foam mattresses. Rent 
                includes cable with HBO, high speed internet, parking, pest control, and emergency maintenance.
                <br/><br/>
                <h5>Additional Details</h5>
                <ul>
                    <li>Deposit: $300</li>
                    <li>Lease Transfer Fee: $350</li>
                    <li>Application Fee: $50</li>
                    <li>Available By: 09/ 10/ 2020</li>
                </ul>
                
                
                <br/>
                <h3>Amenities</h3>
                <ul>
                    <li>Washer & Dryer</li>
                    <li>Private Bathroom</li>
                    <li>Utilities Included</li>
                    <li>Fully furnished</li>
                </ul>

                
                </p>
            </div>
            <img src="client/public/commSection.png" height="40px" alt=""></img>
            <Image src="client/public/commSection.png" fluid />

            
        </div>
    );
}

export default GeneralInformation;