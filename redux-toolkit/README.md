#### Redux toolkit

- 3가지만 기억
  - configureStore
  - createSlice
  - createAsyncThunk



- 지금까지 알고있는 redux

- ```
  import React from "react";
  import {createStore} from "redux";
  import {Provider, useSelector, useDispatch} from "react-redux" //Provider는 store에 있는 값을 사용하기 위한 가장 큰 틀을 잡아주는 것 (store를 제공하기 위함!)
  // state 데이터의 수정방법을 미리 정의하는 함수이다.
  // state 초기값과 데이터 수정방법을 넣는다 function reducer(state=초기값, 액션)
  function reducer(state, action) {
    if (action.type==="up") {
      return{...state, value: state.value + action.step}
    }
    return reducer
  }
  const initialState = {value: 0} //초기값을 제공하기 위해 사용
  const store = createStore(reducer, initialState)

  function Counter() {
    const dispatch = useDispatch()
    // 카운터가 스토어에 value값을 가져오기 위해 useSelector를 사용
    const count = useSelector(state=>state.value)
    return (
      <Provider store={store}>
        <div>
          {/* 버튼 클릭시 state값을 바꾸는 dispatch작업 */}
          <button onClick={() => {dispatch({type:'up', step:2})}}>+</button>{count}
        </div>
      </Provider>
    )
  }


  function App() {
    return (
      <div>
        <Counter></Counter>

      </div>
    );
  }

  export default App;

  ```

- createSlice

  - ```
    import {createSlice} from "@reduxjs/toolkit"
    // createSlice는 name, initialState(초기값), reducers가 필요하다
    // 하나의 작은 slice(store)를 생성시키는 것임
    const counterSlice = createSlice({
        name: 'counter',
        initialState:{value:0},
        reducers: {
            up: (state,action) => {
              state.value = state.value + action.step
            }
        }
    })
    ```

- configureStore

  - ```
    // configureStore는 작은store(slice)들을 하나의 store로 묶어줌
    // configureStore에는 객체를 전달함
    configureStore({
    	//reducer에는 각각의 slice에 있는 reducers가 들어가면 됨
    	//counterSlice에 reducers를 사용하기에 reducer를 작성
        reducer: {
            counter:counterSlice.reducer
        }
    });
    ```

- dispatch

  - ```
    // 우리 예제로는 button을 클릭시 값을 변경시켜 주기위하여 있는데, 이는 react-redux를 사용하는것 과 형태가 조금 다르다.

    //기존
    <button onClick={() => {dispatch({type:'counterSlice/up', step:2})}}>+</button>{count}

    //변경
    <button onClick={() => {dispatch(counterSlice.actions.up(2))}}>+</button>{count}

    up:(state, action) => {
                console.log(action)
                // 들어가는 값은 default값으로 payload라는 변수명으로 찍히는데, 이 변수를 사용하면 됨
                state.value = state.value + action.payload
            }
    ```

- 이를 한곳에서 이용하지 않고 다른 컴포넌트들로 나누어서 사용 가능하고, 그렇게 되면 코드가 간결하게 나뉘어짐

- 나눌땐 Slice별로 나누고, store.js를 따로 두는걸 추천

