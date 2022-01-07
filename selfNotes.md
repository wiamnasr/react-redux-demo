1. We need to create a store
2. We need a reducer function that will change that store
3. We then need an action and a component or any other code that sets up a subscription to the store

<br></br>
<br></br>

## Starting with the central piece of redux. the store that components subscribe to

> ### The store manages some data determined by the reducer function because its the reducer function that will produce new state snapshots whenever an action reaches it

> ### When we run the code for the first time, the reducer will also be executed with a default action that should spit out the initial state

<br></br>
<br></br>

## Reducer function

### A standard JS function that will be called by the redux library and will receive 2 parameters:

> ### The old/existing state, and the action that was dispatched

### The reducer function must always return a new state object

### The reducer function is a pure function => the same values for the inputs, always should produce exactly the same outputs and there should be no side-effects inside of that function

> ### Meaning no http requests should be sent or write/fetch from local storage

## Instead, a reducer should just be a function, that takes given inputs, which are provided by redux, and then produces the expected output => a new state object

<br></br>
<br></br>

## To make redux aware of this subscriber function, and tell it that the counterSubscriber function should be executed whenever our state changes

## We do that by calling the subscribe method on the store

## The subscribe method expects a function, that redux will execute for us whenever the data in the store changed

> ## We just point at it as it will be executed by redux

<br></br>
<br></br>

## Creating an action to dispatch

> ### dispatch() is method that dispatches an action

> ### An Action is a js object with a type property that acts as an identifier => typically we use a unique string, so that different things dispatched, lead to different things being done to the reducer

<br></br>
<br></br>
