import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', (snap) => {
      const goals = [];
      snap.forEach((goal) => {
        const { email, title } = goal.val();
        const id = goal.key;
        goals.push({ email, title, id });
      });
      this.props.setGoals(goals);
    });
  }
  render() {
    return <div>{this.props.goals.map(goal => <GoalItem key={Math.random()} goal={goal} />)}</div>;
  }
}

export default connect(state => ({ goals: state.goals }), { setGoals })(GoalList);
