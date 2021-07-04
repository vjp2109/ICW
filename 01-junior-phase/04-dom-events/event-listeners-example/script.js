// get our divs for the individual house elements
const slytherin = document.getElementById('slytherin');
const ravenclaw = document.getElementById('ravenclaw');
const hufflepuff = document.getElementById('hufflepuff');
const gryffindor = document.getElementById('gryffindor');

// the callback function to run when we click on a house element
function handlePoints (e) {
  console.log('the target', e.target);
  console.log('this', this);
  if (e.target.id === 'gryffindor') {
    e.target.innerHTML = '> 9000';
    // console.log('Gryffindor wins the house cup no matter what!');
  } else {
    const currentPoints = Number(e.target.innerHTML);
    e.target.innerHTML = currentPoints + 10;
  }
}

// instead of this non-dry code
// slytherin.addEventListener('click', handlePoints);
// ravenclaw.addEventListener('click', handlePoints);
// hufflepuff.addEventListener('click', handlePoints);
// gryffindor.addEventListener('click', handlePoints);
slytherin.addEventListener('click', event => {
  console.log('inside of slytherin\'s event handler');
  event.stopPropagation();
})

// delegate this to its parent
const section = document.getElementById('list-of-houses');

// const arrowHandlePoints = (event) => {
//   event.target.innerHTML = 'arrow!';
//   console.log('this', this);
// }
// do my best to change the this context!!!
// const boundArrowHandlePoints = arrowHandlePoints.bind(section);

section.addEventListener('click', handlePoints);
// section.addEventListener('click', arrowHandlePoints);
// section.addEventListener('click', boundArrowHandlePoints);
