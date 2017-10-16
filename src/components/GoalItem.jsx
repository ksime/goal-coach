import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    // add complete goals on the database
    // remove this goal from the goals reference
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

export default connect(state => ({ user: state.user }), null)(GoalItem);
