function myUseState(initial) {
  let state = initial;
  function setState(v) {
    state = v;
  }

  return [state, setState];
}

const [myState, mySetState] = myUseState(10);
console.log(myState);
mySetState(30);
console.log(myState);
//애렇게 하면 내부적으로 state 값은 set되지만, myState는 처음 값을 가지고 있기 때문에 변경이 반영되지 않음
//리액트에서는 리렌더링을 통해 값 업데이트

function useStateLike(initial) {
  let state = initial;
  function getState() {
    return state;
  }
  function setState(v) {
    state = v;
  }
  return [getState, setState];
}

const [getState, setState] = useStateLike(100);
console.log(getState()); //100
setState(10);
console.log(getState()); //10
