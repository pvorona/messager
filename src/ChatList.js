import React from 'react'
import { connect } from 'react-redux'

const Dialog = ({ userName, message, imgUrl }) =>
  <div className="dialog">
    <img className="dialog__image" alt="sender avatar" src={imgUrl} />
    <div className="dialog__content">
      <div className="dialog__author">{userName}</div>
      <div className="dialog__message">{message}</div>
    </div>
  </div>

const DialogListComponent = ({ dialogs }) =>
  <div className="dialog-list">
    {dialogs.map(({ id, ...message }) =>
      <Dialog
        key={id}
        {...message}
      />
    )}
  </div>

export const DialogList = connect(
  state => ({
    dialogs: state.chats
  })
)(DialogListComponent)