# React Sandboxes

This is a collection of small and large sandboxes covering React content. Larger sandboxes have a start and finished branch. Smaller sandboxes don't.

## Getting Started

- Clone the repo
- Navigate to you choosen branch
- Run "npm install" in your CLI to add dependancies
- Run "npm start" to launch Live server

## Available Branches

- main
- props-start
- props-finished
- state
- functions-as-props-start
- function-as-props-finished
- data-request-use-effect
- testing

### Current Branch function-as-props-finished

This is the finishing point for the sandbox codealong.

It is a big codealong so you can get the guys to clone the repo and start on the functions-as-props-start to save styling and the layout of all the components.

Its functions as props so it has been split up to make it easier to teach.

### Intro Functions as Props

The goal is to demonstrate how moving logic into container makes components reusable.

You will create three functions and pass them into 3 of the same Button component.

### Functions as Props + State

The goal is to show how you can connect components to state that lives in the parent container. To pass functions that interact with state to the child components.

You are going to create a counter, two components display the count. 2 buttons are going to increment and decrement it. The third is going to take a input and that will be the value to either increment and decrement it by.

#### Optional Steps

Functions as Props

- Intro to the Button component
- Add three Button Components into the app.
- Add clicked prop to Button and set it to run onclick.
- Start writing functions in app to pass into.
- First Button → Create a log function in container -> Pass ref to the Button.
- Second Button -> Create an alert function in container -> Pass ref to the Button.
- Third Button -> Create a function that uses the EVENT -> Pass ref to the Button.

Functions as Props + State

- Intro to the container and components
- container = Progress
- components = Card, ProgressDisplay, ProgressBar, Button
  ProgressInput

- Add [progression, setProgression] = useState(0) in container
-> Pass progression as props to Display, Bar components
- Write a function to increment the progression state.
-> Pass it to the + Button
- Write a function to decrement the progression state.
-> Pass it to the - Button
- Add [progressBy, setProgressBy] = useState(10) in container
-> Pass state to the progressInput component
- Write a function to set ProgressBy state
-> Pass it to the progressInput component
- Show them anoymous function to pass event
- Update increment, decrement functions to - or + progressBy
