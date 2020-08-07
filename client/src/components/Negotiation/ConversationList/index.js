import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import woman1 from '../../../assets/woman1.jpg'
import woman2 from '../../../assets/woman2.jpg'
import man1 from '../../../assets/man1.jpg'
import man2 from '../../../assets/man2.jpg'

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
        let newConversations = [
            {
            photo: man1,
            name: 'John Smith',
            text: 'Counteroffer recieved'}, 
            {
              photo: woman2,
              name: 'Jennifer Lim',
              text: 'Counteroffer recieved'
            },
            {
              photo: woman1,
              name: 'Michelle Watts',
              text: 'You sent an offer'
            },
            {
              photo: man2,
              name: 'Gary Wright',
              text: 'You sent an offer'
            }
        ]
        setConversations([...conversations, ...newConversations])
  }

    return (
      <div className="conversation-list">
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
}