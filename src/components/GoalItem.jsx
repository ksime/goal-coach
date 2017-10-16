import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    const { email } = this.props.user;
    const { title, id } = this.props.goal;
    goalRef.child(id).remove();
    completeGoalRef.push({ email, title });
  }
  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{ margin: '5px' }}>
        <strong>{title}</strong>
        <span style={{ marginRight: '5px' }}>
          {' '}
          submitted by <em>{email}</em>
        </span>
        <button className="btn btn-sm btn-primary" onClick={() => this.completeGoal()}>
          Complete
        </button>
      </div>
    );
  }
}

GoalItem.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  goal: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
  }),
};

GoalItem.defaultProps = {
  user: {},
  goal: {},
};

export default connect(state => ({ user: state.user }), null)(GoalItem);
