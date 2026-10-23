import { createSlice } from '@reduxjs/toolkit'


export const activeUserSlice = createSlice({
  
  name: 'active',
  initialState : {
    value: null
  },

  reducers: {
    activeuserinfo: (state, actions) => {
      state.value = actions.payload
    },
  }
})
export const { activeuserinfo } = activeUserSlice.actions

export default activeUserSlice.reducer