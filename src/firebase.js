import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBaZb3wp3nYzEi8H6dhlpDFS8MJcdha4aw',
  authDomain: 'goal-coach-648c2.firebaseapp.com',
  databaseURL: 'https://goal-coach-648c2.firebaseio.com',
  projectId: 'goal-coach-648c2',
  storageBucket: '',
  messagingSenderId: '219640536132',
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
