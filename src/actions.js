import { createAction } from './createAction'

export const addMessage = createAction('addMessage', 'message')
export const setActiveChat = createAction('setActiveChat', 'chatId')