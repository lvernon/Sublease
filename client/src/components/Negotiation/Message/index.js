import React from 'react';
import moment from 'moment';
import './Message.css';
import Button from 'react-bootstrap/Button'


export default function Message(props) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp
    } = props;

   
    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (

      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`, 
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
        <div>
          {data.othertext} 
          </div>
          <div className="bubble" title={friendlyTimestamp}>
          Original Rent:  {data.message.OriginalRent}
          <br></br>Rent Discount:     {data.message.RentDiscount} 
          <br></br> New Rent:     {data.message.NewRent} 
          <br></br>
          <br></br> Original Application Fee:  {data.message.OriginalApplicationFee} 
          <br></br> Application Fee Discount:    {data.message.ApplicationFeeDiscount}
          <br></br> New Application Fee:     {data.message.NewApplicationFee}
          <br></br>
          <br></br> Original Deposit:       {data.message.OriginalDeposit}  
          <br></br> Deposit Discount:       {data.message.DepositDiscount} 
          <br></br> New Deposit:     {data.message.NewDeposit}  
          <br></br>
          <br></br> Original Lease Transfer Fee:       {data.message.OriginalLeaseTransferFee} 
          <br></br> Lease Transfer Fee Discount:       {data.message.LeaseTransferFeeDiscount} 
          <br></br> New Lease Transfer Fee:        {data.message.NewLeaseTransferFee}
          <br></br>
          <br></br> Months free:       {data.message.MonthsFree}
          <br></br> Utilities:        {data.message.Utilities}   
          <br></br> 
          <div className="mybut">
    Accept Offer
          </div>
  </div>
  
          
        </div>
        
      </div>
    );
}