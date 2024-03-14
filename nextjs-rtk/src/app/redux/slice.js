const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
}

const Slice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data)
            localStorage.setItem('users', JSON.stringify([...state.users]))
        },
        removeUser: (state, action) => {
            const data = state.users.filter(user => user.id !== action.payload);
            state.users = data
            // localStorage.removeItem
            localStorage.setItem('users', JSON.stringify([...state.users]));

        }
    }
})

export const { addUser, removeUser } = Slice.actions
export default Slice.reducer;