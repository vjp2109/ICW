// receives workouts array as props, renders Analytics and ListWorkouts components
import React from 'react';
import Analytics from './Analytics';
import ListWorkouts from './ListWorkouts';

const Main = (props) => {
  const { workouts, toggleCompleted } = props;

  return (
    <div id='container'>
      <Analytics workouts={workouts} />
      <ListWorkouts workouts={workouts} toggleCompleted={toggleCompleted} />
    </div>
  );
};

export default Main;
