export default (state = [], action) => {
  if (action.type === 'SET_GOALS') {
    return action.goals;
  }
  return state;
};
