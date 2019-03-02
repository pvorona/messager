import React, { useState } from 'react'

const Message = ({ text }) =>
  <>
  <div className="message message-received">{text}</div>
  <div className="message message-sent">{text}</div>
  </>

const Messages = ({ messages }) =>
  <div className="messages">
    {messages.map(({ text, id }) =>
      <Message
        text={text}
        id={id}
        key={id}
      />
    )}
  </div>

Messages.defaultProps = {
  messages: [{
    text: 'Hello friend!',
    id: 1,
  }]
}

const ChatInput = () => {
  const [message, sendMessage] = useState('')
  return (
    <div>
      <div
        className="chat__input"
        contentEditable
        onChange={({ target: { value }}) => sendMessage(value)}
        value={message}
      />
      <button onClick={() => sendMessage('')}>Send</button>
    </div>
  )
}

const Chat = () => {
  return (
    <div className="chat">
      <Messages />
      <ChatInput />
    </div>
  )
}

const Dialog = ({ userName, message, imgUrl }) =>
  <div className="dialog">
    <img className="dialog__image" alt="sender avatar" src={imgUrl} />
    <div className="dialog__content">
      <div className="dialog__author">{userName}</div>
      <div className="dialog__message">{message}</div>
    </div>
  </div>

const DialogList = ({ dialogs }) =>
  <div className="dialog-list">
    {dialogs.map(({ id, ...message }) =>
      <Dialog
        key={id}
        {...message}
      />
    )}
  </div>

DialogList.defaultProps = {
  dialogs: [{
    id: 1,
    message: 'Hello friend!',
    userName: 'Robbie Williamson',
    imgUrl: 'https://randomuser.me/api/portraits/men/49.jpg',
  }, {
    id: 2,
    message: 'That was really nice weekend, we should definitely repeat it on the next week!',
    userName: 'Robbie Williamson',
    imgUrl: 'https://randomuser.me/api/portraits/men/49.jpg',
  }],
}

const App = () =>
  <div className="app">
    <DialogList />
    <Chat />
  </div>

export default App;
