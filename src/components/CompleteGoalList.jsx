import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', (snap) => {
      const completeGoals = [];
      snap.forEach((completeGoal) => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      });
      this.props.setCompleted(completeGoals);
      console.log(this.props);
    });
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        {this.props.completeGoals.map((completeGoal) => {
          const { title, email } = completeGoal;
          return (
            <div key={Math.random()}>
              <strong>{title}</strong> completed by <em>{email}</em>
            </div>
          );
        })}
        <button className="btn btn-primary" onClick={() => this.clearCompleted()}>
          Clear All
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    completeGoals: state.completedGoals,
  };
};

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
