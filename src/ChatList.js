import React, { useContext } from 'react'
import { AppContext } from './App'

const Dialog = ({ id, username, message, imgUrl }) => {
  const { actions: { setActiveChat } } = useContext(AppContext)

  return (
    <div className="dialog" onClick={() => setActiveChat(id)}>
      <img className="dialog__image" alt="sender avatar" src={imgUrl} />
      <div className="dialog__content">
        <div className="dialog__author">{username}</div>
        <div className="dialog__message">{message}</div>
      </div>
    </div>
  )
}

export const DialogList = () => {
  const { state: { chats } } = useContext(AppContext)

  return (
    <div className="dialog-list">
      {chats.map(({ id, ...dialog }) =>
        <Dialog
          key={id}
          id={id}
          {...dialog}
        />
      )}
    </div>
  )
}