export default (state = [], action) => {
  if (action.type === 'SET_COMPLETED') {
    return action.completeGoals;
  }
  return state;
};
