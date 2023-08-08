// src/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
  const findObject = state.find(obj => obj.id === action.payload.id);

  if(findObject){

console.log(true)
}else{
  state.push(action.payload);

}
    },
    
    remove: (state, action) => {
      const findObject = state.find(obj => obj.id === action.payload.id);
      if(findObject){
        const objectIdToRemove = action.payload.id;

        const indexToRemove = state.findIndex(item => item.id === objectIdToRemove);

        if (indexToRemove !== -1) {
          state.splice(indexToRemove, 1);
        }
            
    }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
