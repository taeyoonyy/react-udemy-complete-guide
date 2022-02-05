import { createStore } from "redux";
import { createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true };

// 전역 상태의 슬라이스를 미리 만들어둬야한다.
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// 액션 식별자 값을 얻기 위해서 counterSlice.actions 사용

const store = configureStore({
  reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;

export default store;
