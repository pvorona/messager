import { createReducer } from './util/createReducer'
import { addMessage, setActiveChat } from './actions'

export const reducer = createReducer({
  activeChatId: undefined,
  messagesByChatId: {},
  chats: [],
}, {
  [addMessage]: (state, { message }) => ({
    ...state,
    messagesByChatId: {
      ...state.messagesByChatId,
      [state.activeChatId]: [...state.messagesByChatId[state.activeChatId], { id: Date.now(), text: message }]
    }
  }),
  [setActiveChat]: (state, { chatId }) => ({
    ...state,
    activeChatId: chatId,
  }),
})