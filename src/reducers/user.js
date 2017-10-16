let user = {
  email: null,
};

export default (state = user, action) => {
  if (action.type === 'SIGNED_IN') {
    const { email } = action;
    user = {
      email,
    };
    return user;
  }
  return user;
};
