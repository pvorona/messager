import React, { useContext, useState } from 'react'
import { AppContext } from './App'

const Message = ({ text, received }) =>
  <div className={`message ${received ? 'message-received' : 'message-sent'}`}>
    {text}
  </div>

const Messages = () => {
  const { state } = useContext(AppContext)
  const messages = state.messagesByChatId[state.activeChatId]

  return (
    <div className="messages">
      {messages.map(({ id, ...message }) =>
        <Message
          key={id}
          id={id}
          {...message}
        />
      )}
    </div>
  )
}

const ChatInput = () => {
  const [message, setMessage] = useState('')
  const { actions: { addMessage } } = useContext(AppContext)

  function submit () {
    addMessage(message)
    setMessage('')
  }

  function handleMessageChange (e) {
    setMessage(e.target.value)
  }

  function handleKeyDown (e) {
    if (e.keyCode === 13) submit()
  }

  return (
    <div className="chat__input-container">
      <input
        autoFocus
        className="chat__input"
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
        value={message}
      />
      <button
        className="chat__input-button"
        onClick={submit}
      >
        Send
      </button>
    </div>
  )
}

export const Chat = () => {
  return (
    <div className="chat">
      <Messages />
      <ChatInput />
    </div>
  )
}