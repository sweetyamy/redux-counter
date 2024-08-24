let initialState = {
  count: 0,
  id: '',
  password: ''
};

function reducer(state = initialState, action) {
  console.log('action', action);

  // if (action.type === 'INCREMENT') {
  //     return {
  //         ...state, // 기존 상태값을 유지하면서 count 값만 변경
  //         count: state.count + 1,
  //     };
  // }
  // return {...state};

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state, // 기존 상태값을 유지하면서 count 값만 변경
        count: state.count + action.payload.num
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload.num
      };
    case 'LOGIN':
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password
      };
    default:
      return { ...state };
  }
}

export default reducer;
