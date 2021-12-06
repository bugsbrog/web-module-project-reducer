# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.
* The user presses the 1 button.
* The handleAdd (or whatever you called it) is called.
* The dispatch is called and goes into reducers to find the type of whatever is being called.
* It returns a version of our state, and the total is incremented by one.
* The new version of state is taken into TotalDisplay that takes a parameter of props and that is the state.total.
...

* TotalDisplay shows the total plus 1.
