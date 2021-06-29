import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    messages_post_Data: [
        {id: 1, message: "hello", like: 3},
        {id: 2, message: "hi", like: 2},
        {id: 3, message: "leatherman", like: 0}
    ]
};


it("new post should be added", () => {
    // 1. create test data and test action
    let action = addPostActionCreator("new post text");
    // 2. call action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.messages_post_Data.length).toBe(4);
});

it("message of new post should be added correctly", () => {
    // 1. create test data and test action
    let action = addPostActionCreator("new post text");
    // 2. call action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.messages_post_Data[3].message).toBe("new post text");
});



it("length after deleting should be decrementing", () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.messages_post_Data.length).toBe(2);
})

it("length after deleting should be unchanged if id incorrect", () => {
    let action = deletePost(300);
    let newState = profileReducer(state, action);
    expect(newState.messages_post_Data.length).toBe(3);
})