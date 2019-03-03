import { createReducer } from './createReducer'
import { addMessage } from './actions'

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
    })
})