// receives a single workout as a prop, renders a list of SingleExercises components
import React from 'react';
import SingleExercise from './SingleExercise';

const SingleWorkout = (props) => {
  const { workout, toggleCompleted } = props;
  return (
    <div className='workout'>
      <div className='workout-header'>
        <h2>{workout.name}</h2>
        <i className='fas fa-edit' />
      </div>
      {workout.exercises.map((exercise) => {
        return (
          <SingleExercise
            key={exercise.id}
            exercise={exercise}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
};

export default SingleWorkout;
