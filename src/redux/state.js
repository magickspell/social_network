

let state = {
    profilePage: {
        messages_post_Data: [
            {id: 1, message: "hello", like: 3},
            {id: 1, message: "hi", like: 2},
            {id: 1, message: "leatherman", like: 0}
        ]
    },

    messagesPage: {
        dialogsData: [
            {id: 1, name: "Shomen"}, /*это объект dialog*/
            {id: 2, name: "Mage"},
            {id: 3, name: "Samurai"},
            {id: 4, name: "Programer"}
        ],

        messagesData: [
            {id: 1, message: "Hi"}, /*это объект message*/
            {id: 2, message: "wake up Samurai"},
            {id: 3, message: "no please"},
            {id: 4, message: "yes"}
        ]
    }
}

export default state;