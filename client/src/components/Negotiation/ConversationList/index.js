import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import health from '../../../assets/UFhealth.png'

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
        let newConversations = [
            {
            photo: health,
            name: 'John Smith',
            text: 'Counteroffer recieved'}, 
            {
              photo: health,
              name: 'Jennifer Lim',
              text: 'Counteroffer recieved'
            },
            {
              photo: health,
              name: 'Michelle Watts',
              text: 'You sent an offer'
            },
            {
              photo: health,
              name: 'Gary Wright',
              text: 'You sent an offer'
            }
        ]
        setConversations([...conversations, ...newConversations])
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
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