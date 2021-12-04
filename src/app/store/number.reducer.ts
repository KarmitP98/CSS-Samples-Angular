export const numberReducer = (state: { num: number } = {num: 1}, action: any) => {
  switch (action.type) {
    case 'ADD':
      return {...state, num: state.num + 1};
    case 'SUB':
      return {...state, num: state.num - 1};
    default:
      return {...state};
  }
};
