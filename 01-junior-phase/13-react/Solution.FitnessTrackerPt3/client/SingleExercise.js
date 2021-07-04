// receives a single exercise as a prop
import React from 'react';

const SingleExercise = (props) => {
  const { exercise, toggleCompleted } = props;
  const classString = exercise.completed
    ? 'fas fa-check-circle'
    : 'far fa-circle';

  return (
    <React.Fragment>
      <div id='exercise-1' className='exercise-header'>
        <i className={classString} onClick={() => toggleCompleted(exercise)} />
        <h3>{exercise.name}</h3>
        <span>{exercise.duration} min</span>
      </div>
      <div>{exercise.description}</div>
    </React.Fragment>
  );
};

export default SingleExercise;
