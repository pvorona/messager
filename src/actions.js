import { createAction } from './util/createAction'

export const addMessage = createAction('addMessage', 'message')
export const setActiveChat = createAction('setActiveChat', 'chatId')