export const initialState = {
    activeChatId: 0,
    chats: [{
        id: 0,
        message: 'Hello friend!',
        username: 'Robbie Williamson',
        imgUrl: 'https://randomuser.me/api/portraits/men/49.jpg',
    }, {
        id: 1,
        message: 'That was really nice weekend, we should definitely repeat it on the next week!',
        username: 'Jackie Chan',
        imgUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
    }],
    messagesByChatId: {
        0: [{
            id: 1,
            text: 'Hello friend!',
            received: true,
        }, {
            id: 2,
            text: 'Hi',
        }],
        1: [{
            id: 1,
            text: 'That was really nice weekend, we should definitely repeat it on the next week!',
            received: true,
        }],
    },
}