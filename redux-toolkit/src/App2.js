import React from "react";
// import {createStore} from "redux";
import {Provider, useSelector, useDispatch} from "react-redux" //Provider는 store에 있는 값을 사용하기 위한 가장 큰 틀을 잡아주는 것 (store를 제공하기 위함!)
import store from './store'
import {up} from './counterSlice'

function Counter() {
  const dispatch = useDispatch()
  // 카운터가 스토어에 value값을 가져오기 위해 useSelector를 사용
  const count = useSelector(state=>
    state.counter.value)
  return (
    <Provider store={store}>
      <div>
        {/* 버튼 클릭시 state값을 바꾸는 dispatch작업 */}
        {/* <button onClick={() => {dispatch({type:'counterSlice/up', step:2})}}>+</button>{count} */}
        <button onClick={() => {dispatch(up(2))}}>+</button>{count}
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
