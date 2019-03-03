import React from 'react'
import { connect } from 'react-redux'
import { setActiveChat } from './actions'

const DialogComponent = ({ id, username, message, imgUrl, setActiveChat }) =>
  <div className="dialog" onClick={() => setActiveChat(id)}>
    <img className="dialog__image" alt="sender avatar" src={imgUrl} />
    <div className="dialog__content">
      <div className="dialog__author">{username}</div>
      <div className="dialog__message">{message}</div>
    </div>
  </div>

const Dialog = connect(
  undefined,
  { setActiveChat },
)(DialogComponent)

const DialogListComponent = ({ dialogs }) =>
  <div className="dialog-list">
    {dialogs.map(({ id, ...dialog }) =>
      <Dialog
        key={id}
        id={id}
        {...dialog}
      />
    )}
  </div>

export const DialogList = connect(
  state => ({
    dialogs: state.chats
  })
)(DialogListComponent)