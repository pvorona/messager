import React, { Component } from 'react'

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

class Chat extends Component {
  state = {
    message: '',
  }

  onMessageChange = ({ target: { value }}) => {
    this.setState({ message: value })
  }

  sendMessage = () => {
    this.setState({ message: '' })
  }

  render () {
    const { message } = this.state

    return (
      <div>
        <Messages />
        <input onChange={this.onMessageChange} value={message} />
        <button onClick={this.sendMessage}>Send</button>
      </div>
    )
  }
}

const Dialog = ({ id, message }) =>
  <div className="dialog">
    {message}
  </div>

class DialogList extends Component {
  render () {
    const { dialogs } = this.props

    return (
      <div className="dialog-list">
        {dialogs.map(({ id, message }) =>
          <Dialog
            id={id}
            message={message}
            key={id}
          />
        )}
      </div>
    )
  }
}

DialogList.defaultProps = {
  dialogs: [{
    id: 1,
    message: 'Hello friend!',
  }, {
    id: 2,
    message: 'That was really nice weekend, we should definitely repeat it on the next week!',
  }],
}

class App extends Component {
  render() {
    return (
      // <DialogList />
      <Chat />
    )
  }
}

export default App;
