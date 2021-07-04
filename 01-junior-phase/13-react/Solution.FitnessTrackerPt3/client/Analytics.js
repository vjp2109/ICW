// receives workouts array as props
import React from 'react';

const Analytics = (props) => {
  const { workouts } = props;
  const allExercises = workouts.reduce((acc, workout) => {
    return [...acc, ...workout.exercises];
  }, []);
  const completedExercises = allExercises.filter((ex) => ex.completed);
  const totalMinutes = completedExercises.reduce((total, ex) => {
    return total + ex.duration;
  }, 0);
  const percentCompleted =
    (completedExercises.length / allExercises.length) * 100;

  // console.log(allExercises, totalMinutes, percentCompleted);
  return (
    <div id='analytics'>
      <div id='analytics-content'>
        <div id='analytics-header'>
          <h2>Analytics</h2>
        </div>
        <dl id='analytics-list'>
          <div>
            <dt>Total Minutes Exercised:</dt>
            <dd id='total-minutes'>{totalMinutes}</dd>
          </div>
          <div>
            <dt>Favorite Exercise:</dt>
            <dd>Running</dd>
          </div>
          <div>
            <dt>Percentage Completed:</dt>
            <dd id='percentage-completed'>{percentCompleted}%</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Analytics;
