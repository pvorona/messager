export const initialState = {
    activeChatId: 0,
    chats: [{
        id: 1,
        message: 'Hello friend!',
        userName: 'Robbie Williamson',
        imgUrl: 'https://randomuser.me/api/portraits/men/49.jpg',
    }, {
        id: 2,
        message: 'That was really nice weekend, we should definitely repeat it on the next week!',
        userName: 'Jackie Chan',
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
    }
}