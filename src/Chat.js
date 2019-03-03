import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addMessage } from './actions'

const Message = ({ text, received }) =>
  <div
    className={`message ${received ? 'message-received' : 'message-sent'}`}
  >
    {text}
  </div>

const MessagesComponent = ({ messages }) =>
  <div className="messages">
    {messages.map(({ id, ...message }) =>
      <Message
        key={id}
        {...message}
      />
    )}
  </div>

export const Messages = connect(
  state => ({
    messages: state.messagesByChatId[state.activeChatId],
  })
)(MessagesComponent)

const ChatInputComponent = ({ addMessage }) => {
  const [message, setMessage] = useState('')

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

const ChatInput = connect(
  undefined,
  { addMessage },
)(ChatInputComponent)

export const Chat = () => {
  return (
    <div className="chat">
      <Messages />
      <ChatInput />
    </div>
  )
}