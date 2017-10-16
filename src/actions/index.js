export const logUser = email => ({
  type: 'SIGNED_IN',
  email,
});

export const setGoals = goals => ({
  type: 'SET_GOALS',
  goals,
});

export const setCompleted = completeGoals => ({
  type: 'SET_COMPLETED',
  completeGoals,
});
