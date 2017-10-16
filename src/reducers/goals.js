export default (state = [], action) => {
  if (action.type === 'SET_GOALS') {
    const { goals } = action;
    return goals;
  }
  return state;
};
