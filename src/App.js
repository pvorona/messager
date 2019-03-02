import React, { useState } from 'react'

const Message = ({ text }) =>
  text

const Messages = ({ messages }) =>
  <div>
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

const Chat = () => {
  const [message, sendMessage] = useState('')
  return (
    <div>
      <Messages />
      <input onChange={({ target: { value }}) => sendMessage(value)} value={message} />
      <button onClick={() => sendMessage('')}>Send</button>
    </div>
  )
}

const Dialog = ({ id, message }) =>
  <div className="dialog">
    {message}
  </div>

const DialogList = ({ dialogs }) =>
  <div className="dialog-list">
    {dialogs.map(({ id, message }) =>
      <Dialog
        id={id}
        message={message}
        key={id}
      />
    )}
  </div>

DialogList.defaultProps = {
  dialogs: [{
    id: 1,
    message: 'Hello friend!',
  }, {
    id: 2,
    message: 'That was really nice weekend, we should definitely repeat it on the next week!',
  }],
}

const App = () =>
  <>
    <DialogList />
    <Chat />
  </>

export default App;
