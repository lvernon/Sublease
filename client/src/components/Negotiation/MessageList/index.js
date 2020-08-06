import React, {useEffect, useState} from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import axios from 'axios';

import './MessageList.css';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  },[])

 function createBody (listing) {
    let bod ="";
let match = null;
let ID = listing.listCompId;
    axios.post('/comp/list/byId', 
      324
  ).then(response => {
      let listings = response.data.results.map(result => {
        return {
          origRent: result.rentPerMonth,
          origAppFee: result.applicationFee,
          origDeposit: result.deposit,
          origTransferFee: result.leaseTransferFee
        };
    });
     match = listings.slice(0);
  });
      bod = 
      `Original Rent: $ ${(match.rentPerMonth).toString()} \n
      Rent Discount: $    ${(match.rentPerMonth-listing.rentPerMonth).toString()}    \n   
       New Rent: $   ${(listing.rentPerMonth).toString()}  \n\n   

       Original Application Fee: $   ${(match.applicationFee).toString()}   \n   
       Application Fee Discount: $   ${(match.applicationFee-listing.applicationFee).toString()}   \n   
       New Application Fee: $  ${(listing.applicationFee).toString()}   \n\n   

       Original Deposit: $   ${(match.deposit).toString()}   \n   
       Deposit Discount: $   ${(match.deposit-listing.deposit).toString()}   \n   
       New Deposit: $  ${(listing.deposit).toString()}   \n\n   

       Original Lease Transfer Fee: $    ${(match.leaseTransferFee).toString()}   \n   
       Lease Transfer Fee Discount: $    ${(match.leaseTransferFee-listing.leaseTransferFee).toString()}   \n   
       New Lease Transfer Fee: $   ${(listing.leaseTransferFee).toString()}   \n\n   

       Months free:    ${(listing.monthsFree).toString()}   \n\n   
       Utilities    ${(listing.leaseTransferFee).toString()}`; //change to yes or no logic

      return bod;
  }
  
  const getMessages = () => {
      let msgsA =[];
      let msgs =[];
      axios.get('/sell/list', {}).then(function(response){
         msgsA= (response.data);
         msgsA.map(result => {
          // console.log(result.data.name);

          /* { id: result.data.listCompId,
           author: result.data.name,
           message: 'hello',
            timeStamp: new Date().getTime(),
           }*/
           msgs.push(msgs);
          });
        })
        .then(()=>{
            setMessages([...messages, ...msgs])
          })
     
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

    return(
      <div className="message-list">
        <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        />

        <div className="message-list-container">{renderMessages()}</div>

        <Compose rightItems={[
          <ToolbarButton key="photo" icon="ion-ios-camera" />,
          <ToolbarButton key="image" icon="ion-ios-image" />,
          <ToolbarButton key="audio" icon="ion-ios-mic" />,
          <ToolbarButton key="money" icon="ion-ios-card" />,
          <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
          <ToolbarButton key="emoji" icon="ion-ios-happy" />
        ]}/>
      </div>
    );
}