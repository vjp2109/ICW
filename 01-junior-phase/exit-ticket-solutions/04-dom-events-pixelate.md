## Exit Ticket: Day 4 - DOM Events, Pixelate

**You should be able to:**
- Set up event listeners to handle DOM events
- Explain the concepts of event delegation and event bubbling
- Be able to stop an event from bubbling

### In JavaScript, what can you attach to your elements to deal with events?

- [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
```js
target.addEventListener(type, listener [, options]);
target.addEventListener(type, listener [, useCapture]); // is a boolean that defaults to false to say "I want to run this event listener during the capture phase of my event lifecycle
```

### What are the 3 phases of event propagation?

1. Capturing Phase
2. Target Phase
3. Bubbling Phase
- _Reference_: [An Introduction to DOM Events](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/#event-phases)

### What is the main purpose of event delegation?

- To write an event listener once on a parent node and have it propagate through all the elements between the parent and the target. This allows a common ancestor do work that would have been otherwise repetitive over many different children.

### How do you stop an event from bubbling? Q: Can you stop it?

- [`event.stopPropagation()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
  - This prevents any callbacks from being fired on any nodes further along the event chain, but it does not prevent any additional callbacks of the same event name from being fired on the current node.



  body
   - div (event handler)
     - div (event handler)
       - h1 (h1.addEventListener('click', event => { event.stopPropagation()}));)

### Other Questions
### Stopping Event Propagation Questions
#### 1. What does stopping an event from bubbling do?
Stopping an event from bubbling (`event.stopPropagation()`) will stop the event from triggering any parent elements' event handlers at the point the method was called.

An example of when you would use _stopPropagation_ is if you want to handle keyboard events around modals (or a child window in front of a parent window). A key like the "Escape" key when it is pressed should exit the modal, but should not propagate to exit the parent window.

#### 2. If I want to add a listener to a lot of objects that don't have a common parent, is looping through a query selector my best move?
This depends on what your objects are. If you have many objects that have the same class, or are the same tag, then yes, that would work well. If it is any random grouping of objects, however, you may need to add them one at a time, or add them to a very high ancestor and limit the handler to run for only certain classes/tags only.

#### 3. Running multiple handlers on an event
```js
const button = document.getElementById('coffee');
button.addEventListener('click', event => {
  functionA();
  functionB();
});
button.addEventListener('click', functionA);
button.addEventListener('click', functionB);

// button.addEventListener('click', event => {...});
```
