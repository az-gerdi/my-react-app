import React from 'react';
import ReactDOM from 'react-dom';

function Mailbox(props) {
    // const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {1+1 > 0 &&
          <h2>
            You have unread messages.            
          </h2>
        }
      </div>
    );
  }

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
);

export default Mailbox;