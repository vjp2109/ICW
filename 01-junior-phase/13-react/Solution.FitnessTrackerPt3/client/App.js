// stores array of workouts in state, renders Header and Main
import React from 'react';
import Header from './Header';
import Main from './Main';
import { workouts } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts
    };

    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted(exercise) {
    const updatedWorkouts = workouts.map((workout) => {
      workout.exercises = workout.exercises.map((ex) => {
        if (ex.id === exercise.id) {
          ex.completed = !ex.completed;
        }
        return ex;
      });
      return workout;
    });

    this.setState({
      workouts: updatedWorkouts
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main
          workouts={this.state.workouts}
          toggleCompleted={this.toggleCompleted}
        />
      </React.Fragment>
    );
  }
}

export default App;
