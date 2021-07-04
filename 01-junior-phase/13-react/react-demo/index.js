// 1) Build out a component that will show the Hogwarts h1 tag, and also an unordered list of 4 houses

import React from 'react';
import ReactDOM from 'react-dom';

// props -> an object that every component has access to.
// functional -> props is the first argument of a functional component
// class -> props is access through `this.props`
// every key value pair inside of props is a property passed down from its parent component, through attribute-like key/value pairs

// child component, a functional component
const House = (props) => {
  console.log('what are props?', props);
  // in JSX, you need to use camelcase and classes are wrritten as "className" key

  // when I click on this li, I want to call `props.changeHouse` and pass in my name
  // () => props.changeHouse(props.name)

  // if the selectedHouse is MY house name, my className will be "selected"
  let className = props.name === props.selectedHouse ? 'selected' : '';

  return <li onClick={() => props.changeHouse(props.name)} className={className}>{props.name}</li>
}

// li.addEventListener('click', e => {})


// class component
class Hogwarts extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedHouse: ''
    }
    this.changeHouse = this.changeHouse.bind(this);
  }

  changeHouse(house) {
    console.log('what is house?', house);
    // setState accepts an object whose keys arer the state we are changing, and the values are the new state
    // I am not saying "make my state this object ONLY".
    // I am saying, "Make this change to these specific properties in the object"
    this.setState({selectedHouse: house}); // asynchronous and does not return a promise
  }

  render() { // invoked every time we call setState and looks for changes in state in the JSX
    console.log('new state', this.state);
    return (<div>
      <h1>Which Hogwarts house are you?</h1>
      <ul>
        <House selectedHouse={this.state.selectedHouse} name="DurmstrangHouse" changeHouse={this.changeHouse} />
        <House selectedHouse={this.state.selectedHouse} name="Gryffindor" changeHouse={this.changeHouse} />
        <House selectedHouse={this.state.selectedHouse} name="Hufflepuff" changeHouse={this.changeHouse} />
        <House selectedHouse={this.state.selectedHouse} name="Ravenclaw" changeHouse={this.changeHouse} />
        <House selectedHouse={this.state.selectedHouse} name="Slytherin" changeHouse={this.changeHouse} />
      </ul>
    </div>)
  }
}


// functional component- no class, no state
// const HogwartsFunctional = () => {
//   // there is NO render method here at all, but our "return" call will perform render under the hood
//   console.log('This was in hogwarts FUNCTIONAL!');
//   return (<div>
//     <h1>Which Hogwarts house are you?</h1>
//     <ul>
//       <li>Gryffindor</li>
//       <li>Hufflepuff</li>
//       <li>Ravenclaw</li>
//       <li>Slytherin</li>
//     </ul>
//   </div>)
// }


ReactDOM.render(<Hogwarts />, document.getElementById('app'));

