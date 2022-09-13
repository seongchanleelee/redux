import React from "react";
import {createStore} from "redux";
import {Provider, useSelector, useDispatch} from "react-redux" //Provider는 store에 있는 값을 사용하기 위한 가장 큰 틀을 잡아주는 것 (store를 제공하기 위함!)
// state 데이터의 수정방법을 미리 정의하는 함수이다.
// state 초기값과 데이터 수정방법을 넣는다 function reducer(state=초기값, 액션)
function reducer(state, action) {
  if (action.type==="up") {
    return{...state, value: state.value + action.step}
  }
  return state
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
