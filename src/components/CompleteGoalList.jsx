import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  static clearCompleted() {
    completeGoalRef.set([]);
  }

  componentDidMount() {
    completeGoalRef.on('value', (snap) => {
      const completeGoals = [];
      snap.forEach((completeGoal) => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      });
      this.props.setCompleted(completeGoals);
    });
  }

  render() {
    const { completeGoals } = this.props;
    return (
      <div>
        {completeGoals.map((completeGoal) => {
          const { title, email } = completeGoal;
          return (
            <div key={Math.random()}>
              <strong>{title}</strong> completed by <em>{email}</em>
            </div>
          );
        })}
        <button className="btn btn-primary" onClick={() => CompleteGoalList.clearCompleted()}>
          Clear All
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  completeGoals: state.completedGoals,
});

CompleteGoalList.propTypes = {
  setCompleted: PropTypes.func,
  completeGoals: PropTypes.arrayOf(PropTypes.object),
};

CompleteGoalList.defaultProps = {
  setCompleted: completeGoals => ({
    type: 'SET_COMPLETED',
    completeGoals,
  }),
  completeGoals: [],
};

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
