// receives workouts array as props, renders a list of SingleWorkouts components
import React from 'react';
import SingleWorkout from './SingleWorkout';

const ListWorkouts = (props) => {
  const { workouts, toggleCompleted } = props;

  return (
    <div id='workouts'>
      {/* HARDCODED (don't do this!) */}
      {/* <SingleWorkout
        key={workouts[0].id}
        workout={workouts[0]}
        toggleCompleted={toggleCompleted}
      />
      <SingleWorkout
        key={workouts[1].id}
        workout={workouts[1]}
        toggleCompleted={toggleCompleted}
      /> */}

      {/* DYNAMIC (do this!) */}
      {workouts.map((workout) => {
        return (
          <SingleWorkout
            key={workout.id}
            workout={workout}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
};

export default ListWorkouts;
