import React from 'react'
import { DialogList } from './ChatList'
import { Chat } from './Chat'
import { reducer } from './reducer'
import { initialState } from './initialState'
import { useRedux } from './util/useRedux'
import * as actions from './actions'

export const AppContext = React.createContext()

const App = () => {
  const context = useRedux(reducer, initialState, actions)

  return (
    <AppContext.Provider value={context}>
      <div className="app">
        <DialogList />
        <Chat />
      </div>
    </AppContext.Provider>
  )
}

export default App;
