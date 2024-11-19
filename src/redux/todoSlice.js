import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice ({
    name: 'todolist',
    initialState: {
        value: []
    },
    reducers: {
        addTodo: (state,action) =>{
            state.value.push(action.payload);
        },
        removeTodo: (state,action) => {
            state.value = state.value.filter(item =>  item !== action.payload )
        }
    }
})

export const {addTodo,removeTodo} = TodoSlice.actions
export default TodoSlice.reducer