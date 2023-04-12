import { createSlice, configureStore } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {
  name: '송윤정',
  memberYear: 1,
  gender: 'Female',
  age: '28세'
  }
})

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCount(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state[index].count++
    },
    subCount(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      if(state[index].count > 1) {state[index].count--}
    },
    deleteItem(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state.splice(index, 1)
    },
    addItem(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload.id})
      if(index > -1) {
        state[index].count++
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { addCount, subCount, deleteItem, addItem } = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})