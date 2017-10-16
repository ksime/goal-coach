import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
  static signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{ margin: '5px' }}>
        <div>
          <h3>Goal Coach</h3>
          <AddGoal />
          <hr />
          <h4>Goals</h4>
          <GoalList />
          <hr />
          <h4>Complete Goals</h4>
          <CompleteGoalList />
          <hr />
        </div>
        <button className="btn btn-danger" onClick={() => App.signOut()}>
          Sign Out
        </button>
      </div>
    );
  }
}

export default connect(state => state, null)(App);
